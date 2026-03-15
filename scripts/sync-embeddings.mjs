/**
 * Sync blog post embeddings to the housing-pro-api backend.
 * Run: npm run sync-embeddings
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const POSTS_DIR = path.join(__dirname, '..', 'content', 'posts')
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'https://sites-housing.tjmarr.easypanel.host'

// Minimal front matter parser (avoids gray-matter dependency issues)
function parseFrontMatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return { data: {}, content: raw }

  const data = {}
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w+):\s*(.+)$/)
    if (!m) continue
    const val = m[2].trim().replace(/^["']|["']$/g, '')
    data[m[1]] = val === 'true' ? true : val === 'false' ? false : val
  }

  return { data, content: raw.slice(match[0].length).trim() }
}

const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.mdx'))
console.log(`Found ${files.length} posts. Syncing to ${API_URL}/search/sync\n`)

let ok = 0
let fail = 0

for (const file of files) {
  const slug = file.replace('.mdx', '')
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8')
  const { data, content } = parseFrontMatter(raw)

  if (data.draft === true) {
    console.log(`  ⏭  ${slug} (draft — skipped)`)
    continue
  }

  try {
    const res = await fetch(`${API_URL}/search/sync`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        slug,
        title: data.title ?? slug,
        summary: data.excerpt ?? data.description ?? null,
        // embed title + description + first 800 chars of body (fits comfortably in context)
        content: `${data.title ?? ''}\n\n${data.description ?? ''}\n\n${content.slice(0, 800)}`,
      }),
    })

    if (res.ok) {
      console.log(`  ✅  ${slug}`)
      ok++
    } else {
      const body = await res.text()
      console.log(`  ❌  ${slug} — ${res.status} ${body}`)
      fail++
    }
  } catch (err) {
    console.log(`  ❌  ${slug} — ${err.message}`)
    fail++
  }
}

console.log(`\nDone: ${ok} synced, ${fail} failed.`)
