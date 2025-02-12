import Link from "next/link"
import { Menu } from "lucide-react"

export default function Header() {
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
        <button className="md:hidden">
          <Menu />
        </button>
      </div>
    </header>
  )
}


