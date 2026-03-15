import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const POSTS_DIR = path.join(process.cwd(), 'content/posts')

export interface PostFrontMatter {
  slug: string
  title: string
  excerpt: string       // preview curto na listagem
  description: string   // meta description SEO (120-160 chars)
  category: string
  readTime: string
  date: string          // ISO: "2026-03-10"
  dateFormatted: string // "10 mar 2026"
  lastModified?: string // ISO — para schema.org dateModified
  author: { name: string; role: string; initials: string }
  tags: string[]
  draft?: boolean
  noindex?: boolean
}

export interface Post extends PostFrontMatter {
  content: string
}

const MONTHS = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

function formatDate(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number)
  return `${day} ${MONTHS[month - 1]} ${year}`
}

function parseFile(slug: string): PostFrontMatter {
  const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.mdx`), 'utf-8')
  const { data } = matter(raw)
  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    description: data.description ?? data.excerpt,
    category: data.category,
    readTime: data.readTime,
    date: data.date,
    dateFormatted: formatDate(data.date),
    lastModified: data.lastModified,
    author: data.author,
    tags: data.tags ?? [],
    draft: data.draft ?? false,
    noindex: data.noindex ?? false,
  }
}

export function getAllPosts(): PostFrontMatter[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter(f => f.endsWith('.mdx'))
    .map(f => parseFile(f.replace('.mdx', '')))
    .filter(p => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPost(slug: string): Post | null {
  const filepath = path.join(POSTS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filepath)) return null
  const raw = fs.readFileSync(filepath, 'utf-8')
  const { data, content } = matter(raw)
  return { ...parseFile(slug), content } as Post
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace('.mdx', ''))
}

export function getCategories(): string[] {
  return [...new Set(getAllPosts().map(p => p.category))]
}
