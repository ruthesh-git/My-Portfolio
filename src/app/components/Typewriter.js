'use client'

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useState } from "react"

export default function Typewriter({
  words,
  typingDuration = 1.2,
  deletingDuration = 0.6,
  pauseDuration = 1200,
}) {
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const count = useMotionValue(0)
  const rounded = useTransform(count, Math.round)

  const text = useTransform(rounded, (latest) =>
    words[index].slice(0, latest)
  )

  useEffect(() => {
    const word = words[index]
    const target = isDeleting ? 0 : word.length

    const controls = animate(count, target, {
      type: "tween",
      duration: isDeleting ? deletingDuration : typingDuration,
      ease: "easeInOut",
      onComplete: () => {
        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), pauseDuration)
        } else {
          setIsDeleting(false)
          setIndex((i) => (i + 1) % words.length)
        }
      },
    })

    return () => controls.stop()
  }, [
    index,
    isDeleting,
    words,
    typingDuration,
    deletingDuration,
    pauseDuration,
    count,
  ])

  return (
    <motion.span className="inline-block">
      {text}
    </motion.span>
  )
}
