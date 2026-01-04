"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar with contact info */}
      <div className="hidden md:block border-b bg-primary/5">
        <div className="container flex h-10 items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+387 33 XXX XXX</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>info@apoteka-lamela.ba</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Branilaca Šipa 4, Sarajevo</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-2xl font-bold text-primary-foreground">A</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight">APOTEKA LAMELA</span>
            <span className="text-xs text-muted-foreground">Vaše zdravlje, naša briga</span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Početna
          </Link>
          <Link href="/katalog" className="text-sm font-medium transition-colors hover:text-primary">
            Katalog lijekova
          </Link>
          <Link href="/ai-asistent" className="text-sm font-medium transition-colors hover:text-primary">
            AI Asistent
          </Link>
          <Link href="/o-nama" className="text-sm font-medium transition-colors hover:text-primary">
            O nama
          </Link>
          <Link href="/kontakt" className="text-sm font-medium transition-colors hover:text-primary">
            Kontakt
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/katalog">
            <Button>Pretraži lijekove</Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container flex flex-col gap-4 py-4">
            <Link href="/" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Početna
            </Link>
            <Link href="/katalog" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Katalog lijekova
            </Link>
            <Link href="/ai-asistent" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              AI Asistent
            </Link>
            <Link href="/o-nama" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              O nama
            </Link>
            <Link href="/kontakt" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Kontakt
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+387 33 XXX XXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@apoteka-lamela.ba</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
