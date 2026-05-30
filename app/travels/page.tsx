import { PageLayout } from "@/components/page-layout"
import Image from "next/image"

export default function TravelsPage() {
  return (
    <PageLayout title="Travels Abroad" image="/rizal-europe.jpg" imageAlt="José Rizal during his travels in Europe">
      <p>
        Rizal traveled extensively in Europe and Asia from 1882 to 1892, broadening his worldview and deepening his
        understanding of politics, culture, and social reform. His travels took him to Spain, France, Germany, Austria,
        Switzerland, Italy, England, Belgium, the Netherlands, and even to the United States, Japan, Hong Kong, and
        Singapore.
      </p>

      <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-md my-8">
        <Image src="/19th-century-european-cities-madrid-paris-berlin.jpg" alt="European cities Rizal visited" fill className="object-cover" />
        <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2">
          European cities where Rizal lived and studied
        </p>
      </div>

      <h2 className="text-2xl font-serif font-bold text-[#2c2416] mt-8 mb-4">Spain: The Center of Reform</h2>
      <p>
        In Spain, Rizal became active in the Filipino reform movement, joining organizations like the Circulo
        Hispano-Filipino and contributing articles to La Solidaridad, a propaganda newspaper advocating for Philippine
        reforms. He called for equal rights for Filipinos, representation in the Spanish Cortes, secularization of
        parishes, and freedom of speech and assembly.
      </p>

      <h2 className="text-2xl font-serif font-bold text-[#2c2416] mt-8 mb-4">Germany: Academic Excellence</h2>
      <p>
        In Germany, he completed his studies in ophthalmology under Dr. Otto Becker in Heidelberg. It was also in
        Germany, specifically in Berlin, that Rizal completed and published his first novel, "Noli Me Tangere" (Touch Me
        Not) in 1887. This groundbreaking work exposed the corruption and abuses of the Spanish colonial government and
        the Catholic Church in the Philippines.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
          <Image src="/noli-me-tangere-first-edition-book-cover-1887.jpg" alt="Noli Me Tangere first edition" fill className="object-cover" />
          <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2">
            First edition of Noli Me Tangere (1887)
          </p>
        </div>
        <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
          <Image src="/el-filibusterismo-book-cover-1891.jpg" alt="El Filibusterismo" fill className="object-cover" />
          <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2">
            El Filibusterismo (1891)
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-bold text-[#2c2416] mt-8 mb-4">France and Belgium: Literary Work</h2>
      <p>
        In France and Belgium, Rizal continued his literary work. He wrote his second novel, "El Filibusterismo" (The
        Reign of Greed), published in Ghent, Belgium in 1891. This darker, more radical sequel to Noli Me Tangere
        depicted the consequences of continued oppression and hinted at the inevitability of revolution if reforms were
        not granted.
      </p>

      <h2 className="text-2xl font-serif font-bold text-[#2c2416] mt-8 mb-4">London: Historical Research</h2>
      <p>
        In London, Rizal spent months at the British Museum researching historical works about the Philippines,
        particularly Antonio de Morga's "Sucesos de las Islas Filipinas" (Events in the Philippine Islands). He
        annotated and republished this work to prove that Filipinos had a rich, advanced civilization before Spanish
        colonization, countering the colonial narrative that portrayed Filipinos as uncivilized savages who needed
        Spanish rule.
      </p>

      <div className="bg-[#fffff0] border-l-4 border-[#fcd116] p-6 my-8">
        <h3 className="font-serif font-bold text-xl mb-3 text-[#1a1a1a]">Major Works Written During Travels</h3>
        <ul className="space-y-2 list-disc list-inside text-[#1a1a1a]">
          <li>
            <strong>Noli Me Tangere</strong> (1887) - Exposed colonial abuses and awakened Filipino consciousness
          </li>
          <li>
            <strong>El Filibusterismo</strong> (1891) - Depicted the consequences of oppression and need for change
          </li>
          <li>
            <strong>Annotations to Morga's Sucesos</strong> (1890) - Proved pre-colonial Filipino civilization
          </li>
          <li>
            <strong>Numerous essays and articles</strong> in La Solidaridad advocating for reforms
          </li>
        </ul>
      </div>

      <p>
        During these travels, Rizal also met and corresponded with leading intellectuals, scientists, and reformists of
        his time. He formed lasting friendships with fellow Filipino expatriates like Marcelo H. del Pilar and Graciano
        López Jaena, though they sometimes disagreed on tactics and strategy for achieving Philippine reforms.
      </p>

      <p>
        Rizal's extensive travels transformed him from a colonial subject into a citizen of the world. He saw firsthand
        how other nations governed themselves, how citizens enjoyed rights and freedoms denied to Filipinos, and how
        progress was possible when people were free to think, speak, and innovate. These experiences convinced him that
        the Philippines deserved better and that change was both necessary and possible.
      </p>
    </PageLayout>
  )
}
