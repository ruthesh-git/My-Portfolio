'use client'

import { motion } from "framer-motion"
import { fadeUp, staggerContainer } from "../lib/animations"

// ───────────────── Constants ─────────────────

const ABOUT_CONTENT = {
  title: 'About Me',
  paragraphs: [
    "I'm a software development engineer with a strong foundation in computer science fundamentals and hands-on experience building backend systems and full-stack web applications.",
    "I enjoy designing clean APIs, working with databases, and thinking about performance, scalability, and reliability when building software. I focus on writing maintainable code and understanding the trade-offs behind technical decisions.",
    "I've worked with technologies like Java, Python, Django, React, PostgreSQL, Docker, and AWS, and I actively practice data structures and algorithms to sharpen my problem-solving skills.",
  ],
}

// ───────────────── Component ─────────────────

export default function About() {
  return (
    <section 
      id="about" 
      className="snap-start min-h-screen px-6 md:px-20 py-32 flex flex-col justify-center"
      aria-labelledby="about-heading"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-4xl"
      >
        <motion.h2 
          variants={fadeUp}
          id="about-heading"
          className="text-4xl md:text-5xl font-bold mb-8 text-white"
        >
          {ABOUT_CONTENT.title}
        </motion.h2>

        <div className="space-y-6">
          {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
            <motion.p 
              key={index}
              variants={fadeUp}
              className="text-base md:text-lg text-gray-400 leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Optional: Tech Stack Highlight */}
        <motion.div 
          variants={fadeUp}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <p className="text-sm text-gray-500 leading-relaxed">
            <span className="text-gray-400 font-medium">Currently exploring:</span> System design patterns, distributed systems, and advanced backend architectures.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
