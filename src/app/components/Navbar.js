'use client'

import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"

// ───────────────── Constants ─────────────────

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

const LOGO = {
  src: "/logoruth.png",
  alt: "RuthDev logo",
  text: "ruthDev",
}

const SCROLL_THRESHOLD = 100

// ───────────────── Component ─────────────────

export default function Navbar() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  // Handle mount
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle scroll for hiding navbar
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!mounted) return

    const previous = scrollY.getPrevious()

    if (previous !== undefined) {
      if (latest > previous && latest > SCROLL_THRESHOLD) {
        setHidden(true)
        setMobileMenuOpen(false) // Close mobile menu when hiding
      } else if (latest < previous) {
        setHidden(false)
      }
    }
  })

  // Track active section based on scroll position
  useEffect(() => {
    if (!mounted) return

    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => item.href.slice(1))
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [mounted])

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!mobileMenuOpen) return

    const handleClickOutside = (e) => {
      if (!e.target.closest('nav')) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [mobileMenuOpen])

  // Smooth scroll to section
  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.offsetTop - 80 // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: hidden ? "-100%" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="
          fixed top-0 left-0 z-50 w-full
          flex items-center justify-between
          px-6 md:px-12 lg:px-20 py-4
          bg-black/90 backdrop-blur-md
          border-b border-white/5
        "
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a 
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          aria-label="Home"
        >
          <div className="relative h-8 w-8 flex-shrink-0">
            <Image
              src={LOGO.src}
              alt={LOGO.alt}
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-bold text-xl text-white">
            {LOGO.text}
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1)
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`
                    relative py-2 transition-colors duration-200
                    ${isActive 
                      ? 'text-cyan-400' 
                      : 'text-gray-300 hover:text-white'
                    }
                  `}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        id="mobile-menu"
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="
          fixed top-[73px] left-0 z-40 w-full
          bg-black/95 backdrop-blur-md
          border-b border-white/5
          overflow-hidden
          md:hidden
        "
      >
        <ul className="flex flex-col py-4 px-6 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1)
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`
                    block py-3 px-4 rounded-lg
                    text-base font-medium
                    transition-all duration-200
                    ${isActive
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }
                  `}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </motion.div>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          aria-hidden="true"
        />
      )}
    </>
  )
}