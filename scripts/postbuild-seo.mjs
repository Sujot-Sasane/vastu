// Runs after `vite build`. Writes route-specific static HTML (so crawlers and
// link previews see correct title/description/canonical/JSON-LD without running
// JS), plus sitemap.xml and robots.txt.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { siteUrl, pages, jsonLd } from '../src/data/seo.js'

const dist = new URL('../dist/', import.meta.url)
const template = readFileSync(new URL('index.html', dist), 'utf8').replaceAll(
  'https://www.sukhvastu.com',
  siteUrl,
)
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;')

for (const [path, p] of Object.entries(pages)) {
  const url = `${siteUrl}${path === '/' ? '/' : path}`
  let html = template
    .replace(/<title>.*?<\/title>/, `<title>${esc(p.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*"/, `$1${esc(p.description)}"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${esc(p.title)}"`)
    .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${esc(p.description)}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta name="twitter:title" content=")[^"]*"/, `$1${esc(p.title)}"`)
    .replace(/(<meta name="twitter:description" content=")[^"]*"/, `$1${esc(p.description)}"`)
    .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`)
    .replace(
      '</head>',
      `<script type="application/ld+json" id="ld-json">${JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': jsonLd[path],
      })}</script></head>`,
    )
  if (path === '/') {
    writeFileSync(new URL('index.html', dist), html)
  } else {
    mkdirSync(new URL(`.${path}/`, dist), { recursive: true })
    writeFileSync(new URL(`.${path}/index.html`, dist), html)
  }
}

const today = new Date().toISOString().slice(0, 10)
const urls = Object.keys(pages)
  .map(
    (p) =>
      `  <url><loc>${siteUrl}${p === '/' ? '/' : p}</loc><lastmod>${today}</lastmod><priority>${p === '/' ? '1.0' : '0.8'}</priority></url>`,
  )
  .join('\n')
writeFileSync(
  new URL('sitemap.xml', dist),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)
writeFileSync(new URL('robots.txt', dist), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`)
console.log(`SEO: wrote ${Object.keys(pages).length} pages, sitemap.xml, robots.txt for ${siteUrl}`)
