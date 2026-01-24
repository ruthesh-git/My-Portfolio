// src/lib/animations.js

// ───────────────── Animation Constants ─────────────────

export const EASING = {
  // Custom cubic-bezier curves
  smooth: [0.76, 0, 0.24, 1],
  spring: [0.34, 1.56, 0.64, 1],
  easeOut: [0.22, 1, 0.36, 1],
  easeIn: [0.4, 0, 1, 1],
  easeInOut: [0.76, 0, 0.24, 1],
}

export const DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.6,
  slower: 0.8,
}

export const STAGGER = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
}

// ───────────────── Basic Animations ─────────────────

export const fadeIn = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: { 
      duration: DURATION.normal,
      ease: EASING.easeOut,
    },
  },
}

export const fadeOut = {
  hidden: { 
    opacity: 1 
  },
  visible: {
    opacity: 0,
    transition: { 
      duration: DURATION.normal,
      ease: EASING.easeIn,
    },
  },
}

// ───────────────── Directional Fades ─────────────────

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
}

export const fadeDown = {
  hidden: {
    opacity: 0,
    y: -60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
}

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
}

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
}

// ───────────────── Scale Animations ─────────────────

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION.normal,
      ease: EASING.easeOut,
    },
  },
}

export const scaleUp = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
}

export const popIn = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION.normal,
      ease: EASING.spring,
    },
  },
}

// ───────────────── Container Animations ─────────────────

export const staggerContainer = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER.normal,
      delayChildren: 0.1,
    },
  },
}

export const staggerFast = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER.fast,
      delayChildren: 0,
    },
  },
}

export const staggerSlow = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER.slow,
      delayChildren: 0.2,
    },
  },
}

// ───────────────── Slide Animations ─────────────────

export const slideInUp = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: DURATION.slow,
      ease: EASING.easeOut,
    },
  },
}

export const slideInDown = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: DURATION.slow,
      ease: EASING.easeOut,
    },
  },
}

export const slideInLeft = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: DURATION.slow,
      ease: EASING.easeOut,
    },
  },
}

export const slideInRight = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: DURATION.slow,
      ease: EASING.easeOut,
    },
  },
}

// ───────────────── Rotation Animations ─────────────────

export const rotateIn = {
  hidden: {
    opacity: 0,
    rotate: -180,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: DURATION.slower,
      ease: EASING.easeOut,
    },
  },
}

export const flipIn = {
  hidden: {
    opacity: 0,
    rotateY: 90,
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.easeOut,
    },
  },
}

// ───────────────── Utility Functions ─────────────────

/**
 * Create a custom fade animation with configurable distance
 * @param {number} distance - Distance to travel (default: 60)
 * @param {string} direction - Direction: 'up', 'down', 'left', 'right'
 * @param {number} duration - Animation duration
 * @returns {object} Framer Motion variant object
 */
export const createFade = (distance = 60, direction = 'up', duration = DURATION.slow) => {
  const axis = direction === 'up' || direction === 'down' ? 'y' : 'x'
  const value = direction === 'up' || direction === 'left' ? distance : -distance

  return {
    hidden: {
      opacity: 0,
      [axis]: value,
    },
    visible: {
      opacity: 1,
      [axis]: 0,
      transition: {
        duration,
        ease: EASING.smooth,
      },
    },
  }
}

/**
 * Create a stagger container with custom timing
 * @param {number} stagger - Delay between children
 * @param {number} delay - Initial delay before animation starts
 * @returns {object} Framer Motion variant object
 */
export const createStagger = (stagger = STAGGER.normal, delay = 0.1) => ({
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
})

/**
 * Create a viewport configuration object
 * @param {boolean} once - Whether animation should happen only once
 * @param {number} amount - Amount of element that needs to be visible (0-1)
 * @param {string} margin - Margin around viewport
 * @returns {object} Viewport configuration object
 */
export const createViewport = (once = true, amount = 0.3, margin = '0px') => ({
  once,
  amount,
  margin,
})

// ───────────────── Common Viewport Configs ─────────────────

export const VIEWPORT = {
  default: { once: true, amount: 0.3 },
  full: { once: true, amount: 0.8 },
  minimal: { once: true, amount: 0.1 },
  repeat: { once: false, amount: 0.3 },
}

// ───────────────── Usage Examples ─────────────────

/*
EXAMPLE 1: Basic usage
import { fadeUp, VIEWPORT } from '@/lib/animations'

<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={VIEWPORT.default}
>
  Content
</motion.div>

EXAMPLE 2: Staggered children
import { staggerContainer, fadeUp } from '@/lib/animations'

<motion.div variants={staggerContainer} initial="hidden" whileInView="visible">
  <motion.div variants={fadeUp}>Child 1</motion.div>
  <motion.div variants={fadeUp}>Child 2</motion.div>
  <motion.div variants={fadeUp}>Child 3</motion.div>
</motion.div>

EXAMPLE 3: Custom fade with utility function
import { createFade } from '@/lib/animations'

const customFade = createFade(100, 'left', 0.8)
<motion.div variants={customFade} initial="hidden" animate="visible">
  Content
</motion.div>

EXAMPLE 4: Using constants
import { EASING, DURATION } from '@/lib/animations'

const customVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
}
*/