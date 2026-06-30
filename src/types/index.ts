// ─── Theme ────────────────────────────────────────────────────────────────────
export type Theme = 'light' | 'dark'

// ─── Navigation ───────────────────────────────────────────────────────────────
export interface NavLink {
  label: string
  href: string
}

// ─── Social ───────────────────────────────────────────────────────────────────
export interface SocialLink {
  label: string
  href: string
  icon: string
}

// ─── Meta ─────────────────────────────────────────────────────────────────────
export interface PageMeta {
  title: string
  description: string
}
