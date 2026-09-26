import React from 'react';

import bgVideo from '@/assets/bgvideo.mp4';
import Fvurl from '@/assets/fivver.png';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';
import VideoBackground from '@/components/VideoBackground';
import WorkSection from '@/components/WorkSection';
import { useScrollReveal } from '@/hooks/useScrollReveal';

/* ── Section divider line ─────────────────────────────────── */
const Divider: React.FC = () => (
  <div className="section-divider" />
)

/* ── Footer ───────────────────────────────────────────────── */
const Footer: React.FC = () => (
  <footer
    style={{
      position: 'relative',
      zIndex: 10,
      padding: '56px 2rem 64px',
      textAlign: 'center',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      background: 'rgba(0, 0, 0, 0.2)',
    }}
  >
    <div
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '18px',
      }}
    >
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
          window.history.pushState(null, '', '/')
        }}
        className="logo-premium"
        style={{ fontSize: '1.4rem' }}
        aria-label="Sonika Chandel — Home"
      >
        Sonika Chandel
      </a>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.85rem',
          color: 'hsl(var(--muted-foreground))',
          letterSpacing: '0.04em',
        }}
      >
        Cinematic Video Editor &amp; YouTube Automation Specialist
      </p>

      {/* ── Social / Contact Icons ──────────────────────────── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          marginTop: '6px',
          marginBottom: '6px',
        }}
      >
        {/* Instagram */}
        <a
          href="https://www.instagram.com/sonikachandel_26"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-pill"
          style={{
            width: '42px',
            height: '42px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'hsl(var(--foreground))',
            transition: 'transform 0.25s ease, filter 0.25s ease, background 0.25s ease',
          }}
          aria-label="Instagram Profile"
          title="Instagram (@sonikachandel_26)"
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>

        {/* Fiverr */}
        <a
          href="https://www.fiverr.com/sonikachandel05"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-pill"
          style={{
            width: '42px',
            height: '42px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'hsl(var(--foreground))',
            transition: 'transform 0.25s ease, filter 0.25s ease, background 0.25s ease',
          }}
          aria-label="Fiverr Profile"
          title="Fiverr (@sonikachandel05)"
        >
        <img src={Fvurl}></img>
        </a>

        {/* Email */}
        <a
          href="mailto:sonikachandel05@gmail.com"
          className="glass-pill"
          style={{
            width: '42px',
            height: '42px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'hsl(var(--foreground))',
            transition: 'transform 0.25s ease, filter 0.25s ease, background 0.25s ease',
          }}
          aria-label="Direct Email"
          title="Email (sonikachandel05@gmail.com)"
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </a>
      </div>

      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.74rem',
          color: 'hsl(var(--muted-foreground))',
          opacity: 0.6,
          marginTop: '6px',
        }}
      >
        © {new Date().getFullYear()} Sonika Chandel. All rights reserved. Every frame tells a story.
      </p>
    </div>
  </footer>
)

/* ── App ──────────────────────────────────────────────────── */
const App: React.FC = () => {
  // Attach scroll reveal observer for animated transitions
  useScrollReveal()

  return (
    <div
      className="relative overflow-x-hidden min-h-screen"
      style={{ backgroundColor: 'hsl(var(--background))' }}
    >
      {/* ── Hero Viewport with Fullscreen Video Background ─────── */}
      <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
        <VideoBackground src={bgVideo} />

        {/* Cinematic gradient fade-out connecting video into dark section */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '320px',
            background:
              'linear-gradient(to bottom, transparent 0%, rgba(0, 26, 41, 0.7) 60%, hsl(var(--background)) 100%)',
            zIndex: 5,
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Navbar />
          <main
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <HeroSection />
          </main>
        </div>
      </div>

      {/* ── Portfolio & Service Sections ──────────────────────── */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          backgroundColor: 'hsl(var(--background))',
        }}
      >
        <WorkSection />
        <Divider />
        <ServicesSection />
        <Divider />
        <AboutSection />
        <Divider />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}

export default App
