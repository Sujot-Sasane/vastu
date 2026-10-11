import { useEffect } from 'react'
import { siteUrl, pages, notFound, jsonLd } from '../data/seo'

function setMeta(selector, attr, value, create) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement(create.tag)
    Object.entries(create.attrs).forEach(([k, v]) => el.setAttribute(k, v))
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

// Keeps <head> in sync with the current route (SPA navigation).
export default function Seo({ path, missing = false }) {
  useEffect(() => {
    const p = missing ? notFound : pages[path]
    const url = `${siteUrl}${path === '/' ? '/' : path}`
    document.title = p.title
    const m = (name, content, prop = 'name') =>
      setMeta(`meta[${prop}="${name}"]`, 'content', content, {
        tag: 'meta',
        attrs: { [prop]: name },
      })
    m('description', p.description)
    m('robots', missing ? 'noindex, follow' : 'index, follow, max-image-preview:large')
    m('og:title', p.title, 'property')
    m('og:description', p.description, 'property')
    m('og:url', url, 'property')
    m('twitter:title', p.title)
    m('twitter:description', p.description)
    setMeta('link[rel="canonical"]', 'href', url, { tag: 'link', attrs: { rel: 'canonical' } })

    const old = document.getElementById('ld-json')
    old?.remove()
    if (!missing && jsonLd[path]) {
      const s = document.createElement('script')
      s.type = 'application/ld+json'
      s.id = 'ld-json'
      s.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': jsonLd[path] })
      document.head.appendChild(s)
    }
  }, [path, missing])

  return null
}
