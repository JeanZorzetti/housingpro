# Housing PRO — Next.js Project Guide

## Stack

- **Next.js 16.1.6** — App Router, Turbopack
- **React 19** — Server Components por padrão
- **TypeScript 5**
- **Tailwind CSS v4** — config via `@theme inline` em `globals.css` (sem `tailwind.config.ts`)
- **MDX** — `next-mdx-remote/rsc` + `gray-matter`
- **Deploy** — Vercel (`https://housingpro-tau.vercel.app`)
- **Idioma** — pt-BR em todo o conteúdo

---

## Blog — Arquitetura

```
content/posts/          ← arquivos .mdx (um por artigo)
src/lib/mdx.ts          ← getAllPosts, getPost, getAllSlugs, getCategories
src/components/mdx/
  Callout.tsx           ← único componente MDX customizado atual
src/app/blog/
  page.tsx              ← listagem
  [slug]/page.tsx       ← artigo individual (SSG via generateStaticParams)
src/app/sitemap.ts      ← usa getAllPosts() — posts novos entram automaticamente
```

**Adicionar novo post:** criar `content/posts/meu-slug.mdx` → próximo deploy inclui automaticamente.

---

## Front Matter — Schema Completo

```yaml
---
# OBRIGATÓRIOS
title: "Título do artigo — máximo 60 caracteres para SEO"
description: "Meta description de 120-160 caracteres. Inclua palavra-chave primária."
date: "2026-03-15"           # ISO 8601 — usado em sitemap e schema.org
category: "Performance Marketing"  # ver categorias válidas abaixo
author:
  name: "André Martins"
  role: "CEO & Co-Founder"
  initials: "AM"

# CONTEÚDO
readTime: "7 min"            # estimativa manual; futuramente automatizar com remark-reading-time
tags:
  - Google Ads
  - ROAS
  - Performance

# SEO AVANÇADO (adicionar assim que tiver OG image)
image: "/blog/meu-slug/cover.jpg"   # 1200×630px obrigatório para OG/Twitter
imageAlt: "Descrição da imagem para acessibilidade"
lastModified: "2026-03-15"   # atualizar ao editar o conteúdo — aparece no schema.org

# CONTROLE
draft: false                 # true = não aparece em getAllPosts()
noindex: false               # true para rascunhos que chegarem ao deploy
---
```

### Categorias válidas

| Categoria | Cor | Emoji |
|---|---|---|
| `Performance Marketing` | `#f59e0b` | 📈 |
| `Data Engineering` | `#3b82f6` | 🗄️ |
| `AI Automation` | `#8b5cf6` | 🤖 |
| `Growth Hacking` | `#10b981` | 🚀 |
| `MarTech` | `#ef4444` | 🔒 |
| `Estratégia` | `#ec4899` | 👥 |

Para adicionar categoria nova: atualizar `categoryColors` e `categoryEmoji` em `src/app/blog/page.tsx` e `src/app/blog/[slug]/page.tsx`.

### Autores válidos

| Name | Role | Initials |
|---|---|---|
| André Martins | CEO & Co-Founder | AM |
| Juliana Ferreira | CTO & Co-Founder | JF |
| Ricardo Nunes | Head de IA | RN |

---

## Estrutura de Conteúdo — Boas Práticas SEO (2026)

### Hierarquia de headings
- **Um único H1** por arquivo — equivale ao `title` do front matter (não escrever H1 no MDX, o `<h1>` é renderizado pelo template)
- **3 a 7 H2** cobrindo os subtópicos principais; incluir keyword secundária naturalmente
- **2 a 5 H3** por H2 para sub-pontos — nunca pular nível (H2 → H4 quebra semântica)

### Volume de conteúdo
- **Mínimo recomendado:** 1.500 palavras (posições 8-10 no Google)
- **Target ideal:** 2.100–2.500 palavras (posições 1-3)
- Cada seção H2: 300–800 palavras
- Cada subseção H3: 100–200 palavras

### Links internos
- Incluir 3 a 5 links para outros posts ou páginas do site por artigo
- Usar anchor text descritivo, nunca "clique aqui"
- Estratégia de cluster: artigos de categoria linkam para `/servicos` e `/contato`

### Table of Contents
- Obrigatório para posts acima de 1.500 palavras
- Gerar a partir dos H2 apenas (H3 adiciona ruído)
- **Pendente:** implementar componente `<TableOfContents>` + `rehype-slug`

---

## Componentes MDX Disponíveis

### `<Callout>`
Destaque visual para insights importantes ou CTAs.

```mdx
<Callout>
  Texto do destaque — pode ser uma citação, aviso ou CTA para contato.
</Callout>
```

