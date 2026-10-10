import { useEffect } from 'react'
import { SITE } from '../data/site'

export default function Seo({ title, description }: { title?: string; description: string }) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE.name}` : `${SITE.name} | ${SITE.roles[0]}`
    let m = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!m) { m = document.createElement('meta'); m.name = 'description'; document.head.appendChild(m) }
    m.content = description
  }, [title, description])
  return null
}
