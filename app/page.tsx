import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#003bbf] via-[#0052cc] to-[#f8f8f8] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 text-balance">
            José Rizal: Roots, Struggles, and Heroism
          </h1>
          <p className="text-xl md:text-2xl text-[#fcd116] mb-8 text-pretty font-semibold">A life that shaped a nation's destiny</p>
          <div className="relative w-64 h-80 mx-auto mb-8 rounded-lg overflow-hidden shadow-lg border-4 border-[#fcd116]">
            <Image
              src="/jose-rizal-portrait-historical.jpg"
              alt="José Rizal portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-lg text-white max-w-2xl mx-auto leading-relaxed bg-black/20 rounded-lg p-6">
            Discover the remarkable life of José Rizal, the Philippine national hero whose brilliant writings, intellectual achievements, and courageous sacrifice ignited the flame of independence. This website traces his extraordinary journey from his birthplace in Calamba to his heroic martyrdom at Bagumbayan, exploring the character, struggles, and timeless legacy of a man who wielded his pen as a weapon for freedom.
          </p>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/early-life"
            className="group bg-white rounded-lg shadow-md border-l-4 border-[#003bbf] p-6 hover:shadow-lg hover:border-l-8 transition-all"
          >
            <h2 className="text-2xl font-serif font-bold text-[#003bbf] mb-3 group-hover:text-[#0052cc] transition-colors">
              Early Life & Family
            </h2>
            <p className="text-[#1a1a1a] leading-relaxed">
              Discover Rizal's childhood in Calamba, his family background, and the early influences that shaped his character and vision.
            </p>
          </Link>

          <Link
            href="/education"
            className="group bg-white rounded-lg shadow-md border-l-4 border-[#ce1126] p-6 hover:shadow-lg hover:border-l-8 transition-all"
          >
            <h2 className="text-2xl font-serif font-bold text-[#ce1126] mb-3 group-hover:text-[#9d0c1f] transition-colors">
              Education
            </h2>
            <p className="text-[#1a1a1a] leading-relaxed">
              Follow Rizal's academic journey from Ateneo to the University of Santo Tomas and his specialized studies across Europe.
            </p>
          </Link>

          <Link
            href="/travels"
            className="group bg-white rounded-lg shadow-md border-l-4 border-[#fcd116] p-6 hover:shadow-lg hover:border-l-8 transition-all"
          >
            <h2 className="text-2xl font-serif font-bold text-[#1a1a1a] mb-3 group-hover:text-[#003bbf] transition-colors">
              Travels Abroad
            </h2>
            <p className="text-[#1a1a1a] leading-relaxed">
              Explore Rizal's extensive travels across Europe and Asia, where he authored his revolutionary novels and advocated for reform.
            </p>
          </Link>

          <Link
            href="/dapitan"
            className="group bg-white rounded-lg shadow-md border-l-4 border-[#003bbf] p-6 hover:shadow-lg hover:border-l-8 transition-all"
          >
            <h2 className="text-2xl font-serif font-bold text-[#003bbf] mb-3 group-hover:text-[#0052cc] transition-colors">
              Life in Dapitan
            </h2>
            <p className="text-[#1a1a1a] leading-relaxed">
              Learn about Rizal's four years in exile, where he practiced medicine, educated youth, and transformed his community.
            </p>
          </Link>

          <Link
            href="/arrest-execution"
            className="group bg-white rounded-lg shadow-md border-l-4 border-[#ce1126] p-6 hover:shadow-lg hover:border-l-8 transition-all"
          >
            <h2 className="text-2xl font-serif font-bold text-[#ce1126] mb-3 group-hover:text-[#9d0c1f] transition-colors">
              Arrest & Execution
            </h2>
            <p className="text-[#1a1a1a] leading-relaxed">
              Witness the final chapter of Rizal's life, from his arrest and trial to his heroic martyrdom at Bagumbayan.
            </p>
          </Link>

          <Link
            href="/character-legacy"
            className="group bg-white rounded-lg shadow-md border-l-4 border-[#fcd116] p-6 hover:shadow-lg hover:border-l-8 transition-all"
          >
            <h2 className="text-2xl font-serif font-bold text-[#1a1a1a] mb-3 group-hover:text-[#003bbf] transition-colors">
              Character & Legacy
            </h2>
            <p className="text-[#1a1a1a] leading-relaxed">
              Examine Rizal's virtues and complexities, and discover his enduring impact on the Philippines and the world.
            </p>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
