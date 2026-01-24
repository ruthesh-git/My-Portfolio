'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { fadeUp } from "../lib/animations"

// ───────────────── Constants ─────────────────

const VIEWPORT_CONFIG = {
  once: true,
  margin: "-100px",
  amount: 0.3,
}

const LINK_LABELS = {
  github: 'View on GitHub',
  demo: 'View Live Demo',
}

// ───────────────── Component ─────────────────

export default function ProjectCard({
  title,
  description,
  tech,
  highlights = [],
  links = {},
  image,
  imageAlt,
  reverse = false,
}) {
  // Validate required props
  if (!title || !description) {
    console.warn('ProjectCard: title and description are required props')
    return null
  }

  const hasLinks = links.github || links.demo

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_CONFIG}
      className={`
        grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 
        items-center max-w-6xl mx-auto
        ${reverse ? 'md:direction-rtl' : ''}
      `}
    >
      {/* TEXT CONTENT */}
      <div className={`space-y-4 ${reverse ? 'md:direction-ltr md:order-2' : ''}`}>
        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-semibold text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-400 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        {tech && (
          <p className="text-sm text-gray-500">
            <span className="font-medium text-gray-400">Tech:</span>{' '}
            <span className="text-gray-500">{tech}</span>
          </p>
        )}

        {/* Highlights */}
        {highlights.length > 0 && (
          <ul 
            className="space-y-2 text-sm md:text-base text-gray-400"
            role="list"
          >
            {highlights.map((point, index) => (
              <li 
                key={index}
                className="flex items-start gap-3"
              >
                <span className="text-cyan-400 mt-1 flex-shrink-0" aria-hidden="true">
                  •
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Links */}
        {hasLinks && (
          <div className="flex flex-wrap gap-4 pt-2">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-cyan-300 border border-cyan-400/30 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all duration-200 group"
                aria-label={`${LINK_LABELS.github} for ${title}`}
              >
                <svg 
                  className="w-4 h-4" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
            )}

            {links.demo && (
              <a
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-cyan-300 border border-cyan-400/30 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all duration-200 group"
                aria-label={`${LINK_LABELS.demo} for ${title}`}
              >
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>Live Demo</span>
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
            )}
          </div>
        )}
      </div>

      {/* IMAGE */}
      <div className={`relative group ${reverse ? 'md:order-1' : ''}`}>
        <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl">
          <Image
            src={image}
            alt={imageAlt || `${title} project screenshot`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Border glow effect */}
          <div className="absolute inset-0 rounded-xl border border-cyan-400/20 group-hover:border-cyan-400/40 transition-colors duration-300" />
        </div>
      </div>
    </motion.article>
  )
}