export function Footer() {
  return (
    <footer className="bg-[#ce1126] text-white py-12 mt-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <blockquote className="text-xl md:text-2xl font-serif italic mb-4">
          "The youth is the hope of our future."
        </blockquote>
        <p className="text-sm text-[#fcd116]">— José Rizal</p>
        <div className="mt-8 text-sm text-[#e6e6e6]">
          <p>&copy; {new Date().getFullYear()} José Rizal Educational Website</p>
        </div>
      </div>
    </footer>
  )
}
