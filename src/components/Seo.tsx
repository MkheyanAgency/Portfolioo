import { useEffect } from 'react'
import { SITE } from '../data/site'

interface SeoProps {
  title?: string
  description?: string
}

export default function Seo({ title, description }: SeoProps) {
  const fullTitle = title ? `${title} — ${SITE.name}` : `${SITE.name} — ${SITE.role}`
  const metaDesc = description || SITE.tagline

  useEffect(() => {
    document.title = fullTitle

    const setMetaTag = (selector: string, attr: string, val: string) => {
      let elem = document.querySelector<HTMLMetaElement>(selector)
      if (!elem) {
        elem = document.createElement('meta')
        const [key, name] = selector.replace(/[\[\]"]/g, '').split('=')
        elem.setAttribute(key, name)
        document.head.appendChild(elem)
      }
      elem.setAttribute(attr, val)
    }

    setMetaTag('meta[name="description"]', 'content', metaDesc)
    setMetaTag('meta[property="og:title"]', 'content', fullTitle)
    setMetaTag('meta[property="og:description"]', 'content', metaDesc)
  }, [fullTitle, metaDesc])

  return null
}
