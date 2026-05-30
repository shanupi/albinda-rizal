import { PageLayout } from "@/components/page-layout"
import Image from "next/image"

export default function EducationPage() {
  return (
    <PageLayout title="Education" image="/ateneo-manila.jpg" imageAlt="Ateneo Municipal de Manila in the 19th century">
      <p>
        Rizal displayed exceptional intelligence at a young age. At eleven years old, he was sent to Manila to study at
        the Ateneo Municipal de Manila, a prestigious Jesuit school known for its rigorous academic standards and
        progressive teaching methods. Despite initial challenges adjusting to life away from home, Rizal quickly
        distinguished himself as an outstanding student.
      </p>

      <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-md my-8">
        <Image src="/ateneo-municipal-manila-1870s-classroom-students.jpg" alt="Ateneo classroom" fill className="object-cover" />
        <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2">
          Ateneo Municipal de Manila, where Rizal excelled academically
        </p>
      </div>

      <p>
        He excelled academically and graduated with honors in 1877, earning the title of "sobresaliente" (outstanding)
        in multiple subjects. At Ateneo, Rizal developed his skills in literature, poetry, and the arts. He won several
        literary competitions and became known for his talent in sculpture and painting. The Jesuit fathers recognized
        his brilliance and encouraged his intellectual development.
      </p>

      <p>
        After completing his studies at Ateneo, Rizal enrolled at the University of Santo Tomas (UST) to study medicine,
        following his mother's wish that he become a doctor. However, his experience at UST was markedly different from
        his time at Ateneo. He grew increasingly frustrated with the Dominican friars' discriminatory treatment of
        Filipino students and the outdated, medieval teaching methods that stifled critical thinking.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
          <Image src="/university-santo-tomas-manila-1880s.jpg" alt="University of Santo Tomas" fill className="object-cover" />
          <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2">
            University of Santo Tomas
          </p>
        </div>
        <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
          <Image src="/universidad-central-madrid-spain-1880s.jpg" alt="Universidad Central de Madrid" fill className="object-cover" />
          <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2">
            Universidad Central de Madrid
          </p>
        </div>
      </div>

      <p>
        Seeking better educational opportunities and greater intellectual freedom, Rizal left the Philippines in 1882 to
        continue his studies abroad. He enrolled at the Universidad Central de Madrid in Spain, where he completed his
        Licentiate in Medicine in 1884. The European academic environment was a revelation to Rizal—he encountered
        progressive ideas, scientific methods, and a culture that valued merit over racial background.
      </p>

      <p>
        Not content with just one degree, Rizal pursued advanced studies in ophthalmology in Paris under Dr. Louis de
        Wecker and later in Heidelberg, Germany under the renowned Dr. Otto Becker. He became a skilled ophthalmologist,
        specializing in eye diseases. His medical expertise would later serve him well, particularly during his exile in
        Dapitan where he performed successful eye surgeries, including one on his own mother.
      </p>

      <div className="bg-[#ffe6e6] border-l-4 border-[#ce1126] p-6 my-8">
        <h3 className="font-serif font-bold text-xl mb-3 text-[#ce1126]">Academic Achievements</h3>
        <ul className="space-y-2 list-disc list-inside text-[#1a1a1a]">
          <li>Graduated with honors from Ateneo Municipal de Manila (1877)</li>
          <li>Licentiate in Medicine, Universidad Central de Madrid (1884)</li>
          <li>Licentiate in Philosophy and Letters, Universidad Central de Madrid (1885)</li>
          <li>Advanced studies in Ophthalmology in Paris and Heidelberg</li>
          <li>Proficient in 22 languages</li>
        </ul>
      </div>

      <p>
        Beyond medicine, Rizal also earned a Licentiate in Philosophy and Letters. His insatiable thirst for knowledge
        led him to master 22 languages, study various sciences, and immerse himself in European literature and culture.
        His education transformed him from a bright provincial student into a world-class intellectual, equipped with
        the knowledge and perspective to challenge the colonial system that oppressed his people.
      </p>
    </PageLayout>
  )
}
