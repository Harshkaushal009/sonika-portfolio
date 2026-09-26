import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface NavProps {
  className?: string
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const Navbar: React.FC<NavProps> = ({ className }) => {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'services', 'about', 'contact']
      const scrollPos = window.scrollY + 200

      // If near top of page, activate 'home'
      if (window.scrollY < 250) {
        setActiveSection('home')
        return
      }

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      window.history.pushState(null, '', '/')
      setActiveSection('home')
    }
  }

  return (
    <nav
      className={cn('relative z-20 w-full pt-4 sm:pt-6 md:pt-8', className)}
      aria-label="Main navigation"
    >
      <div
        className="flex flex-row items-center justify-between w-full px-6 sm:px-10 md:px-14 lg:px-16 py-[7px]"
        style={{ paddingTop: '7px', paddingBottom: '7px' }}
      >
        {/* ── Logo — navigates to / ─────────────────────────────── */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, '/')}
          className="logo-premium"
          aria-label="Sonika Chandel — Home"
        >
          Sonika Chandel
        </a>

        {/* ── Desktop nav links ────────────────────────────────── */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? activeSection === 'home'
                : activeSection === link.href.substring(1)

            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    'text-sm tracking-wide transition-all duration-200 relative py-1',
                    isActive
                      ? 'text-foreground font-medium'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '1px',
                        background:
                          'linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)',
                      }}
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        {/* ── CTA / Mobile Toggle ──────────────────────────────── */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="glass-pill glass-pill-nav"
            aria-label="Let's work together"
          >
            Let's Work Together
          </a>

          {/* Mobile Menu Button - cleanly hidden on desktop via .mobile-menu-btn */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="glass-pill mobile-menu-btn"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* ── Mobile Dropdown Menu ───────────────────────────────── */}
      {mobileMenuOpen && (
        <div
          className="md:hidden glass-card"
          style={{
            margin: '0 1.5rem 1rem',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            borderRadius: '16px',
          }}
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? activeSection === 'home'
                : activeSection === link.href.substring(1)

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  handleNavClick(e, link.href)
                  setMobileMenuOpen(false)
                }}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.92rem',
                  color: isActive
                    ? 'hsl(var(--foreground))'
                    : 'hsl(var(--muted-foreground))',
                  textDecoration: 'none',
                  padding: '6px 0',
                }}
              >
                {link.label}
              </a>
            )
          })}
        </div>
      )}
    </nav>
  )
}

export default Navbar
