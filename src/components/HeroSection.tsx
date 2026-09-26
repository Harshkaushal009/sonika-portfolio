import React, { useState, useEffect } from 'react'

const phrases = [
  'becomes a story.',
  'captures true emotion.',
  'hooks your audience.',
  'creates pure cinema.',
  'turns into high retention.',
]

const HeroSection: React.FC = () => {
  // State for the full initial typewriter effect
  // Stage 0: typing "Where "
  // Stage 1: typing "every frame"
  // Stage 2: typing/cycling phrases starting with "becomes a story."
  const [prefix1, setPrefix1] = useState('')
  const [prefix2, setPrefix2] = useState('')
  const [activePhraseIndex, setActivePhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [initialSequenceDone, setInitialSequenceDone] = useState(false)

  // Initial typewriter effect for "Where " then "every frame "
  useEffect(() => {
    const fullPrefix1 = 'Where '
    const fullPrefix2 = 'every frame'

    let timer: NodeJS.Timeout

    if (prefix1.length < fullPrefix1.length) {
      timer = setTimeout(() => {
        setPrefix1(fullPrefix1.slice(0, prefix1.length + 1))
      }, 70)
    } else if (prefix2.length < fullPrefix2.length) {
      timer = setTimeout(() => {
        setPrefix2(fullPrefix2.slice(0, prefix2.length + 1))
      }, 70)
    } else if (!initialSequenceDone) {
      setInitialSequenceDone(true)
    }

    return () => clearTimeout(timer)
  }, [prefix1, prefix2, initialSequenceDone])

  // Typewriter effect for the rotating punchline after initial prefix is done
  useEffect(() => {
    if (!initialSequenceDone) return

    const targetPhrase = phrases[activePhraseIndex]
    const typingSpeed = isDeleting ? 38 : 65
    const pauseTime = isDeleting ? 400 : 3200

    let timeout: NodeJS.Timeout

    if (!isDeleting && currentText === targetPhrase) {
      // Finished typing word, wait before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, pauseTime)
    } else if (isDeleting && currentText === '') {
      // Finished deleting, move to next phrase
      setIsDeleting(false)
      setActivePhraseIndex((prev) => (prev + 1) % phrases.length)
    } else {
      // In progress of typing or deleting
      timeout = setTimeout(() => {
        const nextText = isDeleting
          ? targetPhrase.substring(0, currentText.length - 1)
          : targetPhrase.substring(0, currentText.length + 1)
        setCurrentText(nextText)
      }, typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, activePhraseIndex, initialSequenceDone])

  return (
    <section
      id="home"
      className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-40"
      aria-labelledby="hero-heading"
    >
      {/* ── Freelance identity badge ─────────────────────────── */}
      <p
        className="text-muted-foreground animate-fade-rise"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.72rem',
          fontWeight: 500,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
        }}
      >
        Freelance Video Editor &amp; Storyteller
      </p>

      {/* ── H1 — cinematic headline with viral typewriter & cursor ── */}
      <h1
        id="hero-heading"
        className="text-5xl sm:text-7xl md:text-8xl font-normal text-foreground animate-fade-rise"
        style={{
          fontFamily: "'Instrument Serif', serif",
          lineHeight: 0.95,
          letterSpacing: '-2.46px',
          maxWidth: '72rem',
          minHeight: '2.1em',
        }}
      >
        <span>{prefix1}</span>
        {prefix2 && (
          <em className="not-italic text-muted-foreground">
            {prefix2}
          </em>
        )}
        {initialSequenceDone && ' '}
        <span className="text-foreground">{currentText}</span>
        <span className="typewriter-cursor" aria-hidden="true">
          |
        </span>
      </h1>

      {/* ── Supporting subtext ───────────────────────────────── */}
      <p
        className="text-muted-foreground animate-fade-rise-delay"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '1.05rem',
          maxWidth: '38rem',
          marginTop: '2rem',
          lineHeight: 1.75,
        }}
      >
        I turn raw footage into cinematic stories that hold attention, build
        emotion, and make brands, creators, and ideas impossible to ignore.
      </p>

      {/* ── Hero CTA — Single, clean, centered button ─────────── */}
      <div className="mt-12 animate-fade-rise-delay-2">
        <a
          href="#work"
          className="glass-pill glass-pill-hero"
          aria-label="View my work"
        >
          View My Work
        </a>
      </div>
    </section>
  )
}

export default HeroSection
