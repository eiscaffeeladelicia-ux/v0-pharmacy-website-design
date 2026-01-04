import { createClient } from "@/lib/supabase/server"
import { MedicineCatalog } from "@/components/medicine-catalog"
import { Badge } from "@/components/ui/badge"
import { Pill } from "lucide-react"

export const metadata = {
  title: "Katalog lijekova - APOTEKA LAMELA",
  description: "Pregledajte naš kompletan asortiman lijekova sa detaljnim informacijama i mogućnošću rezervacije.",
}

export default async function KatalogPage() {
  const supabase = await createClient()

  // Fetch medicines and categories
  const [{ data: medicines }, { data: categories }] = await Promise.all([
    supabase.from("medicines").select("*").order("name"),
    supabase.from("categories").select("*").order("name"),
  ])

  return (
    <div className="container py-12">
      {/* Page Header */}
      <div className="mb-10 space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Pill className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-balance">Katalog lijekova</h1>
            <p className="text-muted-foreground">
              Pregledajte naš asortiman od {medicines?.length || 0} dostupnih preparata
            </p>
          </div>
        </div>

        {/* Info badges */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="text-xs">
            Bez recepta - mogućnost rezervacije
          </Badge>
          <Badge variant="outline" className="text-xs">
            Sa receptom - kontaktirajte nas
          </Badge>
        </div>
      </div>

      {/* Medicine Catalog Component */}
      <MedicineCatalog medicines={medicines || []} categories={categories || []} />
    </div>
  )
}
