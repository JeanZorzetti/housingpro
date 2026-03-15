/**
 * Sync blog post embeddings to the housing-pro-api backend.
 * Run: node scripts/sync-embeddings.mjs
 *
 * Requires NEXT_PUBLIC_API_URL in .env (or set via env var before running).
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const POSTS_DIR = path.join(__dirname, '..', 'content', 'posts')
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'https://sites-housing.tjmarr.easypanel.host'

const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.mdx'))
console.log(`Found ${files.length} posts. Syncing to ${API_URL}/search/sync\n`)

let ok = 0
let fail = 0

for (const file of files) {
  const slug = file.replace('.mdx', '')
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8')
  const { data, content } = matter(raw)

  if (data.draft) {
    console.log(`  ⏭  ${slug} (draft — skipped)`)
    continue
  }

  try {
    const res = await fetch(`${API_URL}/search/sync`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        slug,
        title: data.title,
        summary: data.excerpt ?? data.description ?? null,
        content: `${data.title}\n\n${data.description ?? ''}\n\n${content}`,
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
