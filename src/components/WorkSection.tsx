import React from 'react';

/* ── Gig data ─────────────────────────────────────────────────────────────── */
const gigs = [
  {
    num: '01',
    tag: 'YouTube & Short-Form',
    title: 'Expert Video Editor for YouTube & Short-Form Content',
    badge: '1 Order in Queue',
    description:
      'Just provide the script and voiceover — I’ll deliver a polished, cinematic video ready for your channel. Professional pacing, clean visuals, and strong storytelling.',
    highlights: [
      'Smooth cuts & cinematic transitions',
      'Colour correction & custom LUT grading',
      'Dynamic background music & sound effects (SFX)',
      'Text animations & modern motion graphics',
      'Engaging intro/outro hooks',
      'High-quality export in 1080p or 4K 60fps',
    ],
    badges: ['YouTube Videos', 'Short-Form', 'Instagram Reels', 'TikTok', 'Vlogs'],
    rating: '4.8',
    reviews: 4,
    delivery: '1-Day Delivery',
    revisions: 'Unlimited Revisions',
  },
  {
    num: '02',
    tag: 'Documentary & Storytelling',
    title: 'Cinematic Documentary-Style YouTube Video Editing',
    badge: 'High Retention',
    description:
      'Specialised in editing YouTube documentaries, true crime stories, investigative journalism, and narrative deep-dives with immersive pacing and sound design.',
    highlights: [
      'Documentary pacing & narrative arc structuring',
      'True crime, mystery & history style visuals',
      'Immersive ambient audio & tense sound design',
      'Eye-catching cinematic transitions & archival overlays',
      'Clean synchronized subtitles & kinetic captions',
      'Ultra HD / 4K mastering for crisp YouTube playback',
    ],
    badges: ['Documentary', 'True Crime', 'Storytelling', 'YouTube Deep-Dive'],
    rating: '4.8',
    reviews: 4,
    delivery: 'Fast Turnaround',
    revisions: 'Unlimited Revisions',
  },
  {
    num: '03',
    tag: 'Cash Cow & Automation',
    title: 'Full Cash Cow YouTube Channel Videos & Automation',
    badge: 'Channel Growth',
    description:
      'Full-time YouTube automation specialist with 1.5 years experience. Complete faceless channel production from concept to export that builds audience and boosts revenue.',
    highlights: [
      'Scriptwriting & narrative storyboarding',
      'High CTR clickable thumbnail design support',
      'Curated copyright-free premium stock footage',
      'Motion graphics, charts & informational animation',
      'Professional AI/Human voiceover synchronization',
      'Top 10, Top 5, Tech, Sports & Historical formats',
    ],
    badges: ['Cash Cow', 'Faceless YouTube', 'Top 10 / Top 5', 'Educational', 'Tech'],
    rating: '4.8',
    reviews: 4,
    delivery: 'Complete Package',
    revisions: 'Unlimited Revisions',
  },
]

/* ── Star rating ──────────────────────────────────────────────────────────── */
const Stars: React.FC<{ rating: number }> = ({ rating }) => (
  <span style={{ color: '#f5c518', letterSpacing: '2px', fontSize: '0.85rem' }}>
    {'★'.repeat(Math.floor(rating))}
    {rating % 1 >= 0.5 ? '½' : ''}
  </span>
)

const WorkSection: React.FC = () => {
  return (
    <section
      id="work"
      style={{
        position: 'relative',
        zIndex: 10,
        padding: '140px 2rem 120px',
        maxWidth: '1320px',
        margin: '0 auto',
      }}
    >
      {/* ── Section Header ────────────────────────────────────────── */}
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '72px' }}>
        <p className="section-eyebrow" style={{ marginBottom: '1rem' }}>
          Selected Portfolio
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
          Where every frame{' '}
          <em
            style={{
              fontStyle: 'normal',
              color: 'hsl(var(--muted-foreground))',
            }}
          >
            commands attention.
          </em>
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1rem',
            color: 'hsl(var(--muted-foreground))',
            maxWidth: '540px',
            margin: '1.25rem auto 0',
            lineHeight: 1.7,
          }}
        >
          Specialised video editing solutions built for YouTube creators, brands, and automation
          channels looking for cinematic retention and visual polish.
        </p>
      </div>

      {/* ── Cards Grid ────────────────────────────────────────────── */}
      <div
        className="reveal-stagger"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '32px',
        }}
      >
        {gigs.map((gig) => (
          <article
            key={gig.num}
            className="glass-card"
            style={{
              padding: '40px 34px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '620px',
            }}
          >
            {/* Watermark Number */}
            <span className="card-number">{gig.num}</span>

            <div>
              {/* Top Tag & Status Badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                  paddingRight: '60px',
                }}
              >
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
                  {gig.tag}
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.68rem',
                    fontWeight: 500,
                    padding: '3px 10px',
                    borderRadius: '999px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    color: 'hsl(var(--foreground))',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {gig.badge}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: '1.65rem',
                  fontWeight: 400,
                  lineHeight: 1.25,
                  color: 'hsl(var(--foreground))',
                  marginBottom: '14px',
                }}
              >
                {gig.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.88rem',
                  color: 'hsl(var(--muted-foreground))',
                  lineHeight: 1.7,
                  marginBottom: '24px',
                }}
              >
                {gig.description}
              </p>

              {/* Highlights List */}
              <div style={{ marginBottom: '28px' }}>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.7)',
                    marginBottom: '12px',
                  }}
                >
                  What You Get:
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '9px',
                  }}
                >
                  {gig.highlights.map((h) => (
                    <li
                      key={h}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.83rem',
                        color: 'hsl(var(--muted-foreground))',
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '10px',
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ color: '#fff', fontSize: '0.65rem', opacity: 0.6 }}>✦</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Footer Section */}
            <div>
              {/* Divider */}
              <div
                style={{
                  height: '1px',
                  background:
                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)',
                  margin: '20px 0',
                }}
              />

              {/* Rating & stats row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '18px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Stars rating={parseFloat(gig.rating)} />
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      color: 'hsl(var(--foreground))',
                    }}
                  >
                    {gig.rating}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.75rem',
                      color: 'hsl(var(--muted-foreground))',
                    }}
                  >
                    ({gig.reviews} reviews)
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.72rem',
                    fontWeight: 500,
                    color: 'hsl(var(--muted-foreground))',
                  }}
                >
                  ⚡ {gig.delivery}
                </span>
              </div>

              {/* Tag Pills */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  marginBottom: '20px',
                }}
              >
                {gig.badges.map((b) => (
                  <span key={b} className="tag-pill">
                    {b}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <a
                href="#contact"
                className="glass-pill glass-pill-nav"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '11px 24px',
                  fontSize: '0.84rem',
                }}
              >
                Inquire About This Service →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default WorkSection
