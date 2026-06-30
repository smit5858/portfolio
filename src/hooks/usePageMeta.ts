import { useEffect } from 'react'

/**
 * Updates the document <title> and (optionally) <meta name="description">
 * whenever the page changes.
 */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    const prev = document.title
    document.title = `${title} — Smit Devrukhkar`

    let descEl = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const prevDesc = descEl?.content ?? ''
    if (description && descEl) {
      descEl.content = description
    }

    return () => {
      document.title = prev
      if (descEl && description) {
        descEl.content = prevDesc
      }
    }
  }, [title, description])
}
