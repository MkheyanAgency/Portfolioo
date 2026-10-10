export type Project = {
  slug: string
  name: string
  summary?: string
  tech?: string[]
  url?: string
  repo?: string
  image?: string
  imageAlt?: string
}
// Names only for now. Add summary, tech, url, repo, image (+ imageAlt) when verified.
export const PROJECTS: Project[] = [
  { slug: 'mkheyan-agency', name: 'Mkheyan Agency' },
  { slug: 'shift', name: 'Shift' },
  { slug: 'digital-print', name: 'Digital Print' },
  { slug: 'home-ler', name: 'HOME LER' },
  { slug: 'blogger-awards', name: 'Blogger Awards' },
  { slug: 'myseat', name: 'MySeat' },
]
