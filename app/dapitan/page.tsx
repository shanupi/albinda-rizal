import { PageLayout } from "@/components/page-layout"
import Image from "next/image"

export default function DapitanPage() {
  return (
    <PageLayout
      title="Life in Dapitan"
      image="/dapitan-shrine.jpg"
      imageAlt="Rizal Shrine in Dapitan, Zamboanga del Norte"
    >
      <p>
        In 1892, Rizal returned to the Philippines after nearly a decade abroad. He founded La Liga Filipina, a civic
        organization aimed at uniting Filipinos and advocating for peaceful reforms. However, just days after its
        founding on July 3, 1892, Spanish authorities arrested Rizal and exiled him to Dapitan, a remote town in
        Zamboanga del Norte, Mindanao.
      </p>

      <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-md my-8">
        <Image src="/dapitan-zamboanga-del-norte-1890s-coastal-town.jpg" alt="Dapitan in the 1890s" fill className="object-cover" />
        <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2">
          Dapitan, where Rizal spent four years in exile
        </p>
      </div>

      <p>
        Rather than succumbing to despair, Rizal transformed his exile into a period of remarkable productivity and
        community service. He purchased land and built a house, a school, and a hospital. His four years in Dapitan
        (1892-1896) demonstrated his belief that true patriotism meant serving one's people in whatever circumstances
        one found oneself.
      </p>

      <h2 className="text-2xl font-serif font-bold text-[#2c2416] mt-8 mb-4">Medical Practice</h2>
      <p>
        Rizal practiced medicine in Dapitan, treating patients from all walks of life, often for free. He specialized in
        ophthalmology and performed numerous successful eye surgeries, including cataract operations. His most famous
        patient was his own mother, Teodora Alonso, whom he successfully operated on to restore her failing eyesight.
        His medical practice brought relief to countless people who had no access to proper healthcare.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
          <Image src="/rizal-teaching-children-school-dapitan-1890s.jpg" alt="Rizal teaching in Dapitan" fill className="object-cover" />
          <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2">
            Rizal teaching local children
          </p>
        </div>
        <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
          <Image src="/rizal-scientific-specimens-botanical-drawings.jpg" alt="Rizal's scientific work" fill className="object-cover" />
          <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2">
            Rizal's scientific studies and specimens
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-serif font-bold text-[#2c2416] mt-8 mb-4">Education and Teaching</h2>
      <p>
        Rizal built a school and taught local children for free, providing them with education that went beyond rote
        memorization. He taught them reading, writing, arithmetic, geography, history, and practical skills. He believed
        that education was the key to national progress and that enlightened citizens were essential for a free society.
        His students remembered him as a patient, inspiring teacher who made learning enjoyable.
      </p>

      <h2 className="text-2xl font-serif font-bold text-[#2c2416] mt-8 mb-4">Community Development</h2>
      <p>
        Rizal designed and helped build a water system that brought clean water to the town, improving public health. He
        introduced modern agricultural techniques, teaching farmers how to improve their yields and manage their land
        more efficiently. He also engaged in various business ventures, including fishing and copra production, to
        support himself and demonstrate economic self-sufficiency.
      </p>

      <h2 className="text-2xl font-serif font-bold text-[#2c2416] mt-8 mb-4">Scientific Research</h2>
      <p>
        Rizal pursued scientific studies in botany, zoology, and geology. He collected specimens of plants, insects,
        shells, and other natural objects, sending many to European scientists for classification. He discovered several
        new species, including a rare frog (Rhacophorus rizali) and a beetle (Apogonia rizali), both named in his honor.
        His scientific work demonstrated his belief in the importance of understanding and documenting the natural
        wealth of the Philippines.
      </p>

      <div className="bg-[#e6f0ff] border-l-4 border-[#003bbf] p-6 my-8">
        <h3 className="font-serif font-bold text-xl mb-3 text-[#003bbf]">Accomplishments in Dapitan</h3>
        <ul className="space-y-2 list-disc list-inside text-[#1a1a1a]">
          <li>Established a school and taught local children</li>
          <li>Practiced medicine and performed successful eye surgeries</li>
          <li>Designed and built a water system for the town</li>
          <li>Introduced modern agricultural techniques</li>
          <li>Conducted scientific research and discovered new species</li>
          <li>Built a hospital and community facilities</li>
          <li>Engaged in business ventures to support the community</li>
        </ul>
      </div>

      <h2 className="text-2xl font-serif font-bold text-[#2c2416] mt-8 mb-4">Personal Life</h2>
      <p>
        During his exile, Rizal met Josephine Bracken, an Irish woman who came to Dapitan with her adoptive father for
        eye treatment. They fell in love and lived together as partners, though they were unable to marry in a Catholic
        ceremony because Rizal refused to retract his criticisms of the Church. Their relationship brought Rizal
        companionship and happiness during his years of isolation.
      </p>

      <p>
        Rizal's life in Dapitan proved that exile could not diminish his spirit or his commitment to serving his people.
        He turned a punishment into an opportunity, transforming a remote town through education, healthcare, and
        community development. His years in Dapitan remain a testament to his character and his belief that true heroism
        lies in everyday service to others.
      </p>
    </PageLayout>
  )
}
