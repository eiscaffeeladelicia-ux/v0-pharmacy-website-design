import { PrescriptionUploadForm } from "@/components/prescription-upload-form"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Camera, Clock, ShieldCheck } from "lucide-react"

export const metadata = {
  title: "Pošalji recept - APOTEKA LAMELA",
  description: "Fotografišite i pošaljite nam recept elektronski. Pripremit ćemo vaše lijekove za preuzimanje.",
}

export default function PrescriptionPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="text-center space-y-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-balance">Pošalji recept</h1>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Fotografišite vaš ljekarski recept i pošaljite nam ga elektronski. Pripremit ćemo lijekove i kontaktirati
            vas kada budu spremni za preuzimanje.
          </p>
        </div>

        {/* How it works */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">1. Fotografišite recept</h3>
                <p className="text-sm text-muted-foreground">
                  Napravite jasnu fotografiju vašeg recepta mobilnim telefonom ili skenerom
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">2. Popunite podatke</h3>
                <p className="text-sm text-muted-foreground">
                  Unesite svoje kontakt podatke kako bismo vas mogli obavijestiti
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">3. Preuzmite lijekove</h3>
                <p className="text-sm text-muted-foreground">
                  Kontaktirat ćemo vas kada lijekovi budu spremni za preuzimanje
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upload Form */}
        <PrescriptionUploadForm />

        {/* Privacy Notice */}
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div className="space-y-2">
                <h3 className="font-semibold">Privatnost i sigurnost</h3>
                <p className="text-sm text-muted-foreground">
                  Vaši medicinski podaci su u potpunosti zaštićeni i koriste se isključivo za pripremu vaših lijekova.
                  Svi podaci se čuvaju u skladu sa propisima o zaštiti ličnih podataka.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
