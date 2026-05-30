import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import type { ReactNode } from "react"

interface PageLayoutProps {
  title: string
  children: ReactNode
  image?: string
  imageAlt?: string
}

export function PageLayout({ title, children, image, imageAlt }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <Navigation />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#003bbf] mb-6 text-balance">{title}</h1>
          {image && (
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg mb-6 border-4 border-[#fcd116]">
              <Image src={image || "/placeholder.svg"} alt={imageAlt || title} fill className="object-cover" priority />
            </div>
          )}
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-md border-l-4 border-[#ce1126] p-8 space-y-6 text-[#1a1a1a] leading-relaxed">
            {children}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
