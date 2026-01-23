'use client'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="w-full py-6 flex items-center justify-between">
      {/* Logo / Name */}
      <div className="text-xl font-bold tracking-tight relative h-8 w-32"> {/* Container for fill */}
        <Image 
          src="/logoruth.png" 
          alt="RuthDev Logo" 
          fill 
          className="object-contain"
        />
      </div>

      {/* Navigation Links */}
      <ul className="flex px-20 items-center gap-8 text-sm font-medium text-600">
        <li>
          <a href="#about" className="hover:text-gray-900 transition">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-gray-900 transition">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-900 transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
