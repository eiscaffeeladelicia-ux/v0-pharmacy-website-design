"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, Bot, Send, User, Loader2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
}

export default function AIAsistentPage() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    console.log("[v0] Submitting message:", input)
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      console.log("[v0] Calling API at /api/chat")
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      console.log("[v0] Response status:", response.status)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()

      if (!reader) {
        throw new Error("No reader available")
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "",
      }

      setMessages((prev) => [...prev, assistantMessage])

      while (true) {
        const { done, value } = await reader.read()
        if (done) {
          console.log("[v0] Stream complete")
          break
        }

        const chunk = decoder.decode(value)
        console.log("[v0] Received chunk:", chunk)
        const lines = chunk.split("\n").filter((line) => line.trim())

        for (const line of lines) {
          if (line.startsWith("0:")) {
            try {
              const data = JSON.parse(line.substring(2))
              if (data.text) {
                assistantMessage.content += data.text
                setMessages((prev) => {
                  const newMessages = [...prev]
                  newMessages[newMessages.length - 1] = { ...assistantMessage }
                  return newMessages
                })
              }
            } catch (e) {
              console.error("[v0] Error parsing line:", e)
            }
          }
        }
      }
    } catch (error) {
      console.error("[v0] Error in chat:", error)
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content: "Izvinjavam se, došlo je do greške. Molim vas pokušajte ponovo ili nas kontaktirajte telefonom.",
        },
      ])
    } finally {
      setIsLoading(false)
      console.log("[v0] Request complete")
    }
  }

  return (
    <div className="container py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-balance mb-4">AI Medicinski Asistent</h1>
        <p className="text-lg text-muted-foreground text-pretty">
          Dobrodošli u naš AI asistent servis. Postavite pitanja o simptomima, upotrebi lijekova ili opštim zdravstvenim
          savjetima.
        </p>
      </div>

      <Alert className="mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          <strong>Važno:</strong> Ovaj AI asistent pruža opšte informacije i ne zamjenjuje profesionalnu medicinsku
          dijagnozu. Za ozbiljne zdravstvene probleme, molimo posjetite ljekara ili kontaktirajte hitnu pomoć.
        </AlertDescription>
      </Alert>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Chat sa AI asistentom</CardTitle>
          <CardDescription>Započnite razgovor postavljanjem pitanja o vašim simptomima ili lijekovima</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {/* Messages area */}
            <div className="min-h-[400px] max-h-[600px] overflow-y-auto border rounded-lg p-4 bg-muted/10">
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                  <Bot className="h-12 w-12 mb-4 text-primary" />
                  <p className="text-lg font-medium mb-2">Kako vam mogu pomoći danas?</p>
                  <p className="text-sm">Slobodno postavite pitanje o simptomima ili lijekovima</p>

                  <div className="mt-6 grid gap-2 text-left w-full max-w-md">
                    <p className="text-sm font-medium">Primjeri pitanja:</p>
                    <button
                      onClick={() => setInput("Imam glavobolju i temperaturu, šta da radim?")}
                      className="text-left text-sm p-2 rounded border hover:bg-muted transition-colors"
                    >
                      "Imam glavobolju i temperaturu, šta da radim?"
                    </button>
                    <button
                      onClick={() => setInput("Kako pravilno uzimati Brufen?")}
                      className="text-left text-sm p-2 rounded border hover:bg-muted transition-colors"
                    >
                      "Kako pravilno uzimati Brufen?"
                    </button>
                    <button
                      onClick={() => setInput("Šta je dobro za kašalj i prehladu?")}
                      className="text-left text-sm p-2 rounded border hover:bg-muted transition-colors"
                    >
                      "Šta je dobro za kašalj i prehladu?"
                    </button>
                  </div>
                </div>
              )}

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 mb-4 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "assistant" && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
                      <Bot className="h-4 w-4 text-primary-foreground" />
                    </div>
                  )}

                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    <p className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</p>
                  </div>

                  {message.role === "user" && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                      <User className="h-4 w-4" />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3 mb-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Bot className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="rounded-lg px-4 py-2 bg-muted">
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
                </div>
              )}
            </div>

            {/* Input form */}
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Upišite vaše pitanje ovdje..."
                className="min-h-[60px] resize-none"
                disabled={isLoading}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSubmit(e)
                  }
                }}
              />
              <Button type="submit" size="icon" className="h-[60px] w-[60px]" disabled={!input.trim() || isLoading}>
                {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
              </Button>
            </form>
            <p className="text-xs text-muted-foreground text-center">
              Pritisnite Enter za slanje, Shift+Enter za novi red
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Hitni kontakti</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="mb-2">
              <strong>Hitna pomoć:</strong> 124
            </p>
            <p className="mb-2">
              <strong>Apoteka:</strong> +387 33 XXX XXX
            </p>
            <p>
              <strong>Toksikološki centar:</strong> +387 33 611 380
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Radno vrijeme</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="mb-2">Ponedeljak - Petak: 08:00 - 20:00</p>
            <p className="mb-2">Subota: 08:00 - 15:00</p>
            <p>Nedjelja: Zatvoreno</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Usluge</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <ul className="list-disc list-inside space-y-1">
              <li>Mjerenje pritiska</li>
              <li>Savjetovanje farmaceuta</li>
              <li>Rezervacija lijekova</li>
              <li>Dostava na kućnu adresu</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
