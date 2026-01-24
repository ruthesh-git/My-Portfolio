'use client'

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
      className="snap-start min-h-screen px-6 md:px-20 py-16 flex flex-col justify-center"
      aria-labelledby="about-heading"
    >
      <div className="max-w-4xl">
        <h2 
          id="about-heading"
          className="text-4xl md:text-5xl font-bold mb-8 text-white"
        >
          {ABOUT_CONTENT.title}
        </h2>

        <div className="space-y-6">
          {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
            <p 
              key={index}
              className="text-base md:text-lg text-gray-400 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Optional: Tech Stack Highlight */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-500 leading-relaxed">
            <span className="text-gray-400 font-medium">Currently exploring:</span> System design patterns, distributed systems, and advanced backend architectures.
          </p>
        </div>
      </div>
    </section>
  )
}