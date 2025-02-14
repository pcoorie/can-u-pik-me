"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-[#4A0D2C] text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="https://www.goulburnaustralia.com.au/events/view-all-events/" className="text-2xl font-bold">
          WHAT&apos;S ON
        </Link>
        <nav className="hidden md:block">
          <a
            href="mailto:canupikme@gmail.com"
            className="text-white font-semibold hover:text-[#E93B90] transition-colors duration-300"
            aria-label="Contact us via email"
          >
            CONTACT US
          </a>
        </nav>
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="block text-white font-semibold hover:text-[#E93B90] transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/compare"
                  className="block text-white font-semibold hover:text-[#E93B90] transition-colors duration-300"
                >
                  Compare Us
                </Link>
              </li>
              <li>
                <a
                  href="mailto:canupikme@gmail.com"
                  className="block text-white font-semibold hover:text-[#E93B90] transition-colors duration-300"
                  aria-label="Contact us via email"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

