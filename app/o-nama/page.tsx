import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Heart, Users, Award, Phone } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "O nama - APOTEKA LAMELA",
  description: "Upoznajte Apoteku Lamela - vašu pouzdanu apoteku u Sarajevu od 2020. godine.",
}

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-balance">O nama</h1>
          <p className="text-xl text-muted-foreground text-pretty">Vaša pouzdana apoteka u Sarajevu od 2020. godine</p>
        </div>

        {/* Hero Image */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden">
          <img
            src="/modern-pharmacy-interior-with-medicine-shelves.jpg"
            alt="Apoteka Lamela"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        {/* Mission Statement */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-center">Naša misija</h2>
          <Card className="border-2">
            <CardContent className="pt-6">
              <p className="text-lg text-center leading-relaxed text-muted-foreground">
                U Apoteci Lamela posvećeni smo pružanju vrhunske farmaceutske usluge i stručnog savjetovanja. Naš cilj
                je biti vaš pouzdan partner u brizi o zdravlju, nudeći ne samo kvalitetne lijekove, već i profesionalnu
                podršku i savjete naših licenciranih farmaceuta.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Naše vrijednosti</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Pouzdanost</h3>
                    <p className="text-muted-foreground">
                      Certificirana apoteka sa svim potrebnim dozvolama i licencama za siguran rad
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Briga o pacijentima</h3>
                    <p className="text-muted-foreground">
                      Individualan pristup svakom pacijentu i posvećenost vašem zdravlju
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Stručnost</h3>
                    <p className="text-muted-foreground">
                      Tim licenciranih farmaceuta sa dugogodišnjim iskustvom u farmaceutskoj praksi
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Kvalitet</h3>
                    <p className="text-muted-foreground">
                      Samo originalni i provjereni preparati od renomiranih proizvođača
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Šta nudimo</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Širok asortiman lijekova</h3>
                  <p className="text-muted-foreground">
                    Kompletan asortiman lijekova na recept i bez recepta, vitamina, suplementa i dermatoloških preparata
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Farmaceutsko savjetovanje</h3>
                  <p className="text-muted-foreground">
                    Besplatne konsultacije sa našim farmaceutima o lijekovima, interakcijama i pravilnoj upotrebi
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Online usluge</h3>
                  <p className="text-muted-foreground">
                    Rezervacija lijekova putem web stranice i mogućnost slanja recepta elektronskim putem
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Brza i efikasna usluga</h3>
                  <p className="text-muted-foreground">
                    Brzo izdavanje lijekova na recept i pomoć u pronalaženju najpovoljnijih preparata
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Posjetite nas danas</h2>
              <p className="text-primary-foreground/90">
                Naš tim je tu za vas radnim danima od 08:00 do 20:00, subotom od 08:00 do 16:00
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Link href="/kontakt">
                  <Button size="lg" variant="secondary">
                    Lokacija i kontakt
                  </Button>
                </Link>
                <a href="tel:+38733XXXXXX">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Pozovite nas
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
