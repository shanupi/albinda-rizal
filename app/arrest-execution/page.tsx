import { PageLayout } from "@/components/page-layout"
import Image from "next/image"

export default function ArrestExecutionPage() {
  return (
    <PageLayout
      title="Arrest, Trial, and Execution"
      image="/rizal-execution.jpg"
      imageAlt="Rizal's execution at Bagumbayan (Luneta)"
    >
      <p>
        In August 1896, the Philippine Revolution erupted under the leadership of the Katipunan, a secret revolutionary
        society founded by Andrés Bonifacio. The Katipunan had been inspired by Rizal's writings, particularly his
        novels that exposed colonial abuses. However, Rizal himself had always advocated for peaceful reform rather than
        armed rebellion, believing that Filipinos were not yet ready for independence and that premature revolt would
        lead to bloodshed and failure.
      </p>

      <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-md my-8">
        <Image src="/katipunan-philippine-revolution-1896-uprising.jpg" alt="The Philippine Revolution of 1896" fill className="object-cover" />
        <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2">
          The Philippine Revolution of 1896
        </p>
      </div>

      <h2 className="text-2xl font-serif font-bold text-[#003bbf] mt-8 mb-4">Arrest and Imprisonment</h2>
      <p>
        Despite his non-involvement in the revolution, Spanish authorities implicated Rizal in the uprising. He was
        arrested in August 1896 while en route to Cuba, where he had volunteered to serve as a military doctor. The
        Spanish government saw him as the intellectual author of the rebellion, believing that his writings had inspired
        the revolutionaries. He was brought back to Manila and imprisoned at Fort Santiago, the same fortress where many
        Filipino patriots had been held and tortured.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
          <Image src="/fort-santiago-manila-prison-1890s.jpg" alt="Fort Santiago" fill className="object-cover" />
          <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2">
            Fort Santiago, where Rizal was imprisoned
          </p>
        </div>
        <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
          <Image src="/rizal-trial-courtroom-1896-military-tribunal.jpg" alt="Rizal's trial" fill className="object-cover" />
          <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2">Rizal's military trial</p>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-bold text-[#ce1126] mt-8 mb-4">The Trial</h2>
      <p>
        Rizal faced a military trial in December 1896. The proceedings were a sham, with the verdict predetermined. He
        was charged with rebellion, sedition, and conspiracy to overthrow the Spanish government. Despite his eloquent
        defense, in which he argued that his writings advocated for reform, not revolution, and that he had no
        connection to the Katipunan, the court found him guilty. The lack of credible evidence linking him to the armed
        uprising did not matter—the Spanish authorities wanted to make an example of him.
      </p>

      <p>
        On December 26, 1896, Rizal was sentenced to death by firing squad. He accepted his fate with remarkable
        composure, spending his final days writing letters to his family and friends, and composing his final poem.
      </p>

      <h2 className="text-2xl font-serif font-bold text-[#fcd116] mt-8 mb-4">Mi Último Adiós</h2>
      <p>
        On the eve of his execution, Rizal wrote his most famous poem, "Mi Último Adiós" (My Last Farewell). This
        masterpiece, written in Spanish, expressed his deep love for the Philippines and his willingness to die for his
        country. He hid the unsigned, untitled poem inside an alcohol stove, which was later given to his family. The
        poem has since become one of the most celebrated works in Philippine literature, memorized by generations of
        Filipino students.
      </p>

      <div className="bg-[#ffe6e6] border-l-4 border-[#ce1126] p-6 my-8">
        <p className="font-serif italic text-lg text-[#ce1126]">
          "Farewell, dear Fatherland, clime of the sun caress'd, Pearl of the Orient seas, our Eden lost! Gladly now I
          go to give thee this faded life's best, And were it brighter, fresher, or more blest, Still would I give it
          thee, nor count the cost."
        </p>
        <p className="text-sm text-[#ce1126] font-semibold">— Opening stanza of Mi Último Adiós</p>
      </div>

      <h2 className="text-2xl font-serif font-bold text-[#003bbf] mt-8 mb-4">The Execution</h2>
      <p>
        On the morning of December 30, 1896, at the age of 35, José Rizal was executed by firing squad at Bagumbayan
        Field (now Luneta Park) in Manila. He walked calmly to the execution site, dressed in a black suit. He refused
        to kneel or be blindfolded, requesting to face the firing squad. However, the Spanish authorities denied this
        request, forcing him to be shot in the back as a traitor.
      </p>

      <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-md my-8">
        <Image src="/placeholder-ixmz2.png" alt="Rizal's execution" fill className="object-cover" />
        <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2">
          Rizal's execution at Bagumbayan, December 30, 1896
        </p>
      </div>

      <p>
        According to witnesses, Rizal's last words were "Consummatum est" (It is finished), echoing Christ's final words
        on the cross. As the bullets struck him, he managed to turn his body so that he fell facing upward toward the
        sky, symbolically refusing to die with his face to the ground like a traitor.
      </p>

      <h2 className="text-2xl font-serif font-bold text-[#ce1126] mt-8 mb-4">Immediate Impact</h2>
      <p>
        Rizal's execution had the opposite effect of what the Spanish authorities intended. Rather than crushing the
        revolutionary movement, his martyrdom galvanized it. Filipinos who had been hesitant to join the revolution were
        outraged by the execution of a peaceful reformist. His death transformed him from a controversial intellectual
        into a national symbol of resistance and sacrifice.
      </p>

      <p>
        The revolutionaries adopted "Viva Rizal!" as their battle cry. His martyrdom proved more powerful than his life,
        inspiring thousands to join the fight for independence. Within two years, the Philippines would declare
        independence from Spain, and Rizal's sacrifice would be recognized as a pivotal moment in the nation's history.
      </p>

      <div className="bg-[#fffff0] border-l-4 border-[#fcd116] p-6 my-8">
        <p className="font-serif italic text-lg text-[#1a1a1a]">
          "The death of Rizal was the spark that ignited the flame of revolution. His blood watered the tree of
          Philippine freedom."
        </p>
        <p className="text-sm text-[#1a1a1a] font-semibold mt-2">— Apolinario Mabini, Philippine revolutionary leader</p>
      </div>
    </PageLayout>
  )
}
