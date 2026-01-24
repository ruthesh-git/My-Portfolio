'use client'

import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function Navbar() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!mounted) return

    const previous = scrollY.getPrevious()

    if (previous !== undefined) {
      if (latest > previous && latest > 100) {
        setHidden(true)
      } else if (latest < previous) {
        setHidden(false)
      }
    }
  })

  return (
    <motion.nav
      initial={{ y: 0 }}               // 👈 important
      animate={{ y: hidden ? "-100%" : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 z-50 w-full   flex items-center justify-between   px-6 py-4   bg-black/90 backdrop-blur"
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="relative h-8 w-8">
          <Image
            src="/logoruth.png"
            alt="RuthDev logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <span className="font-bold text-xl">ruthDev</span>
      </div>

      {/* Links */}
      <ul className="flex items-center gap-8 text-sm font-medium text-gray-300 mx-15">
        <li><a href="#about" className="hover:text-white">About</a></li>
        <li><a href="#projects" className="hover:text-white">Projects</a></li>
        <li><a href="#contact" className="hover:text-white">Contact</a></li>
      </ul>
    </motion.nav>
  )
}
