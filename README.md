# APOTEKA LAMELA - Moderna Web Stranica Apoteke

*Automatski sinhronizovano sa [v0.app](https://v0.app) deployment-ima*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/eiscaffeeladelicia-7680s-projects/v0-pharmacy-website-design)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/tehKvBNyspj)

## 📋 Pregled Projekta

Kompletna web stranica za **APOTEKA LAMELA** u Sarajevu sa sledećim funkcionalnostima:

- 🏥 **Katalog Lijekova** - Pretraga i filtriranje dostupnih lijekova
- 📱 **Online Rezervacije** - Rezervacija lijekova bez recepta
- 📄 **Upload Recepta** - Slanje recepta za lijekove koji zahtijevaju recept
- 🤖 **AI Medicinski Asistent** - Savjeti o simptomima i upotrebi lijekova
- 🗺️ **Google Maps** - Lokacija apoteke i kontakt informacije
- 💾 **Supabase Baza** - Moderna PostgreSQL baza sa RLS security

## 🚀 Deployment

Vaš projekat je live na:

**[https://vercel.com/eiscaffeeladelicia-7680s-projects/v0-pharmacy-website-design](https://vercel.com/eiscaffeeladelicia-7680s-projects/v0-pharmacy-website-design)**

## 🛠️ Lokalna Instalacija

### Preduslovi
- Node.js 18+ 
- npm ili pnpm
- Supabase nalog

### Koraci

1. **Klonirajte repozitorijum:**
```bash
git clone https://github.com/vaš-username/v0-pharmacy-website-design.git
cd v0-pharmacy-website-design
```

2. **Instalirajte dependencies:**
```bash
npm install
# ili
pnpm install
```

3. **Podesite environment variables:**
Kreirajte `.env.local` fajl u root direktorijumu:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

4. **Pokrenite SQL skripte u Supabase:**
- Idite na Supabase Dashboard → SQL Editor
- Kopirajte i izvršite `scripts/001_create_pharmacy_tables.sql`
- Kopirajte i izvršite `scripts/002_seed_pharmacy_data.sql`

5. **Pokrenite development server:**
```bash
npm run dev
# ili
pnpm dev
```

Otvorite [http://localhost:3000](http://localhost:3000) u browseru.

## 📁 Struktura Projekta

```
apoteka-lamela/
├── app/                          # Next.js 16 App Router
│   ├── ai-asistent/             # AI chat asistent stranica
│   ├── api/chat/                # API endpoint za chat
│   ├── katalog/                 # Katalog lijekova
│   ├── recept/                  # Upload recepta
│   ├── kontakt/                 # Kontakt i mapa
│   └── page.tsx                 # Početna stranica
├── components/                   # React komponente
│   ├── header.tsx               # Navigacija
│   ├── footer.tsx               # Footer
│   ├── hero-slider.tsx          # Hero slider
│   ├── medicine-catalog.tsx     # Katalog komponenta
│   └── ui/                      # shadcn/ui komponente
├── lib/
│   └── supabase/                # Supabase klijenti
├── scripts/                      # SQL skripte za bazu
└── public/                       # Statički fajlovi
```

## 🗄️ Database Schema

### Tabele:
- **medicines** - Podaci o lijekovima (naziv, cijena, stock, recept potreban)
- **categories** - Kategorije lijekova
- **reservations** - Korisničke rezervacije
- **prescriptions** - Upload-ovani recepti

## 🎨 Tehnologije

- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui + Radix UI
- **Database:** Supabase (PostgreSQL)
- **Deployment:** Vercel
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod

## 📝 Informacije o Apoteci

**Naziv:** APOTEKA LAMELA  
**Adresa:** Branilaca Šipa 4, Sarajevo  
**Broj rješenja:** 05-19-21583/20  
**Datum:** 28.07.2020  

## 🔧 Postavke u Lovable.dev

Za import u Lovable:

1. Kliknite **"New Project"**
2. Izaberite **"Import from GitHub"**
3. Autentifikujte se i izaberite ovaj repozitorijum
4. U Lovable Settings dodajte environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 🤝 Kako Radi

1. Kreirajte i modifikujte projekat koristeći [v0.app](https://v0.app)
2. Deploy chat-ove iz v0 interfejsa
3. Izmjene se automatski push-uju u ovaj repozitorijum
4. Vercel deploy-uje najnoviju verziju iz repozitorijuma
5. Importujte u Lovable.dev za dalje izmjene

## 📞 Podrška

Za pitanja ili pomoć posjetite:
- [v0 Chat](https://v0.app/chat/tehKvBNyspj)
- [Vercel Documentation](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)

---

**Built with ❤️ using v0.app by Vercel**
