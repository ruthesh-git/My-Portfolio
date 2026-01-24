'use client'

import Image from 'next/image'
import Typewriter from './Typewriter'
import Cursor from './Cursor'

const words = ['Developer', 'Designer']

export default function Hero() {
    return (
        <section className="snap-start min-h-[calc(100vh-4rem)] px-20 pt-16">

            {/* Grid */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 items-center">

                {/* LEFT — Text */}
                <div>
                    <h1 className="text-7xl font-bold tracking-tight leading-none">
                        Ruthesh Medaboina
                    </h1>

                    <div className="mt-4">
                        <div className="flex items-baseline text-5xl font-semibold text-gray-200 leading-tight">
                            <span className="mr-4">Software</span>
                            <Typewriter words={words} />
                            <Cursor />
                        </div>

                        <p className="mt-6 max-w-xl text-lg text-gray-400 leading-relaxed">
                            I build scalable backend systems and clean, interactive web
                            experiences, with a strong focus on performance, APIs, and reliability.
                        </p>
                    </div>
                </div>

                {/* RIGHT — Image */}
                <div className="relative w-full max-w-sm mx-auto lg:mx-0 my-10">
                    <div className="relative aspect-square overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-[1.02]">
                        <Image
                            src="/mypic.jpeg"
                            alt="Ruthesh Medaboina"
                            fill
                            sizes="(min-width: 1024px) 384px, 100vw"
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce">
                ↓
            </div>
            {/* 🔥 Hero → About transition */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black" />

        </section>
    )
}
