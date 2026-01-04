import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Home, Phone } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Rezervacija uspješna - APOTEKA LAMELA",
  description: "Vaša rezervacija je uspješno primljena.",
}

export default function ReservationSuccessPage() {
  return (
    <div className="container py-12">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Success Icon */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>

              {/* Success Message */}
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-balance">Rezervacija uspješno primljena!</h1>
                <p className="text-lg text-muted-foreground text-pretty">
                  Hvala vam na rezervaciji. Kontaktirat ćemo vas u najkraćem roku na broj telefona koji ste naveli.
                </p>
              </div>

              {/* Information Box */}
              <div className="w-full p-6 bg-muted/50 rounded-lg space-y-3 text-left">
                <h2 className="font-semibold text-lg">Šta dalje?</h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">1.</span>
                    <span>Provjerit ćemo dostupnost i kontaktirati vas telefonom ili emailom</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">2.</span>
                    <span>Nakon potvrde, lijekovi će biti pripremljeni za preuzimanje</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">3.</span>
                    <span>Možete preuzeti lijek u našoj apoteci na adresi Branilaca Šipa 4, Sarajevo</span>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="w-full p-4 border rounded-lg">
                <p className="text-sm font-medium mb-2">Imate pitanje?</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>Pozovite nas: +387 33 XXX XXX</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full pt-4">
                <Link href="/" className="flex-1">
                  <Button variant="outline" className="w-full bg-transparent">
                    <Home className="mr-2 h-4 w-4" />
                    Početna stranica
                  </Button>
                </Link>
                <Link href="/katalog" className="flex-1">
                  <Button className="w-full">Nazad na katalog</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
