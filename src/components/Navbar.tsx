import { useEffect, useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => !!el)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'glass-solid border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16"
      >
        <a
          href="#home"
          className="font-display font-semibold text-ink tracking-tight text-[15px] sm:text-base"
        >
          Shashank<span className="text-accent">.</span>Shekhar
        </a>

        <ul className="hidden md:flex items-center gap-1 font-mono text-[13px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`px-3 py-2 rounded-md transition-colors ${
                  active === link.href
                    ? 'text-ink'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent-soft px-4 py-2 text-sm font-medium text-ink hover:bg-accent/20 hover:border-accent transition-colors"
          >
            <Download size={15} strokeWidth={2} />
            Resume
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-ink"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass-solid border-t border-border">
          <ul className="flex flex-col px-5 py-4 gap-1 font-mono text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-3 text-muted hover:text-ink transition-colors border-b border-border-soft"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-accent/40 bg-accent-soft px-4 py-3 text-sm font-medium text-ink"
              >
                <Download size={15} />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
