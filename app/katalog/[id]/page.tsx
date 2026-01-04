import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Package, AlertCircle, FileText } from "lucide-react"
import Link from "next/link"
import { ReservationForm } from "@/components/reservation-form"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const { data: medicine } = await supabase.from("medicines").select("*").eq("id", id).single()

  if (!medicine) {
    return {
      title: "Lijek nije pronađen - APOTEKA LAMELA",
    }
  }

  return {
    title: `${medicine.name} - APOTEKA LAMELA`,
    description: medicine.description,
  }
}

export default async function MedicineDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const { data: medicine } = await supabase.from("medicines").select("*").eq("id", id).single()

  if (!medicine) {
    notFound()
  }

  return (
    <div className="container py-12">
      {/* Back Button */}
      <Link href="/katalog">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Nazad na katalog
        </Button>
      </Link>

      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        {/* Image Section */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border bg-muted">
            <img
              src={medicine.image_url || "/placeholder.svg?height=600&width=600"}
              alt={medicine.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Stock Alert */}
          {medicine.stock_quantity === 0 && (
            <Card className="border-destructive">
              <CardContent className="flex items-center gap-3 p-4">
                <AlertCircle className="h-5 w-5 text-destructive shrink-0" />
                <p className="text-sm font-medium">Trenutno nije dostupno. Kontaktirajte nas za informacije.</p>
              </CardContent>
            </Card>
          )}

          {medicine.stock_quantity > 0 && medicine.stock_quantity < 10 && (
            <Card className="border-orange-500">
              <CardContent className="flex items-center gap-3 p-4">
                <Package className="h-5 w-5 text-orange-500 shrink-0" />
                <p className="text-sm font-medium">Ograničena zaliha - samo {medicine.stock_quantity} komada</p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          {/* Header */}
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{medicine.category}</Badge>
              {medicine.requires_prescription ? (
                <Badge variant="secondary">Sa receptom</Badge>
              ) : (
                <Badge className="bg-green-600">Bez recepta</Badge>
              )}
            </div>

            <h1 className="text-4xl font-bold text-balance">{medicine.name}</h1>
            <p className="text-lg text-muted-foreground">{medicine.manufacturer}</p>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-primary">{medicine.price.toFixed(2)} KM</span>
            <span className="text-muted-foreground">/ {medicine.dosage}</span>
          </div>

          <Separator />

          {/* Description */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Opis</h2>
            <p className="text-muted-foreground leading-relaxed">{medicine.description}</p>
          </div>

          {/* Details */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Detalji</h2>
            <div className="grid gap-3">
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Proizvođač:</span>
                <span className="font-medium">{medicine.manufacturer}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Doziranje:</span>
                <span className="font-medium">{medicine.dosage}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Kategorija:</span>
                <span className="font-medium">{medicine.category}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Recept:</span>
                <span className="font-medium">{medicine.requires_prescription ? "Potreban" : "Nije potreban"}</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Action Section */}
          {medicine.requires_prescription ? (
            <Card className="bg-muted/50">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div className="space-y-2">
                    <h3 className="font-semibold">Potreban recept</h3>
                    <p className="text-sm text-muted-foreground">
                      Ovaj lijek zahtijeva ljekarski recept. Možete nam poslati recept elektronski ili donijeti u
                      apoteku.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/recept" className="flex-1">
                    <Button className="w-full">Pošalji recept</Button>
                  </Link>
                  <Link href="/kontakt" className="flex-1">
                    <Button variant="outline" className="w-full bg-transparent">
                      Kontaktiraj nas
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ) : (
            <ReservationForm medicine={medicine} />
          )}
        </div>
      </div>
    </div>
  )
}
