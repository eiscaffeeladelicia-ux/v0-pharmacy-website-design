"use client"

import type React from "react"

import { useState, useRef } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Upload, X, Loader2, CheckCircle2, FileImage } from "lucide-react"
import { useRouter } from "next/navigation"

export function PrescriptionUploadForm() {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    notes: "",
  })

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setError("Molimo odaberite sliku (JPG, PNG, ili PDF)")
      return
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError("Slika ne smije biti veća od 10MB")
      return
    }

    setSelectedFile(file)
    setError(null)

    // Create preview
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  const removeFile = () => {
    setSelectedFile(null)
    setPreviewUrl(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      if (!selectedFile) {
        throw new Error("Molimo odaberite sliku recepta")
      }

      const supabase = createClient()

      // Upload image to a simple base64 storage (in production, use proper storage like Vercel Blob)
      const reader = new FileReader()
      reader.readAsDataURL(selectedFile)

      await new Promise((resolve, reject) => {
        reader.onload = async () => {
          try {
            const base64Image = reader.result as string

            // Store prescription with image data
            const { error: insertError } = await supabase.from("prescriptions").insert({
              customer_name: formData.customer_name,
              customer_email: formData.customer_email,
              customer_phone: formData.customer_phone,
              notes: formData.notes,
              prescription_image_url: base64Image, // In production, upload to blob storage
              status: "pending",
            })

            if (insertError) throw insertError

            setSuccess(true)

            // Redirect to success page after 2 seconds
            setTimeout(() => {
              router.push("/recept/uspjesno")
            }, 2000)

            resolve(true)
          } catch (err) {
            reject(err)
          }
        }
        reader.onerror = () => reject(new Error("Greška pri čitanju slike"))
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : "Došlo je do greške pri slanju recepta")
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <Alert className="border-green-500 bg-green-50 dark:bg-green-950">
        <CheckCircle2 className="h-4 w-4 text-green-600" />
        <AlertDescription className="text-green-800 dark:text-green-200">
          Recept je uspješno poslat! Preusmjeravanje...
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pošalji svoj recept</CardTitle>
        <CardDescription>Popunite sve podatke i priložite sliku recepta</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* File Upload */}
          <div className="space-y-2">
            <Label>
              Slika recepta <span className="text-destructive">*</span>
            </Label>
            <div className="space-y-4">
              {!previewUrl ? (
                <div
                  className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Upload className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Kliknite za odabir slike</p>
                      <p className="text-sm text-muted-foreground">ili povucite sliku ovdje</p>
                    </div>
                    <p className="text-xs text-muted-foreground">JPG, PNG ili PDF (maks. 10MB)</p>
                  </div>
                </div>
              ) : (
                <div className="relative border rounded-lg p-4">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={removeFile}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  <div className="flex items-start gap-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded bg-muted shrink-0">
                      <FileImage className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{selectedFile?.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {selectedFile && (selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                      <img
                        src={previewUrl || "/placeholder.svg"}
                        alt="Preview"
                        className="mt-2 max-h-40 rounded border"
                      />
                    </div>
                  </div>
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,.pdf"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>
          </div>

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

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">Dodatne napomene (opcionalno)</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Posebni zahtjevi, alergije, ili druge informacije..."
              rows={3}
            />
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
                Slanje u toku...
              </>
            ) : (
              "Pošalji recept"
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Kontaktirat ćemo vas u najkraćem roku nakon pregleda recepta
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
