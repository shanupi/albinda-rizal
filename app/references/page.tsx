import { PageLayout } from "@/components/page-layout"
import Link from "next/link"

export default function ReferencesPage() {
  return (
    <PageLayout title="References">
      <div className="space-y-6">
        <p className="text-lg text-[#5c4d3f]">
          This website draws from authoritative sources on José Rizal's life, works, and legacy. The following
          references provide comprehensive information for those wishing to learn more about the Philippine national
          hero.
        </p>

        <div className="space-y-4">
          <div className="border-l-4 border-[#a67c52] pl-4">
            <p className="font-semibold text-[#2c2416]">Guerrero, Leon Ma.</p>
            <p className="text-[#4a3f35] italic">The First Filipino: A Biography of José Rizal</p>
            <p className="text-sm text-[#7d6b56]">
              National Historical Institute, 1963. Widely considered the definitive English-language biography of Rizal.
            </p>
          </div>

          <div className="border-l-4 border-[#a67c52] pl-4">
            <p className="font-semibold text-[#2c2416]">Zaide, Gregorio F. & Zaide, Sonia M.</p>
            <p className="text-[#4a3f35] italic">
              José Rizal: Life, Works, and Writings of a Genius, Writer, Scientist, and National Hero
            </p>
            <p className="text-sm text-[#7d6b56]">
              All-Nations Publishing, 1999. Comprehensive academic text used in Philippine universities.
            </p>
          </div>

          <div className="border-l-4 border-[#a67c52] pl-4">
            <p className="font-semibold text-[#2c2416]">Ocampo, Ambeth R.</p>
            <p className="text-[#4a3f35] italic">Rizal Without the Overcoat</p>
            <p className="text-sm text-[#7d6b56]">
              Anvil Publishing, 2012. Accessible essays that humanize Rizal and make his story relatable to modern
              readers.
            </p>
          </div>

          <div className="border-l-4 border-[#a67c52] pl-4">
            <p className="font-semibold text-[#2c2416]">Coates, Austin</p>
            <p className="text-[#4a3f35] italic">Rizal: Philippine Nationalist and Martyr</p>
            <p className="text-sm text-[#7d6b56]">
              Oxford University Press, 1968. Well-researched biography by a British colonial administrator turned
              historian.
            </p>
          </div>

          <div className="border-l-4 border-[#a67c52] pl-4">
            <p className="font-semibold text-[#2c2416]">National Historical Commission of the Philippines</p>
            <p className="text-[#4a3f35] italic">The Trial of Rizal</p>
            <p className="text-sm text-[#7d6b56]">
              Official government documentation of Rizal's trial and execution.{" "}
              <a
                href="https://nhcp.gov.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a67c52] hover:underline"
              >
                https://nhcp.gov.ph
              </a>
            </p>
          </div>

          <div className="border-l-4 border-[#a67c52] pl-4">
            <p className="font-semibold text-[#2c2416]">Rizal, José</p>
            <p className="text-[#4a3f35] italic">Noli Me Tangere (Touch Me Not)</p>
            <p className="text-sm text-[#7d6b56]">
              Berlin: Berliner Buchdruckerei-Aktiengesellschaft, 1887. Rizal's first novel exposing colonial abuses.
            </p>
          </div>

          <div className="border-l-4 border-[#a67c52] pl-4">
            <p className="font-semibold text-[#2c2416]">Rizal, José</p>
            <p className="text-[#4a3f35] italic">El Filibusterismo (The Reign of Greed)</p>
            <p className="text-sm text-[#7d6b56]">
              Ghent: F. Meyer-Van Loo Press, 1891. Rizal's second novel depicting the consequences of oppression.
            </p>
          </div>

          <div className="border-l-4 border-[#a67c52] pl-4">
            <p className="font-semibold text-[#2c2416]">Rizal, José</p>
            <p className="text-[#4a3f35] italic">Mi Último Adiós (My Last Farewell)</p>
            <p className="text-sm text-[#7d6b56]">
              1896. Rizal's final poem, written on the eve of his execution, expressing his love for the Philippines.
            </p>
          </div>

          <div className="border-l-4 border-[#a67c52] pl-4">
            <p className="font-semibold text-[#2c2416]">Schumacher, John N., S.J.</p>
            <p className="text-[#4a3f35] italic">The Propaganda Movement: 1880-1895</p>
            <p className="text-sm text-[#7d6b56]">
              Ateneo de Manila University Press, 1997. Scholarly analysis of the reform movement Rizal was part of.
            </p>
          </div>

          <div className="border-l-4 border-[#a67c52] pl-4">
            <p className="font-semibold text-[#2c2416]">Bantug, A. & Ventura, R.</p>
            <p className="text-[#4a3f35] italic">Indio Bravo: The Story of José Rizal</p>
            <p className="text-sm text-[#7d6b56]">
              Tahanan Books, 1994. Illustrated biography suitable for younger readers and general audiences.
            </p>
          </div>
        </div>

        <div className="bg-[#ece5d8] rounded-lg p-6 mt-8">
          <h2 className="text-xl font-serif font-bold text-[#2c2416] mb-3">Additional Resources</h2>
          <ul className="space-y-2 text-[#4a3f35]">
            <li>
              <strong>José Rizal University:</strong> Academic institution dedicated to Rizal studies and research
            </li>
            <li>
              <strong>Rizal Shrine, Calamba:</strong> Museum at Rizal's birthplace with artifacts and exhibits
            </li>
            <li>
              <strong>Rizal Shrine, Dapitan:</strong> Preserved site of Rizal's exile with original structures
            </li>
            <li>
              <strong>Fort Santiago, Manila:</strong> Museum and memorial at the site of Rizal's imprisonment
            </li>
            <li>
              <strong>Rizal Park (Luneta):</strong> National park and monument at the site of Rizal's execution
            </li>
          </ul>
        </div>

        <div className="bg-white border border-[#dbd0ba] rounded-lg p-6 mt-6">
          <h2 className="text-xl font-serif font-bold text-[#2c2416] mb-3">Online Archives</h2>
          <p className="text-[#4a3f35] mb-4">
            Many of Rizal's works are now in the public domain and available online:
          </p>
          <ul className="space-y-2 text-[#4a3f35]">
            <li>
              <strong>Project Gutenberg:</strong> Free digital copies of Rizal's novels in English translation
            </li>
            <li>
              <strong>Internet Archive:</strong> Historical documents, photographs, and rare editions
            </li>
            <li>
              <strong>National Library of the Philippines:</strong> Digital collections of Rizaliana
            </li>
            <li>
              <strong>Filipiniana.net:</strong> Comprehensive online resource for Philippine history and culture
            </li>
          </ul>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-[#dbd0ba]">
          <Link
            href="/"
            className="inline-block bg-[#a67c52] text-white px-6 py-3 rounded-lg hover:bg-[#8d6e4c] transition-colors font-medium"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}
