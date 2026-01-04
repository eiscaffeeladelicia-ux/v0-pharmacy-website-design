"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    id: 1,
    title: "Dobrodošli u Apoteku Lamela",
    subtitle: "Vaše zdravlje je naš prioritet",
    description: "Profesionalna farmaceutska usluga i savjetovanje već od 2020. godine",
    image: "/modern-pharmacy-interior-with-medicine-shelves.jpg",
    cta: "Pogledaj katalog",
    link: "/katalog",
  },
  {
    id: 2,
    title: "Rezerviši lijekove online",
    subtitle: "Brzo i jednostavno",
    description: "Rezerviši lijekove bez recepta direktno sa naše web stranice",
    image: "/person-ordering-medicine-on-tablet.jpg",
    cta: "Započni rezervaciju",
    link: "/katalog",
  },
  {
    id: 3,
    title: "Skeniraj recept",
    subtitle: "Pošalji nam recept elektronski",
    description: "Jednostavno fotografiši i pošalji svoj recept direktno sa mobitela",
    image: "/medical-prescription-on-smartphone.jpg",
    cta: "Pošalji recept",
    link: "/recept",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="container h-full flex items-center">
            <div className="grid md:grid-cols-2 gap-8 items-center w-full">
              {/* Content */}
              <div className="space-y-6 text-center md:text-left">
                <div className="space-y-2">
                  <p className="text-primary font-semibold text-sm md:text-base uppercase tracking-wide">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                    {slide.title}
                  </h1>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-xl mx-auto md:mx-0">
                  {slide.description}
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <Link href={slide.link}>
                    <Button size="lg" className="text-base">
                      {slide.cta}
                    </Button>
                  </Link>
                  <Link href="/kontakt">
                    <Button size="lg" variant="outline" className="text-base bg-transparent">
                      Kontaktiraj nas
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="hidden md:flex items-center justify-center">
                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full shadow-lg transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full shadow-lg transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-primary w-8" : "bg-primary/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
