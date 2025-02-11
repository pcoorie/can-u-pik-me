import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MoveRight, Clock, CreditCard } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
      {/* Hero Section */}
      <div className="relative isolate">
        {/* Gradient Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.pink.400),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(35rem_35rem_at_top_right,theme(colors.orange.400),transparent)]" />
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
              CAN U PIK ME
            </h1>
            <div className="flex items-center gap-4">
	      <Button variant="ghost" className="text-white" asChild>
                <a href="https://www.goulburnaustralia.com.au/events/view-all-events/" target="_blank" rel="noopener noreferrer">
                  What&apos;s On
                </a>
              </Button>
	      <Button variant="ghost" className="text-white" asChild>
                <a href="mailto:peter@canupikme.com.au">Contact</a>
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="container mx-auto px-4 pt-32 pb-24">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-tight">
              Pre-order ride share in{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
                Goulburn
              </span>
            </h2>

            <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto">
              Choose your driver - Choose your time. Experience hassle-free travel with our modern ride-sharing
              platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white"
                asChild
              >
                <a href="https://canupikme.ondelight.app/" target="_blank" rel="noopener noreferrer">
                  Book Now
                  <MoveRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-zinc-700 text-white hover:bg-white/10"
              >
                Compare Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-zinc-700 text-white hover:bg-white/10"
	        asChild
              >
	       <a href="http://apl.bz/w@?l=en" target="_blank" rel="noopener noreferrer">
                  Download
                </a>	
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 text-left">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                <Clock className="h-6 w-6 text-pink-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Choose Your Time</h3>
                <p className="text-zinc-400">
                  Schedule rides in advance and never worry about transportation timing again.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                <CreditCard className="h-6 w-6 text-orange-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Pay After Your Trip</h3>
                <p className="text-zinc-400">
                  No credit card required - Just tap and pay after your journey is complete.
                </p>
              </div>
            </div>

            {/* App Store Badges */}
            <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://apps.apple.com/us/app/pickmeapp-rides-in-your-city/id855068290" className="transition-transform hover:scale-105">
                <Image
                  src="/app-store.jpg"
                  alt="Download on the App Store"
                  width={200}
                  height={60}
		  className="h-[60px] w-[200px] object-contain"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.multibrains.taxi.passenger&hl=en_US&pli=1" className="transition-transform hover:scale-105">
                <Image
                  src="/GetItOnGooglePlay_Badge_Web_color_English.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                  className="h-[60px] w-[200px] object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Download Section */}
    </main>
  )
}
