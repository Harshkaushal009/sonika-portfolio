import React, { useState } from 'react'

const contactOptions = [
  {
    icon: '✉️',
    label: 'Direct Email',
    value: 'sonikachandel05@gmail.com',
    detail: 'Fast response within 2-4 hours',
    href: 'mailto:sonikachandel05@gmail.com',
    actionText: 'Send Email',
  },
  {
    icon: '💼',
    label: 'Fiverr Profile',
    value: '@sonikachandel05',
    detail: '4.8★ (4 Reviews) • 1 Order in queue',
    href: 'https://www.fiverr.com/sonikachandel05',
    actionText: 'View Gigs on Fiverr',
  },
  {
    icon: '📸',
    label: 'Instagram',
    value: '@sonikachandel_26',
    detail: 'DMs open for video collaborations',
    href: 'https://www.instagram.com/sonikachandel_26',
    actionText: 'Message on IG',
  },
]

const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('sonikachandel05@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        zIndex: 10,
        padding: '140px 2rem 160px',
      }}
    >
      <div
        style={{
          maxWidth: '1080px',
          margin: '0 auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Section Header */}
        <div className="reveal" style={{ marginBottom: '56px' }}>
          <p className="section-eyebrow" style={{ marginBottom: '1rem' }}>
            Let's Collaborate
          </p>
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '-1.5px',
              color: 'hsl(var(--foreground))',
              marginBottom: '1.25rem',
            }}
          >
            Ready to bring your next{' '}
            <em style={{ fontStyle: 'normal', color: 'hsl(var(--muted-foreground))' }}>
              story to life?
            </em>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              color: 'hsl(var(--muted-foreground))',
              maxWidth: '540px',
              margin: '0 auto',
              lineHeight: 1.75,
            }}
          >
            Whether you have a full script, raw voiceover audio, or a channel vision waiting to be
            launched — reach out directly or order safely on Fiverr.
          </p>
        </div>

        {/* Contact Channels Grid */}
        <div
          className="reveal-stagger"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            width: '100%',
            marginBottom: '48px',
          }}
        >
          {contactOptions.map((opt) => (
            <div
              key={opt.label}
              className="glass-card"
              style={{
                padding: '36px 28px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '12px',
                borderRadius: '20px',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.6rem',
                  boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15)',
                  marginBottom: '6px',
                }}
              >
                {opt.icon}
              </div>

              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'hsl(var(--muted-foreground))',
                }}
              >
                {opt.label}
              </span>

              <h4
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: '1.4rem',
                  color: 'hsl(var(--foreground))',
                  fontWeight: 400,
                  lineHeight: 1.2,
                }}
              >
                {opt.value}
              </h4>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.8rem',
                  color: 'hsl(var(--muted-foreground))',
                  lineHeight: 1.5,
                  marginBottom: '8px',
                }}
              >
                {opt.detail}
              </p>

              <a
                href={opt.href}
                target={opt.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="glass-pill glass-pill-nav"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  marginTop: 'auto',
                }}
              >
                {opt.actionText} →
              </a>
            </div>
          ))}
        </div>

        {/* Copy Email Bar */}
        <div
          className="glass-card reveal"
          style={{
            padding: '24px 32px',
            borderRadius: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            width: '100%',
            maxWidth: '720px',
          }}
        >
          <div style={{ textAlign: 'left' }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'hsl(var(--muted-foreground))',
                marginBottom: '4px',
              }}
            >
              Direct Email Address
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.96rem',
                color: 'hsl(var(--foreground))',
                fontWeight: 500,
              }}
            >
              sonikachandel05@gmail.com
            </p>
          </div>

          <button
            onClick={handleCopy}
            className="glass-pill glass-pill-nav"
            style={{
              padding: '10px 22px',
              cursor: 'pointer',
              background: copied ? 'rgba(74, 222, 128, 0.15) !important' : undefined,
              borderColor: copied ? 'rgba(74, 222, 128, 0.4) !important' : undefined,
            }}
          >
            {copied ? '✓ Copied to Clipboard!' : '📋 Copy Address'}
          </button>
        </div>

        {/* Guarantee Banner */}
        <p
          className="reveal"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.78rem',
            color: 'hsl(var(--muted-foreground))',
            marginTop: '44px',
            opacity: 0.75,
            letterSpacing: '0.04em',
          }}
        >
          ⚡ Average response under 4 hours • 1-Day Turnarounds Available • Unlimited revisions
          guarantee
        </p>
      </div>
    </section>
  )
}

export default ContactSection
