import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Home, Phone, Clock } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Recept poslat - APOTEKA LAMELA",
  description: "Vaš recept je uspješno primljen.",
}

export default function PrescriptionSuccessPage() {
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
                <h1 className="text-3xl font-bold text-balance">Recept uspješno poslat!</h1>
                <p className="text-lg text-muted-foreground text-pretty">
                  Hvala vam na povjerenju. Vaš recept je primljen i naš farmaceut će ga pregledati u najkraćem roku.
                </p>
              </div>

              {/* Information Box */}
              <div className="w-full p-6 bg-muted/50 rounded-lg space-y-3 text-left">
                <h2 className="font-semibold text-lg flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Šta dalje?
                </h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">1.</span>
                    <span>Naš farmaceut će pregledati vaš recept i provjeriti dostupnost lijekova</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">2.</span>
                    <span>Kontaktirat ćemo vas telefonom ili emailom sa informacijama o dostupnosti i cijeni</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">3.</span>
                    <span>
                      Nakon potvrde, pripremit ćemo lijekove i obavijestiti vas kada budu spremni za preuzimanje
                    </span>
                  </li>
                </ul>
              </div>

              {/* Expected Time */}
              <div className="w-full p-4 border-2 border-primary/20 rounded-lg bg-primary/5">
                <p className="text-sm font-semibold text-primary mb-1">Očekivano vrijeme obrade</p>
                <p className="text-sm text-muted-foreground">
                  Obično odgovaramo u roku od 2-4 sata tokom radnog vremena apoteke
                </p>
              </div>

              {/* Contact Info */}
              <div className="w-full p-4 border rounded-lg">
                <p className="text-sm font-medium mb-2">Hitno vam je potreban lijek?</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>Pozovite nas direktno: +387 33 XXX XXX</span>
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
                  <Button className="w-full">Pogledaj katalog</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
