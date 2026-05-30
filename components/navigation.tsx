"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/early-life", label: "Early Life" },
  { href: "/education", label: "Education" },
  { href: "/travels", label: "Travels Abroad" },
  { href: "/dapitan", label: "Life in Dapitan" },
  { href: "/arrest-execution", label: "Arrest & Execution" },
  { href: "/character-legacy", label: "Character & Legacy" },
  { href: "/references", label: "References" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-[#003bbf] border-b-4 border-[#ce1126] sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-serif font-bold text-[#fcd116] hover:text-white transition-colors">
            José Rizal
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-[#ce1126] text-white"
                    : "text-white hover:bg-[#0052cc] hover:text-[#fcd116]",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
