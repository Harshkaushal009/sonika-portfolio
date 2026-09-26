import React from 'react'

const services = [
  {
    icon: '🎬',
    title: 'YouTube Video Editing',
    description:
      'High-retention editing for long-form YouTube creators. Pacing optimization, sound design, engaging b-roll placement, and hook curation that keeps average view duration high.',
    tags: ['Long-Form', 'Vlogs', 'Commentary', 'Talking Head'],
  },
  {
    icon: '📱',
    title: 'Short-Form Content',
    description:
      'Reels, TikToks, and YouTube Shorts engineered for viral momentum. Dynamic caption animations, micro-zooms, sound effects, and fast-paced visual rhythm.',
    tags: ['Instagram Reels', 'TikTok', 'Shorts', 'Vertical 9:16'],
  },
  {
    icon: '🎥',
    title: 'Cash Cow & Automation',
    description:
      'Full faceless channel pipelines from raw script and voiceover to finalized video. Copyright-free high-resolution media sourcing, motion graphics, and click-worthy presentation.',
    tags: ['Channel Automation', 'Faceless YouTube', 'Top 10/Top 5', 'Tech'],
  },
  {
    icon: '🎞️',
    title: 'Documentary & Storytelling',
    description:
      'Cinematic documentary edits with true crime, historical, or investigative narrative arcs. Deep soundscaping, vintage film textures, and archival photo animation.',
    tags: ['Documentaries', 'True Crime', 'Deep-Dives', 'Video Essays'],
  },
  {
    icon: '🎨',
    title: 'Color Grading & VFX',
    description:
      'Hollywood-inspired cinematic colour correction and LUT workflows in Premiere Pro. Skin-tone preservation, atmosphere creation, and subtle motion tracking VFX.',
    tags: ['Color Grading', 'Custom LUTs', 'Motion Tracking', 'Premiere Pro'],
  },
  {
    icon: '📢',
    title: 'Brand & Creative Content',
    description:
      'Polished promotional assets, product showcase trailers, and social ad creatives designed to communicate value proposition and inspire viewer action.',
    tags: ['Brand Videos', 'Social Ads', 'Product Trailers', 'Commercial'],
  },
]

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
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
            Capabilities &amp; Specialisations
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
            Crafting visuals that{' '}
            <em style={{ fontStyle: 'normal', color: 'hsl(var(--muted-foreground))' }}>
              elevate your brand.
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
            Whether you need daily high-speed shorts or a long-form 4K mini-documentary, every
            project is treated with obsessive attention to audio, timing, and emotion.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="reveal-stagger"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {services.map((s) => (
            <div
              key={s.title}
              className="glass-card"
              style={{
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
              }}
            >
              {/* Icon Container */}
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.6rem',
                  boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15)',
                }}
              >
                {s.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: '1.45rem',
                  fontWeight: 400,
                  color: 'hsl(var(--foreground))',
                  lineHeight: 1.25,
                }}
              >
                {s.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.88rem',
                  color: 'hsl(var(--muted-foreground))',
                  lineHeight: 1.75,
                  flexGrow: 1,
                }}
              >
                {s.description}
              </p>

              {/* Tags */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  paddingTop: '8px',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {s.tags.map((t) => (
                  <span key={t} className="tag-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
