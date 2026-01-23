'use client'

import Typewriter from "./Typewriter"
import Cursor from "./Cursor"

const words = ["Developer", "Designer"]

export default function Hero() {
  return (
    <section className="h-screen px-20 flex flex-col">
      
      {/* Name */}
      <h1 className="text-5xl font-bold pt-10" style={{fontSize : 100}}>
        Ruthesh Medaboina
      </h1>

      {/* Role + description block */}
      <div className="mt-8">
        
        {/* Software Developer */}
        <div className="flex items-baseline text-6xl leading-tight font-bold">
          <span className="mr-4">Software</span>
          <Typewriter words={words} />
          <Cursor />
        </div>

        {/* Placeholder description (add later) */}
        <p className="mt-4 max-w-xl text-lg text-600">
          {/*description goes here */}
            
        </p>

      </div>

    </section>
  )
}
