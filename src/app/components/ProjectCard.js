'use client'

import { motion } from "framer-motion"
import { fadeUp } from "../lib/animations"
import Image from "next/image"


export default function ProjectCard({
    title,
    description,
    tech,
    highlights,
    links,
    image,
}) {
    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl"
        >
            {/* LEFT — TEXT */}
            <div>
                <h2 className="text-3xl font-semibold mb-2">{title}</h2>

                <p className="text-gray-400 mb-4">{description}</p>

                <p className="text-sm text-gray-500 mb-4">
                    <span className="font-medium">Tech:</span> {tech}
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-400 mb-6">
                    {highlights.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>

                <div className="flex gap-6 text-sm">
                    {links.github && (
                        <a href={links.github} className="hover:underline">
                            GitHub
                        </a>
                    )}
                    {links.demo && (
                        <a href={links.demo} className="hover:underline">
                            Live Demo
                        </a>
                    )}
                </div>
            </div>

            {/* RIGHT — IMAGE */}
            <div className="relative group">
                <Image
                    src={image}
                    alt={`${title} screenshot`}
                    width={800}
                    height={500}
                    placeholder="blur"
                    blurDataURL="/blur.png"
                    className=" rounded-xl shadow-lg border border-white/10 transition-transform duration-300 group-hover:scale-[1.02]"
                />
            </div>


        </motion.div>

    )
}
