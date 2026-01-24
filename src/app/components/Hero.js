'use client'

import Image from 'next/image'
import Typewriter from './Typewriter'
import Cursor from './Cursor'

// ───────────────── Constants ─────────────────

const TYPEWRITER_WORDS = ['Developer', 'Designer']

const HERO_CONTENT = {
  name: 'Ruthesh Medaboina',
  prefix: 'Software',
  description: 'I build scalable backend systems and clean, interactive web experiences, with a strong focus on performance, APIs, and reliability.',
  image: {
    src: '/mypic.jpeg',
    alt: 'Ruthesh Medaboina - Software Developer and Designer',
  },
}

// ───────────────── Component ─────────────────

export default function Hero() {
  const scrollToNextSection = () => {
    const heroHeight = window.innerHeight - 64 // Subtract header height (4rem = 64px)
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth',
    })
  }

  return (
    <section 
      className="relative snap-start min-h-[calc(100vh-4rem)] px-6 md:px-20 pt-32 pb-20"
      aria-labelledby="hero-heading"
    >
      {/* Main Grid */}
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16 items-center">
        
        {/* LEFT — Text Content */}
        <div className="space-y-6">
          <h1 
            id="hero-heading"
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none text-white"
          >
            {HERO_CONTENT.name}
          </h1>

          <div className="space-y-6">
            {/* Dynamic Title with Typewriter */}
            <div 
              className="flex flex-wrap items-baseline text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-200 leading-tight gap-x-4"
              aria-live="polite"
              aria-label="Current role"
            >
              <span>{HERO_CONTENT.prefix}</span>
              <span className="inline-flex items-baseline">
                <Typewriter words={TYPEWRITER_WORDS} />
                <Cursor />
              </span>
            </div>

            {/* Description */}
            <p className="max-w-xl text-base md:text-lg text-gray-400 leading-relaxed">
              {HERO_CONTENT.description}
            </p>
          </div>
        </div>

        {/* RIGHT — Profile Image */}
        <div className="relative w-full max-w-sm mx-auto lg:mx-0">
          <div className="relative aspect-square overflow-hidden rounded-xl shadow-2xl transition-transform duration-300 hover:scale-[1.02] group">
            <Image
              src={HERO_CONTENT.image.src}
              alt={HERO_CONTENT.image.alt}
              fill
              sizes="(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-gray-300 transition-all duration-300 animate-bounce cursor-pointer p-2 text-2xl hover:scale-110"
        aria-label="Scroll to next section"
      >
        ↓
      </button>

      {/* Gradient Transition to Next Section */}
      <div 
        className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black/80"
        aria-hidden="true"
      />
    </section>
  )
}