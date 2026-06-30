import { useEffect, useRef, useState } from 'react'

/**
 * Returns true once the observed element has entered the viewport.
 * Useful for triggering enter animations.
 */
export function useIntersectionObserver(
  options: IntersectionObserverInit = { threshold: 0.1 }
): [React.RefObject<HTMLElement | null>, boolean] {
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setIsVisible(true)
        observer.disconnect() // only trigger once
      }
    }, options)

    observer.observe(el)
    return () => observer.disconnect()
  }, [options])

  return [ref, isVisible]
}
