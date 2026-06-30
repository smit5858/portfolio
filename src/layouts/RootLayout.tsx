import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { Outlet } from 'react-router-dom'


/**
 * Root layout wrapping all pages.
 * Renders: Header (Navbar) → <main> (page content) → Footer.
 * React Router's <Outlet> renders the matched child route.
 */
export function RootLayout() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />
      <main
        id="main-content"
        className="flex-1 pt-16"
        tabIndex={-1}
        aria-label="Main content"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
