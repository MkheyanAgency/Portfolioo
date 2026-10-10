// Central, editable content. Only add VERIFIED facts.
export const SITE = {
  name: 'Vazgen Mkheyan',
  role: 'Junior Developer / Web Developer',
  roles: ['Junior Developer', 'Web Developer'],
  greeting: "Hi, I'm Vazgen Mkheyan",
  tagline: 'I build modern, responsive, and user-friendly web experiences.',
  footerLine: 'Open to learning, building, and collaborating.',
}

export const ABOUT = {
  title: 'Early in my career, serious about the craft.',
  // Add your own verified story here (education, experience, interests).
  paragraphs: [
    "I'm Vazgen, a junior web developer who enjoys building modern, responsive, and user-friendly websites.",
  ] as string[],
}

export const SKILLS = [
  // Confirm and edit these before publishing.
  { group: 'Preferred stack for building websites', items: ['React', 'TypeScript', 'Vite', 'React Router'] },
]

// Verified contact entries only, e.g. { label: 'Email', href: 'mailto:you@example.com', text: 'you@example.com', icon: 'ri-mail-line' }
export type ContactItem = { label: string; href: string; text: string; icon: string }
export const CONTACT: ContactItem[] = []
