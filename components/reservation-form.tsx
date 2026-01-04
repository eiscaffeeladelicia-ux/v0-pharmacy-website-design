"use client"

import type React from "react"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, Loader2, ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"

type Medicine = {
  id: string
  name: string
  price: number
  stock_quantity: number
}

interface ReservationFormProps {
  medicine: Medicine
}

export function ReservationForm({ medicine }: ReservationFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    quantity: 1,
    notes: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const supabase = createClient()

      // Validate stock
      if (formData.quantity > medicine.stock_quantity) {
        throw new Error("Tražena količina premašuje dostupnu zalihu")
      }

      // Create reservation
      const { error: insertError } = await supabase.from("reservations").insert({
        medicine_id: medicine.id,
        customer_name: formData.customer_name,
        customer_email: formData.customer_email,
        customer_phone: formData.customer_phone,
        quantity: formData.quantity,
        notes: formData.notes,
        status: "pending",
      })

      if (insertError) throw insertError

      setSuccess(true)

      // Redirect to success page after 2 seconds
      setTimeout(() => {
        router.push("/rezervacija/uspjesno")
      }, 2000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Došlo je do greške pri rezervaciji")
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <Alert className="border-green-500 bg-green-50 dark:bg-green-950">
        <CheckCircle2 className="h-4 w-4 text-green-600" />
        <AlertDescription className="text-green-800 dark:text-green-200">
          Rezervacija je uspješno kreirana! Preusmjeravanje...
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShoppingCart className="h-5 w-5" />
          Rezerviši lijek
        </CardTitle>
        <CardDescription>Popunite obrazac i rezervišite lijek za preuzimanje u apoteci</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">
              Ime i prezime <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              required
              value={formData.customer_name}
              onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
              placeholder="Vaše puno ime"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">
              Email adresa <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.customer_email}
              onChange={(e) => setFormData({ ...formData, customer_email: e.target.value })}
              placeholder="vas.email@primjer.ba"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">
              Broj telefona <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.customer_phone}
              onChange={(e) => setFormData({ ...formData, customer_phone: e.target.value })}
              placeholder="+387 6X XXX XXX"
            />
          </div>

          {/* Quantity */}
          <div className="space-y-2">
            <Label htmlFor="quantity">
              Količina <span className="text-destructive">*</span>
            </Label>
            <Input
              id="quantity"
              type="number"
              min="1"
              max={medicine.stock_quantity}
              required
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: Number.parseInt(e.target.value) })}
            />
            <p className="text-xs text-muted-foreground">Dostupno: {medicine.stock_quantity} komada</p>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">Napomena (opcionalno)</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Dodatne informacije ili zahtjevi..."
              rows={3}
            />
          </div>

          {/* Total Price */}
          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <span className="font-medium">Ukupna cijena:</span>
            <span className="text-2xl font-bold text-primary">
              {(medicine.price * formData.quantity).toFixed(2)} KM
            </span>
          </div>

          {/* Error Message */}
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Submit Button */}
          <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Rezervacija u toku...
              </>
            ) : (
              "Potvrdi rezervaciju"
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Kontaktirat ćemo vas u najkraćem roku radi potvrde rezervacije
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
