"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Search, Filter, X } from "lucide-react"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Medicine = {
  id: string
  name: string
  description: string
  category: string
  price: number
  stock_quantity: number
  requires_prescription: boolean
  image_url: string
  manufacturer: string
  dosage: string
}

type Category = {
  id: string
  name: string
  description: string
  icon: string
}

interface MedicineCatalogProps {
  medicines: Medicine[]
  categories: Category[]
}

export function MedicineCatalog({ medicines, categories }: MedicineCatalogProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [prescriptionFilter, setPrescriptionFilter] = useState<string>("all")

  // Filter medicines based on search and filters
  const filteredMedicines = useMemo(() => {
    return medicines.filter((medicine) => {
      const matchesSearch =
        medicine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        medicine.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        medicine.manufacturer?.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = selectedCategory === "all" || medicine.category === selectedCategory

      const matchesPrescription =
        prescriptionFilter === "all" ||
        (prescriptionFilter === "otc" && !medicine.requires_prescription) ||
        (prescriptionFilter === "prescription" && medicine.requires_prescription)

      return matchesSearch && matchesCategory && matchesPrescription
    })
  }, [medicines, searchQuery, selectedCategory, prescriptionFilter])

  const resetFilters = () => {
    setSearchQuery("")
    setSelectedCategory("all")
    setPrescriptionFilter("all")
  }

  const hasActiveFilters = searchQuery !== "" || selectedCategory !== "all" || prescriptionFilter !== "all"

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Pretražite lijekove po nazivu, proizvođaču ili opisu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[250px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Sve kategorije" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Sve kategorije</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.name}>
                  {category.icon} {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Prescription Filter */}
          <Select value={prescriptionFilter} onValueChange={setPrescriptionFilter}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Tip" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Svi lijekovi</SelectItem>
              <SelectItem value="otc">Bez recepta</SelectItem>
              <SelectItem value="prescription">Sa receptom</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Active filters indicator */}
        {hasActiveFilters && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Aktivni filteri:</span>
            <Button variant="ghost" size="sm" onClick={resetFilters}>
              <X className="h-4 w-4 mr-1" />
              Očisti sve
            </Button>
          </div>
        )}
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Prikazano {filteredMedicines.length} od {medicines.length} lijekova
        </p>
      </div>

      {/* Medicine Grid */}
      {filteredMedicines.length === 0 ? (
        <div className="text-center py-12">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted mx-auto mb-4">
            <Search className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Nema rezultata</h3>
          <p className="text-muted-foreground mb-4">Pokušajte promijeniti kriterije pretrage</p>
          <Button onClick={resetFilters}>Poništi filtere</Button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredMedicines.map((medicine) => (
            <Card key={medicine.id} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg bg-muted">
                  <img
                    src={medicine.image_url || "/placeholder.svg?height=200&width=200"}
                    alt={medicine.name}
                    className="h-full w-full object-cover"
                  />
                  {medicine.stock_quantity < 10 && medicine.stock_quantity > 0 && (
                    <Badge className="absolute top-2 right-2 bg-orange-500">Ograničena zaliha</Badge>
                  )}
                  {medicine.stock_quantity === 0 && (
                    <Badge className="absolute top-2 right-2 bg-destructive">Nije dostupno</Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="flex-1 p-4 space-y-3">
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg leading-tight line-clamp-2">{medicine.name}</h3>
                  <p className="text-xs text-muted-foreground">{medicine.manufacturer}</p>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">{medicine.description}</p>

                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    {medicine.category}
                  </Badge>
                  {medicine.requires_prescription ? (
                    <Badge variant="secondary" className="text-xs">
                      Sa receptom
                    </Badge>
                  ) : (
                    <Badge variant="default" className="text-xs bg-green-600">
                      Bez recepta
                    </Badge>
                  )}
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between p-4 pt-0">
                <div className="space-y-0.5">
                  <p className="text-2xl font-bold">{medicine.price.toFixed(2)} KM</p>
                  <p className="text-xs text-muted-foreground">{medicine.dosage}</p>
                </div>
                <Link href={`/katalog/${medicine.id}`}>
                  <Button size="sm">Detalji</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
