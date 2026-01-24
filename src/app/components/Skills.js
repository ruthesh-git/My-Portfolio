"use client"

import { motion } from "framer-motion"

// ───────────────── Constants ─────────────────

const ANIMATION_CONSTANTS = {
  verticalLineDuration: 0.8,
  horizontalLineDuration: 0.6,
  horizontalLineDelay: 0.3,
  groupStagger: 0.2,
  pillStagger: 0.06,
  viewportAmount: 0.3,
}

// ───────────────── Data ─────────────────

const skillGroups = [
  {
    title: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "SSR",
    ],
  },
  {
    title: "Backend",
    items: [
      "Python",
      "Django",
      "REST APIs",
      "JWT / OAuth",
      "SQL",
      "PostgreSQL",
      "FAISS",
      "RAG Pipelines",
    ],
  },
  {
    title: "Tools & Systems",
    items: [
      "Git",
      "GitHub",
      "Linux",
      "AWS",
      "Docker",
      "System Design",
      "DSA",
    ],
  },
]

// ───────────────── Animations ─────────────────

const lineVertical = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { 
      duration: ANIMATION_CONSTANTS.verticalLineDuration, 
      ease: "easeOut" 
    },
  },
}

const lineHorizontal = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { 
      duration: ANIMATION_CONSTANTS.horizontalLineDuration, 
      ease: "easeOut", 
      delay: ANIMATION_CONSTANTS.horizontalLineDelay 
    },
  },
}

const groupsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: ANIMATION_CONSTANTS.groupStagger,
    },
  },
}

const pillsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: ANIMATION_CONSTANTS.pillStagger,
    },
  },
}

const pill = {
  hidden: { opacity: 0, y: 6 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  hover: { 
    y: -2, 
    scale: 1.03,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
}

const badge = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
}

// ───────────────── Component ─────────────────

export default function SkillsTree() {
  return (
    <section
      className="px-6 md:px-20 py-32 bg-gray-950"
      aria-labelledby="skills-title"
    >
      {/* Screen-reader title */}
      <h2 id="skills-title" className="sr-only">
        Skills
      </h2>

      {/* Center title badge */}
      <div className="flex justify-center mb-20">
        <motion.div
          variants={badge}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: ANIMATION_CONSTANTS.viewportAmount }}
          className="
            px-6 py-3 text-sm tracking-wide
            border border-cyan-400/30
            rounded-md
            text-cyan-300
            shadow-[0_0_30px_rgba(56,189,248,0.25)]
          "
        >
          MY SKILLS
        </motion.div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Skill groups */}
        <motion.div
          variants={groupsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: ANIMATION_CONSTANTS.viewportAmount }}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 relative"
        >
          {/* Vertical connector - positioned absolutely within grid */}
          <motion.div
            variants={lineVertical}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: ANIMATION_CONSTANTS.viewportAmount }}
            className="
              hidden md:block
              absolute left-1/2 -top-20
              h-20
              w-px
              bg-cyan-400/30
              origin-top
              -translate-x-1/2
            "
            aria-hidden="true"
          />
          {skillGroups.map((group, groupIndex) => (
            <motion.div 
              key={group.title} 
              className="relative text-center pt-8"
            >
              {/* Horizontal connector - only for left and right columns */}
              {groupIndex !== 1 && (
                <motion.div
                  variants={lineHorizontal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: ANIMATION_CONSTANTS.viewportAmount }}
                  className={`
                    hidden md:block
                    absolute -top-[1px] h-px w-1/2
                    bg-cyan-400/40
                    ${groupIndex === 0 ? "right-1/2 origin-left" : "left-1/2 origin-right"}
                  `}
                  aria-hidden="true"
                />
              )}
              
              {/* Node dot at connection point */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: ANIMATION_CONSTANTS.viewportAmount }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="
                  hidden md:block
                  absolute -top-[3px] left-1/2 -translate-x-1/2
                  w-1.5 h-1.5 rounded-full
                  bg-cyan-400
                  shadow-[0_0_8px_rgba(56,189,248,0.6)]
                "
                aria-hidden="true"
              />

              <h3 
                className="text-sm font-medium mb-6 text-gray-200 uppercase tracking-wider"
                id={`skills-${group.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {group.title}
              </h3>

              <motion.ul
                role="list"
                variants={pillsContainer}
                aria-labelledby={`skills-${group.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex flex-wrap justify-center gap-4"
              >
                {group.items.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={pill}
                    whileHover="hover"
                    className="
                      px-4 py-2
                      text-sm
                      rounded-lg
                      border border-cyan-400/25
                      bg-cyan-400/5
                      text-cyan-200
                      shadow-[0_0_16px_rgba(56,189,248,0.2)]
                      hover:bg-cyan-400/10
                      hover:shadow-[0_0_24px_rgba(56,189,248,0.3)]
                      transition-colors
                      cursor-default
                      select-none
                    "
                  >
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}