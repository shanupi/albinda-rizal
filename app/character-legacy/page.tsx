import { PageLayout } from "@/components/page-layout"
import Image from "next/image"

export default function CharacterLegacyPage() {
  return (
    <PageLayout title="Character & Legacy" image="/rizal-monument.jpg" imageAlt="Rizal Monument at Luneta Park, Manila">
      <p>
        José Rizal embodied virtues of patriotism, intellect, courage, and compassion that continue to inspire Filipinos
        and people around the world. His character was shaped by his upbringing, education, and experiences, resulting
        in a complex individual whose strengths and weaknesses made him profoundly human yet undeniably heroic.
      </p>

      <h2 className="text-2xl font-serif font-bold text-[#003bbf] mt-8 mb-4">Strengths and Virtues</h2>

      <div className="space-y-4">
        <div className="bg-[#e6f0ff] rounded-lg p-6 border-l-4 border-[#003bbf]">
          <h3 className="font-serif font-bold text-lg text-[#003bbf] mb-2">Intellectual Brilliance</h3>
          <p>
            Rizal was a polymath who mastered 22 languages, excelled in medicine, literature, art, and science. His
            intellectual capacity allowed him to engage with the greatest minds of his time and to articulate the
            Filipino cause with eloquence and sophistication.
          </p>
        </div>

        <div className="bg-[#ffe6e6] rounded-lg p-6 border-l-4 border-[#ce1126]">
          <h3 className="font-serif font-bold text-lg text-[#ce1126] mb-2">Moral Courage</h3>
          <p>
            Despite knowing the risks, Rizal never wavered in his criticism of colonial abuses. He chose truth over
            safety, principle over comfort. His willingness to die for his beliefs demonstrated extraordinary moral
            courage.
          </p>
        </div>

        <div className="bg-[#fffff0] rounded-lg p-6 border-l-4 border-[#fcd116]">
          <h3 className="font-serif font-bold text-lg text-[#1a1a1a] mb-2">Selfless Patriotism</h3>
          <p>
            Rizal dedicated his life to the welfare of his country and people. He could have lived comfortably in
            Europe, but he chose to return to the Philippines and face persecution. His patriotism was not abstract—it
            manifested in concrete service to his community.
          </p>
        </div>

        <div className="bg-[#e6f0ff] rounded-lg p-6 border-l-4 border-[#003bbf]">
          <h3 className="font-serif font-bold text-lg text-[#003bbf] mb-2">Discipline and Work Ethic</h3>
          <p>
            Rizal's accomplishments were the result of extraordinary discipline. He maintained rigorous study habits,
            managed his time efficiently, and pursued excellence in everything he did. His productivity during his exile
            in Dapitan exemplified his work ethic.
          </p>
        </div>

        <div className="bg-[#ffe6e6] rounded-lg p-6 border-l-4 border-[#ce1126]">
          <h3 className="font-serif font-bold text-lg text-[#ce1126] mb-2">Compassion and Humility</h3>
          <p>
            Despite his brilliance, Rizal remained humble and compassionate. He treated patients regardless of their
            ability to pay, taught children for free, and showed kindness to all. He never used his intellect to
            belittle others.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-bold text-[#ce1126] mt-8 mb-4">Weaknesses and Limitations</h2>

      <div className="space-y-4">
        <div className="bg-white border border-[#dbd0ba] rounded-lg p-6">
          <h3 className="font-serif font-bold text-lg text-[#2c2416] mb-2">Idealism Over Pragmatism</h3>
          <p>
            Rizal's belief in peaceful reform through education and enlightenment, while noble, may have been overly
            idealistic. He underestimated the Spanish government's unwillingness to grant meaningful reforms and the
            depth of Filipino frustration that would lead to armed revolution.
          </p>
        </div>

        <div className="bg-white border border-[#dbd0ba] rounded-lg p-6">
          <h3 className="font-serif font-bold text-lg text-[#2c2416] mb-2">Hesitance Toward Revolution</h3>
          <p>
            Rizal's opposition to armed revolution, while based on genuine concern for Filipino lives, put him at odds
            with more radical reformists. Some criticized him for being too cautious, though history has shown that his
            concerns about premature revolt were not unfounded.
          </p>
        </div>

        <div className="bg-white border border-[#dbd0ba] rounded-lg p-6">
          <h3 className="font-serif font-bold text-lg text-[#2c2416] mb-2">Elitism</h3>
          <p>
            As a member of the educated elite, Rizal sometimes displayed attitudes that reflected his class background.
            His emphasis on education and enlightenment, while important, may have overlooked the immediate material
            needs and grievances of the masses.
          </p>
        </div>
      </div>

      <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-md my-8">
        <Image src="/rizal_monument1.png?height=500&width=800" alt="Rizal Monument" fill className="object-cover" />
        <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2">
          The Rizal Monument at Luneta Park, site of his execution
        </p>
      </div>

      <h2 className="text-2xl font-serif font-bold text-[#003bbf] mt-8 mb-4">Enduring Legacy</h2>

      <p>
        Despite his shortcomings, Rizal's legacy is immense and enduring. His writings awakened Filipino national
        consciousness and inspired the revolution that would eventually lead to Philippine independence. His martyrdom
        transformed him into a symbol of Filipino nationalism and resistance to oppression.
      </p>

      <p>
        In 1901, the American colonial government officially declared Rizal the Philippine National Hero, recognizing
        his advocacy for peaceful reform and his embodiment of Filipino ideals. Today, Rizal Day (December 30) is a
        national holiday, and his image appears on currency, monuments, and in schools across the nation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/rizal-currency.png?height=400&width=600"
            alt="Rizal on Philippine currency"
            fill
            className="object-cover"
          />
          <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2">
            Rizal on Philippine currency
          </p>
        </div>
        <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/rizal-allovertheworld.jpg?height=400&width=600"
            alt="Rizal monuments worldwide"
            fill
            className="object-cover"
          />
          <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2">
            Rizal monuments around the world
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-bold text-[#ce1126] mt-8 mb-4">Lessons for Today</h2>

      <p>
        Rizal's legacy extends beyond his role in Philippine independence. He demonstrated that the pen is indeed
        mightier than the sword, that education and enlightenment are the foundations of true freedom, and that one
        person's courage can inspire a nation. His life reminds us that heroism is not just about grand gestures but
        about consistent dedication to truth, justice, and the welfare of one's people.
      </p>

      <p>
        His emphasis on education, critical thinking, and moral integrity remains relevant today. In an age of
        misinformation and polarization, Rizal's commitment to truth and reasoned discourse offers a model for civic
        engagement. His belief that lasting change comes through enlightenment rather than violence continues to inspire
        peaceful movements for social justice worldwide.
      </p>

      <div className="bg-[#fffff0] border-l-4 border-[#fcd116] p-6 my-8">
        <p className="font-serif italic text-lg mb-4 text-[#1a1a1a]">
          "He who does not know how to look back at where he came from will never get to his destination."
        </p>
        <p className="text-sm text-[#1a1a1a] font-semibold">— José Rizal</p>
      </div>

      <p>
        More than a century after his death, Rizal's ideals continue to inspire Filipinos and freedom-loving people
        worldwide. His life stands as a testament to the power of education, the importance of moral courage, and the
        enduring impact of one individual's commitment to justice and human dignity. José Rizal remains not just a
        historical figure, but a living inspiration for all who believe in the possibility of a better world.
      </p>
    </PageLayout>
  )
}
