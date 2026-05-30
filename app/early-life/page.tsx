import { PageLayout } from "@/components/page-layout"
import Image from "next/image"

export default function EarlyLifePage() {
  return (
    <PageLayout
      title="Early Life & Family Background"
      image="/rizal-birthplace.jpg"
      imageAlt="Rizal's birthplace in Calamba, Laguna"
    >
      <p>
        José Protacio Rizal Mercado y Alonzo Realonda entered the world on June 19, 1861, in Calamba, Laguna, the Philippines—a humble beginning that would soon produce one of history's greatest patriots. He was the seventh of eleven children born to Francisco Mercado Rizal and Teodora Alonso Realonda, two prominent figures from influential families of Filipino, Chinese, and Spanish heritage.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
          <Image src="/rizal-family-portrait-19th-century-philippines.jpg" alt="Rizal family" fill className="object-cover" />
          <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2">The Rizal Family</p>
        </div>
        <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
          <Image src="/calamba-laguna-ancestral-house-1800s.jpg" alt="Calamba house" fill className="object-cover" />
          <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2">
            Rizal's Ancestral Home in Calamba
          </p>
        </div>
      </div>

      <p>
        His family nurtured values of faith, discipline, and education. His mother, Teodora, was his first teacher,
        instilling in him a love for reading and learning. She taught him the alphabet and prayers, and encouraged his
        natural curiosity about the world around him. His father, Francisco, was a successful farmer who managed the
        family's hacienda and taught José practical skills and the value of hard work.
      </p>

      <p>
        Growing up in Calamba, young José was surrounded by the natural beauty of the Philippine countryside. He
        developed a deep appreciation for nature, spending hours observing plants, insects, and animals. This early
        connection to his homeland would later inspire his patriotic writings and his scientific pursuits.
      </p>

      <p>
        However, his childhood was also marked by the harsh realities of Spanish colonial rule. He witnessed the
        injustices suffered by Filipino farmers, including his own family, at the hands of Spanish friars and officials.
        These early experiences of inequality and oppression planted the seeds of his future advocacy for reform and
        justice.
      </p>

      <div className="bg-[#e6f0ff] border-l-4 border-[#003bbf] p-6 my-8">
        <p className="font-serif italic text-lg text-[#003bbf]">
          "The memory of my town, my childhood, and my family will always be the most beautiful part of my life."
        </p>
        <p className="text-sm text-[#003bbf] font-semibold mt-2">— José Rizal</p>
      </div>

      <p>
        The Rizal family's emphasis on education and moral values shaped José's character from an early age. His
        siblings were also well-educated, and the household was filled with books, music, and intellectual discourse.
        This nurturing environment, combined with the challenges of colonial life, forged the foundation of the man who
        would become the Philippines' greatest hero.
      </p>
    </PageLayout>
  )
}
