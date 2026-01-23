'use client'

import Typewriter from "./Typewriter"
import Cursor from "./Cursor"

const words = ["Developer", "Designer"]

export default function Hero() {
    return (
        <section className="h-screen px-20 flex flex-col">

            {/* Name */}
            <h1 className="text-5xl font-bold pt-10 tracking-tight" style={{ fontSize: 80 }}>
                Ruthesh Medaboina
            </h1>

            {/* Role + description block */}
            <div className="mt-4">
                <div className="flex items-baseline text-5xl font-semibold leading-tight">
                    <span className="mr-4">Software</span>
                    <Typewriter words={words} />
                    <Cursor />
                </div>

                {/* Placeholder description (add later) */}
                <p className="mt-4 max-w-xl text-lg">
                    {/*description goes here */}
                    I build scalable backend systems and clean, interactive web experiences, with a strong focus on performance, APIs, and reliability.
                </p>
            </div>

        </section>
    )
}
