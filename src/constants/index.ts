import type { NavLink, SocialLink } from '@/types'

export const SITE_NAME = 'Smit Dholariya'
export const SITE_TAGLINE = 'Frontend Developer & UI Engineer'
export const SITE_URL = import.meta.env['VITE_SITE_URL'] ?? 'https://smitdholariya.dev'
export const CONTACT_EMAIL = import.meta.env['VITE_CONTACT_EMAIL'] ?? 'hello@smitdholariya.dev'

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Contact', href: '/contact' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/smit5858', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/smitdholariya', icon: 'linkedin' },
  { label: 'Twitter', href: 'https://twitter.com/smitdholariya', icon: 'twitter' },
]

export const THEME_KEY = 'portfolio-theme'
