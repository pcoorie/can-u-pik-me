export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">CAN U PIK ME</h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white">Reservation ride share in Goulburn and Yass</h2>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <a href="http://apl.bz/w@?l=en" className="btn-primary">
            GET THE APP
          </a>
          <a href="compare/" className="btn-primary">
            COMPARE US
          </a>
          <a href="https://canupikme.ondelight.app/" className="btn-primary">
            BOOK NOW
          </a>
        </div>

        <div className="space-y-4 text-xl md:text-2xl mb-12 text-white">
          <p className="font-semibold">Choose your driver - Choose your time</p>
          <p>No Credit Card required - Just tap and pay after your trip!</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a
            href="https://apps.apple.com/us/app/pickmeapp-rides-in-your-city/id855068290"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img src="app-store-badge.png" alt="Download on the App Store" className="w-auto h-[60px]" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.multibrains.taxi.passenger&hl=en_US&pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img src="google-play-badge.png" alt="Get it on Google Play" className="w-auto h-[60px]" />
          </a>
        </div>
      </section>
    </div>
  )
}