### Markdown nativo suportado
- `## H2`, `### H3` — estilizados via `.mdx-content` em `globals.css`
- `- item` — listas com `▸` ciano
- `**negrito**` — cor branca (#fff)
- `[link](url)` — cor ciana com hover underline
- Parágrafos simples

### Componentes a implementar (roadmap)
- `<TableOfContents />` — gerar a partir dos headings do arquivo
- `<CodeBlock />` — syntax highlighting via `rehype-pretty-code`
- `<RelatedPosts slugs={[...]} />` — posts relacionados no final
- `<AuthorCard />` — bio expandida do autor

---

## SEO — Metadata por Post

O `generateMetadata` em `src/app/blog/[slug]/page.tsx` já exporta:
- `title`, `description`
- `openGraph` com `type: "article"`, `publishedTime`, `authors`

### O que falta implementar (prioritário para SEO)

**1. JSON-LD (Article schema)**

Adicionar em `src/app/blog/[slug]/page.tsx` antes do `return`:

```typescript
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": { "@type": "WebPage", "@id": `${BASE_URL}/blog/${post.slug}` },
  "headline": post.title,          // máximo 110 caracteres
  "description": post.description,
  "datePublished": post.date,
  "dateModified": post.lastModified ?? post.date,
  "author": {
    "@type": "Person",
    "name": post.author.name,
  },
  "publisher": {
    "@type": "Organization",
    "name": "Housing PRO",
    "logo": { "@type": "ImageObject", "url": `${BASE_URL}/Logo_Simbolo.PNG` }
  },
  "keywords": post.tags.join(", ")
}
// Injetar como: <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
```

**2. BreadcrumbList JSON-LD** — separado do Article, mesmo padrão.

**3. Canonical** — adicionar campo `canonical` no front matter e passar para `alternates.canonical` em `generateMetadata`.

**4. OG Image** — sem imagem de capa, Twitter/LinkedIn mostram card genérico. Usar `next/og` (ImageResponse) para gerar dinamicamente ou criar imagens 1200×630px por post.

**5. `lastModified` no front matter** — já suportado no schema `PostFrontMatter`, mas não lido ainda no `getPost()`. Atualizar `src/lib/mdx.ts` para incluir o campo.

---

## Qualidade de Conteúdo — E-E-A-T (Google 2026)

O algoritmo do Google ranqueia fortemente com base em:

- **Experience** — incluir exemplos reais, números de cases, screenshots
- **Expertise** — autor identificado com cargo e empresa
- **Authoritativeness** — links de outros sites autoritativos apontando para o post
- **Trustworthiness** — dados com fontes, datas atualizadas, `lastModified` real

**Conteúdo AI-generated:** Google detecta e penaliza conteúdo thin gerado por IA sem revisão humana. Todo artigo deve ser revisado e ter dados/exemplos reais da Housing PRO.

---

## Performance (Core Web Vitals — Targets 2026)

| Métrica | Target | Status |
|---|---|---|
| LCP | ≤ 2.5s | ✅ SSG puro |
| INP | ≤ 200ms | ✅ Server Components |
| CLS | < 0.1 | ⚠️ sem imagens com dimensões definidas |

- Posts são Server Components puros — não adicionar `'use client'` sem necessidade
- Imagens de capa: sempre `width`, `height` e `priority` no componente `<Image>`
- Fontes: `next/font/google` já elimina render-blocking (configurado em `layout.tsx`)

---

## Workflow para Novo Post

```bash
# 1. Criar arquivo
touch content/posts/meu-novo-artigo.mdx

# 2. Preencher front matter (todos os campos obrigatórios)
# 3. Escrever conteúdo em MDX (ver estrutura acima)

# 4. Verificar build local
npm run build

# 5. Commit e push — Vercel deploya automaticamente
git add content/posts/meu-novo-artigo.mdx
git commit -m "feat(blog): add post meu-novo-artigo"
git push origin main
```

**O post aparece automaticamente em:**
- `/blog` (listagem)
- `/blog/meu-novo-artigo` (artigo)
- `/sitemap.xml` (indexação Google)

---

## Checklist por Post

### Antes de escrever
- [ ] Definir keyword primária; confirmar que cabe em H1 e meta title naturalmente
- [ ] Verificar que não existe post sobre o mesmo tema (evitar canibalização)
- [ ] Escolir categoria e autor corretos

### Conteúdo
- [ ] Front matter completo (title, description, date, category, author, readTime, tags)
- [ ] `draft: false` quando pronto para publicar
- [ ] Mínimo 1.500 palavras
- [ ] 3 a 7 seções H2 com keywords secundárias
- [ ] 3 a 5 links internos com anchor text descritivo
- [ ] Pelo menos um `<Callout>` com insight principal ou CTA

### SEO técnico
- [ ] `description` entre 120 e 160 caracteres
- [ ] `date` em formato ISO (YYYY-MM-DD)
- [ ] `tags` relevantes (3 a 7)
- [ ] Testar em `npm run build` sem erros

### Pós-publicação
- [ ] Verificar `/sitemap.xml` inclui o novo post
- [ ] Submeter URL no Google Search Console
- [ ] Testar rich results: https://search.google.com/test/rich-results *(após implementar JSON-LD)*
- [ ] Testar OG tags: https://www.opengraph.xyz *(após implementar OG images)*

---

## Variáveis de Ambiente

Nenhuma variável de ambiente necessária para o blog — todo conteúdo é lido do filesystem em build time (SSG).

`BASE_URL` está hardcoded em `src/app/sitemap.ts` como `https://housingpro-tau.vercel.app`. Atualizar quando o domínio definitivo estiver configurado.

---

## Bugs Recorrentes (Referência)

### Next.js 16 — Async Params
```typescript
// CORRETO — params é uma Promise no Next.js 16
const { slug } = await params

// ERRADO — causa erro de build
const { slug } = params
```

### Event handlers em Server Components
Arquivos sem `'use client'` não podem ter `onMouseEnter`, `onClick` etc. inline.
Usar CSS `:hover` via `<style>` tag ou className no lugar.

### `'use client'` + `export const metadata`
Incompatível. Separar: page.tsx (server, exporta metadata) → componente client filho (interatividade).
