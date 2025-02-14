import Link from "next/link"
import { Check, X } from "lucide-react"

export default function ComparePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center text-white">Compare Us</h1>

      <div className="overflow-x-auto rounded-lg shadow-xl">
        <table className="w-full bg-white bg-opacity-10">
          <thead>
            <tr className="bg-[#FF4081] text-white">
              <th className="px-6 py-4 text-left">Features you&apos;ve been asking for</th>
              <th className="px-6 py-4 text-center">PickMe</th>
              <th className="px-6 py-4 text-center">Uber</th>
            </tr>
          </thead>
          <tbody className="text-white divide-y divide-gray-700">
            {features.map((feature, index) => (
              <tr key={index} className="bg-white bg-opacity-5 hover:bg-opacity-10 transition-colors">
                <td className="px-6 py-4">{feature.name}</td>
                <td className="px-6 py-4 text-center">
                  {feature.pickme ? (
                    <Check className="inline-block w-6 h-6 text-green-400" />
                  ) : (
                    <X className="inline-block w-6 h-6 text-red-400" />
                  )}
                </td>
                <td className="px-6 py-4 text-center">
                  {feature.uber ? (
                    <Check className="inline-block w-6 h-6 text-green-400" />
                  ) : (
                    <X className="inline-block w-6 h-6 text-red-400" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="btn-primary inline-block">
          Back Home
        </Link>
      </div>
    </div>
  )
}

const features = [
  {
    name: "Choose the driver you want",
    pickme: true,
    uber: false,
  },
  {
    name: "Reserve your pick up time and day (up to 30 days in advance)",
    pickme: true,
    uber: false,
  },
  {
    name: "Child seat available on request",
    pickme: true,
    uber: false,
  },
  {
    name: "Choice of lady driver",
    pickme: true,
    uber: false,
  },
  {
    name: "No Credit Card pre-payment required",
    pickme: true,
    uber: false,
  },
  {
    name: "Ride Pooling with split payments (in Goulburn)",
    pickme: true,
    uber: false,
  },
  {
    name: "Pricing is up to 10% better than others for local trips",
    pickme: true,
    uber: false,
  },
  {
    name: 'We don\'t do "surge" pricing when things get busy',
    pickme: true,
    uber: false,
  },
  {
    name: "No cancellation fees",
    pickme: true,
    uber: false,
  },
  {
    name: "Drivers don't pay 27.5% fees to an off-shore US corporation",
    pickme: true,
    uber: false,
  },
  {
    name: "All Drivers hold a current NSW Police Background Check",
    pickme: true,
    uber: true,
  },
  {
    name: "PickMeApp Goulburn is fair to drivers (Drivers keep 97.5% of fares)",
    pickme: true,
    uber: false,
  },
  {
    name: "We are not a faceless $134 billion global technology business",
    pickme: true,
    uber: false,
  },
  {
    name: "We don't use generative AI chatbots to fake human support",
    pickme: true,
    uber: false,
  },
  {
    name: "You can ask a real person in Goulburn for help via WhatsApp",
    pickme: true,
    uber: false,
  },
  {
    name: "Payment options are Card, Cash or AfterPay",
    pickme: true,
    uber: false,
  },
  {
    name: "We are a registered booking provider with the NSW Point to Point Transport Commission",
    pickme: true,
    uber: true,
  },
]


