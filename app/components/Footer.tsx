import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#4A0D2C] text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Can U Pik Me</h3>
            <p>Local rideshare in Goulburn and Yass NSW</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-[#D5277B]">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#D5277B]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>Email: peter@canupikme.com.au</p>
            <p>Goulburn, NSW</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Can U Pik Me. All rights reserved 2025. A registered Booking Provider with the NSW Point to Point Transport Commission -

Authorisation No: BSP-445746</p>
        </div>
      </div>
    </footer>
  )
}


