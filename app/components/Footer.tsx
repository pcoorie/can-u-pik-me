import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#4A0D2C] text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Can U Pik Me</h3>
            <p>Rideshare in Goulburn and Yass NSW</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
            <li>
                <a href="#" className="hover:text-[#D5277B]">
                  Apply to drive (coming soon)
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>Email: <a href="mailto:canupikme@gmail.com?subject=Enquiry">canupikme@gmail.com</a></p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm mb-4">&copy; {new Date().getFullYear()} Can U Pik Me. A registered Booking Provider with the NSW Point to Point Transport Commission -

Authorisation No: BSP-445746</p>
<div className="flex justify-center items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nsw-p20-sPLEBgjnuXopnmvZEHA2eh9bLb0L5m.png"
              alt="NSW Point to Point Transport Commissioner"
              width={200}
              height={50}
              className="opacity-80"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}


