'use client'

import ProjectCard from "./ProjectCard"

// ───────────────── Constants ─────────────────

const SECTION_TITLE = "Featured Projects"

// ───────────────── Data ─────────────────

const projects = [
  {
    id: "distributed-lit-system",
    title: "Distributed Literature Summarization System",
    description:
      "Scalable RAG-based system for querying and summarizing large PDF documents using semantic search and vector embeddings.",
    tech: "Python, LangChain, FAISS, AWS, Streamlit",
    image: "/rag-system.png",
    imageAlt: "Distributed Literature Summarization System interface showing document processing and query results",
    highlights: [
      "Designed a Retrieval-Augmented Generation (RAG) pipeline using vector embeddings and FAISS for semantic search",
      "Implemented parallel document ingestion, reducing PDF processing time by ~40% through optimized chunking",
      "Deployed on AWS with auto-scaling capabilities, ensuring reliability and cost-effective resource usage",
    ],
    links: {
      github: "https://github.com/yourusername/distributed-literature-summarization",
      // demo: "https://demo-link.com", // Uncomment when available
      // docs: "https://docs-link.com", // Uncomment when available
    },
  },
  {
    id: "secure-communication",
    title: "Secure Communication Platform",
    description:
      "Backend system implementing end-to-end encrypted communication using hybrid cryptographic techniques and steganography.",
    tech: "Python, Django, AES, RSA, PostgreSQL",
    image: "/secure-crypto.png",
    imageAlt: "Secure Communication Platform architecture diagram showing encryption flow",
    highlights: [
      "Implemented RSA + AES hybrid encryption for secure, performant message exchange",
      "Designed RESTful APIs with JWT authentication for secure user management and message handling",
      "Integrated LSB steganography for covert encrypted payload transfer within images",
    ],
    links: {
      github: "https://github.com/ruthesh-git/NewsApp",
      // demo: "https://demo-link.com", // Uncomment when available
    },
  },
]

// ───────────────── Component ─────────────────

export default function Projects() {
  return (
    <section 
      id="projects"
      className="min-h-screen px-6 md:px-20 py-32"
      aria-labelledby="projects-heading"
    >
      {/* Section Header */}
      <header className="mb-16 md:mb-13">
        <h2 
          id="projects-heading"
          className="text-3xl md:text-5xl font-bold text-white mb-4"
        >
          {SECTION_TITLE}
        </h2>
        <p className="text-base md:text-lg text-gray-400 max-w-2xl">
          A selection of projects showcasing my work in backend systems, full-stack development, 
          and applied machine learning.
        </p>
      </header>

      {/* Projects List */}
      <div className="space-y-24 md:space-y-32">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id}
            {...project}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>

      {/* Optional: View More Section */}
      {/* 
      <div className="mt-20 text-center">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2
            px-6 py-3
            text-base font-medium
            text-cyan-300
            border border-cyan-400/30
            rounded-lg
            hover:bg-cyan-400/10
            hover:border-cyan-400/50
            transition-all duration-200
          "
        >
          <span>View More Projects on GitHub</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
      */}
    </section>
  )
}