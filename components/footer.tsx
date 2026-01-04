import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">APOTEKA LAMELA</h3>
            <p className="text-sm text-muted-foreground text-pretty">
              Vaša pouzdana apoteka u Sarajevu. Profesionalna usluga i savjetovanje za vaše zdravlje.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>Broj rješenja med. otpada:</p>
              <p className="font-semibold">05-19-21583/20</p>
              <p className="text-xs mt-1">Datum: 28.07.2020</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Brzi linkovi</h3>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Početna
              </Link>
              <Link href="/katalog" className="text-muted-foreground hover:text-primary transition-colors">
                Katalog lijekova
              </Link>
              <Link href="/recept" className="text-muted-foreground hover:text-primary transition-colors">
                Pošalji recept
              </Link>
              <Link href="/o-nama" className="text-muted-foreground hover:text-primary transition-colors">
                O nama
              </Link>
              <Link href="/kontakt" className="text-muted-foreground hover:text-primary transition-colors">
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kontakt</h3>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span className="text-muted-foreground">
                  Branilaca Šipa 4<br />
                  Sarajevo, BiH
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+387 33 XXX XXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">info@apoteka-lamela.ba</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Radno vrijeme</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Radnim danima</p>
                  <p>08:00 - 20:00</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Subota</p>
                  <p>08:00 - 16:00</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Nedjelja</p>
                  <p>Zatvoreno</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} APOTEKA LAMELA. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  )
}
