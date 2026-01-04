import { HeroSlider } from "@/components/hero-slider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Shield, Heart, Phone, FileText, MapPin } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Zašto odabrati Apoteku Lamela?</h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Pružamo vrhunsku farmaceutsku uslugu sa fokusom na vaše zdravlje i dobrobit
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Certificirana apoteka</h3>
                  <p className="text-muted-foreground text-sm">
                    Licencirana i certificirana apoteka sa dozvolom za rad (rješenje 05-19-21583/20)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Stručno savjetovanje</h3>
                  <p className="text-muted-foreground text-sm">
                    Naš tim licenciranih farmaceuta je tu da vam pruži profesionalni savjet
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Online rezervacija</h3>
                  <p className="text-muted-foreground text-sm">
                    Rezervišite lijekove bez recepta online i preuzmite ih kada vam odgovara
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Naše usluge</h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Sve što vam je potrebno za brigu o vašem zdravlju na jednom mjestu
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <FileText className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-semibold">Katalog lijekova</h3>
              <p className="text-muted-foreground">
                Pregledajte naš kompletni asortiman lijekova sa detaljnim informacijama o svakom preparatu
              </p>
              <Link href="/katalog">
                <Button variant="link" className="p-0">
                  Pretraži katalog →
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Phone className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-semibold">Rezervacija lijekova</h3>
              <p className="text-muted-foreground">
                Rezervišite lijekove bez recepta putem našeg online sistema i preuzmite ih u apoteci
              </p>
              <Link href="/katalog">
                <Button variant="link" className="p-0">
                  Rezerviši lijek →
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <FileText className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-semibold">Pošalji recept</h3>
              <p className="text-muted-foreground">
                Fotografišite i pošaljite nam recept elektronski. Pripremit ćemo vaše lijekove za preuzimanje
              </p>
              <Link href="/recept">
                <Button variant="link" className="p-0">
                  Pošalji recept →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Trebate savjet? Posjetite nas!</h2>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Naš tim stručnih farmaceuta spreman je da odgovori na sva vaša pitanja i pomogne vam u izboru pravih
              lijekova
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/kontakt">
                <Button size="lg" variant="secondary" className="text-base">
                  <MapPin className="mr-2 h-5 w-5" />
                  Lokacija i radno vrijeme
                </Button>
              </Link>
              <a href="tel:+38733XXXXXX">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Pozovi nas
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
