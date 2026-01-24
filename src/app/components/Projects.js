import ProjectCard from "./ProjectCard"

const projects = [
  {
    title: "Distributed Literature Summarization System",
    description:
      "Scalable RAG-based system for querying and summarizing large PDF documents using semantic search.",
    tech: "Python, LangChain, FAISS, AWS, Streamlit",
    image: "/rag-system.png",
    highlights: [
      "Designed a Retrieval-Augmented Generation (RAG) pipeline using vector embeddings and FAISS",
      "Implemented parallel document ingestion, reducing PDF processing time by ~40%",
      "Deployed on AWS with scalability and reliability in mind",
    ],
    links: {
      github: "https://github.com/yourusername/distributed-literature-summarization",
      //add documention link
      //you can add a demo link if available
    },
  },
  {
    title: "Secure Communication Platform (Hybrid Cryptography)",
    description:
      "Backend system implementing secure communication using hybrid cryptographic techniques.",
    tech: "Python, Django, AES, RSA",
    image: "/secure-crypto.png",
    highlights: [
      "Implemented RSA + AES hybrid encryption for secure communication",
      "Designed REST APIs for authentication and message handling",
      "Integrated LSB steganography for covert encrypted payload transfer",
    ],
    links: {
      github: "https://github.com/yourusername/secure-communication-platform",
      //you can add a demo link if available
    },
  },
]


const Projects = () => {
  return (
    <section className="px-6 md:px-20 py-32">
      <h2 className="text-3xl md:text-4xl font-semibold mb-16">
        Projects :
      </h2>

      <div className="space-y-24">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
