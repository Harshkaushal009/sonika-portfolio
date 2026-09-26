import React from 'react'
import sonikaPic from '@/assets/sonika.png'

const skills = [
  'YouTube video creator',
  'YouTube video editor',
  'Adobe Premiere Pro expert',
  'Vlog editor',
  'Family video editor',
  'Video producer',
  'Color grading expert',
  'Video creator',
  'Social media video editor',
  'Cash Cow automation',
]

const stats = [
  { value: '1.5+', label: 'Years Experience', icon: '⏱️' },
  { value: '4.8★', label: 'Fiverr Rating (4 Reviews)', icon: '⭐' },
  { value: '100%', label: 'Satisfaction Guaranteed', icon: '🎯' },
  { value: '24hr', label: 'Fast 1-Day Turnaround', icon: '⚡' },
]

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      style={{
        position: 'relative',
        zIndex: 10,
        padding: '140px 2rem 120px',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        {/* Section header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '72px' }}>
          <p className="section-eyebrow" style={{ marginBottom: '1rem' }}>
            Meet The Editor
          </p>
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '-1.5px',
              color: 'hsl(var(--foreground))',
            }}
          >
            The vision behind{' '}
            <em style={{ fontStyle: 'normal', color: 'hsl(var(--muted-foreground))' }}>
              every cut.
            </em>
          </h2>
        </div>

        {/* Content grid: photo + stats on left, story & skills on right */}
        <div
          className="reveal-stagger"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          {/* ── Left Column: Luxury Photo Frame + Stats ──────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {/* Profile Photo Frame */}
            <div
              className="glass-card"
              style={{
                borderRadius: '24px',
                padding: '16px',
                maxWidth: '440px',
                margin: '0 auto',
                width: '100%',
              }}
            >
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  aspectRatio: '4 / 4.6',
                }}
              >
                <img
                  src={sonikaPic}
                  alt="Sonika Chandel — Freelance Video Editor"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 18%',
                    display: 'block',
                    transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.transform = 'scale(1)'
                  }}
                />
                {/* Subtle vignette gradient overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, transparent 65%, rgba(0, 0, 0, 0.65) 100%)',
                    pointerEvents: 'none',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '20px',
                    right: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "'Instrument Serif', serif",
                        fontSize: '1.4rem',
                        color: '#fff',
                        lineHeight: 1.1,
                      }}
                    >
                      Sonika Chandel
                    </p>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.72rem',
                        color: 'rgba(255, 255, 255, 0.75)',
                        letterSpacing: '0.04em',
                      }}
                    >
                      Video Editor &amp; Automation Specialist
                    </p>
                  </div>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '999px',
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(8px)',
                      color: '#fff',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                    }}
                  >
                    Active on Fiverr
                  </span>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px',
                maxWidth: '440px',
                margin: '0 auto',
                width: '100%',
              }}
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass-card"
                  style={{
                    padding: '20px 18px',
                    textAlign: 'left',
                    borderRadius: '16px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                    }}
                  >
                    <span style={{ fontSize: '1.2rem' }}>{s.icon}</span>
                    <span
                      style={{
                        fontFamily: "'Instrument Serif', serif",
                        fontSize: '1.65rem',
                        color: 'hsl(var(--foreground))',
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.75rem',
                      color: 'hsl(var(--muted-foreground))',
                      lineHeight: 1.4,
                      fontWeight: 500,
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column: Editorial Narrative & Skills ─────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'hsl(var(--muted-foreground))',
                  marginBottom: '12px',
                }}
              >
                Biography
              </p>
              <h3
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: '2rem',
                  fontWeight: 400,
                  color: 'hsl(var(--foreground))',
                  lineHeight: 1.25,
                  marginBottom: '20px',
                }}
              >
                Turning raw vision and scripts into high-performance visual experiences.
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.96rem',
                  color: 'hsl(var(--muted-foreground))',
                  lineHeight: 1.85,
                  marginBottom: '16px',
                }}
              >
                I am a full-time video editor and YouTube automation specialist with 1.5+ years of
                practical production experience. I partner with creators, brands, and digital
                entrepreneurs worldwide to transform raw thoughts, scripts, and audio into
                compelling video narratives that hook audiences from the first three seconds.
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.96rem',
                  color: 'hsl(var(--muted-foreground))',
                  lineHeight: 1.85,
                  marginBottom: '20px',
                }}
              >
                Whether you run an automated faceless YouTube channel needing turnkey episodic
                edits or a personal vlog demanding nuanced sound design and color grading, I handle
                the technical heavy lifting — allowing you to focus purely on creativity and growth.
              </p>
            </div>

            {/* Checklist of assurances */}
            <div
              className="glass-card"
              style={{
                padding: '24px 28px',
                borderRadius: '16px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '14px',
              }}
            >
              {[
                'Unlimited revisions until 100% happy',
                'Script & voiceover only workflows',
                'Copyright-free media licensing included',
                'Crisp 1080p / 4K UHD masters delivered',
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.84rem',
                    color: 'hsl(var(--foreground))',
                  }}
                >
                  <span style={{ color: '#4ade80', fontSize: '0.9rem' }}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Skills Pills */}
            <div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'hsl(var(--muted-foreground))',
                  marginBottom: '16px',
                }}
              >
                Verified Capabilities
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA button */}
            <div style={{ paddingTop: '8px' }}>
              <a
                href="#contact"
                className="glass-pill glass-pill-hero"
                style={{ padding: '12px 36px', fontSize: '0.86rem' }}
              >
                Start a Collaboration →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
