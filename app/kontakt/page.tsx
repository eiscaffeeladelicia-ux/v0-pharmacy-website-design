import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react"

export const metadata = {
  title: "Kontakt - APOTEKA LAMELA",
  description:
    "Kontaktirajte Apoteku Lamela. Branilaca Šipa 4, Sarajevo. Telefon, email, radno vrijeme i lokacija na mapi.",
}

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-balance">Kontaktirajte nas</h1>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Posjetite nas u apoteci ili nas kontaktirajte putem telefona ili emaila
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Location Card */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Adresa</h2>
                    <p className="text-muted-foreground">
                      Branilaca Šipa 4<br />
                      71000 Sarajevo
                      <br />
                      Bosna i Hercegovina
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Branilaca+Šipa+4+Sarajevo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="link" className="p-0 h-auto">
                        <Navigation className="mr-2 h-4 w-4" />
                        Otvori u Google Maps
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Telefon</h2>
                    <p className="text-muted-foreground">Pozovite nas za bilo koje pitanje ili hitnu potrebu</p>
                    <a href="tel:+38733XXXXXX">
                      <Button variant="link" className="p-0 h-auto text-base">
                        +387 33 XXX XXX
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Email</h2>
                    <p className="text-muted-foreground">Pošaljite nam email sa vašim pitanjima</p>
                    <a href="mailto:info@apoteka-lamela.ba">
                      <Button variant="link" className="p-0 h-auto text-base">
                        info@apoteka-lamela.ba
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Working Hours Card */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-xl font-semibold">Radno vrijeme</h2>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground">Ponedjeljak - Petak:</span>
                        <span className="font-medium">08:00 - 20:00</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground">Subota:</span>
                        <span className="font-medium">08:00 - 16:00</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground">Nedjelja:</span>
                        <span className="font-medium text-destructive">Zatvoreno</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* License Info */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <h3 className="font-semibold">Licenca i dozvole</h3>
                  <div className="text-sm space-y-1">
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Naziv:</span> APOTEKA LAMELA
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Broj rješenja med. otpada:</span> 05-19-21583/20
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Datum:</span> 28.07.2020
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="space-y-4">
            <Card className="overflow-hidden h-full min-h-[600px]">
              <CardContent className="p-0 h-full">
                {/* Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.4519358!2d18.4108!3d43.8564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDUxJzIzLjAiTiAxOMKwMjQnMzkuMyJF!5e0!3m2!1sen!2sba!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "600px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="APOTEKA LAMELA Lokacija"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground text-center">
              Kliknite na mapu za interaktivni prikaz i upute za dolazak
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
