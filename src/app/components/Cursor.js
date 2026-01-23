'use client'

import { motion } from "framer-motion"

export default function Cursor() {
  return (
    <motion.span
      className="inline-block w-[3px] h-[1em] bg-gray-400 ml-1 align-baseline"
      animate={{ opacity: [0, 1, 0] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  )
}
