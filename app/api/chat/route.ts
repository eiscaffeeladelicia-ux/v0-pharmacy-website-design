export async function POST(req: Request) {
  console.log("[v0] Chat API route called - NEW VERSION")

  try {
    const { messages }: { messages: Array<{ role: string; content: string }> } = await req.json()
    console.log("[v0] Received", messages.length, "messages")

    const lastMessage = messages[messages.length - 1]?.content.toLowerCase() || ""
    console.log("[v0] User question:", lastMessage)

    let response = ""

    if (
      (lastMessage.includes("dijete") || lastMessage.includes("dete") || lastMessage.includes("godina")) &&
      (lastMessage.includes("paracetamol") || lastMessage.includes("temperatura") || lastMessage.includes("doza"))
    ) {
      response = `**Paracetamol za djecu - Doziranje:**

**VAŽNO:** Doza zavisi od težine djeteta, ne samo od godina!

**Opšte doziranje (oralni sirup 120mg/5ml ili 250mg/5ml):**
- **1-5 godina (10-15kg):** 120-250mg (5-10ml sirupa) svaka 4-6 sati
- **6-12 godina (20-40kg):** 250-500mg (10-20ml sirupa) svaka 4-6 sati
- **MAKSIMALNO:** 4 doze u 24 sata

**Za dijete od 6 godina (oko 20-25kg):**
- Paracetamol sirup 250mg/5ml
- Doza: 5-10ml (250-500mg)
- Svaka 4-6 sati po potrebi
- NIJE VIŠE od 4 puta dnevno

**Važna upozorenja:**
- ✓ Uvijek koristite mjernu kašiku ili špric koji dolazi sa lijekom
- ✓ Ne davajte češće od 4 sata
- ✓ Ako temperatura ne pada za 24h - ljekaru!
- ✓ Ako je dijete mlađe od 3 mjeseca - odmah ljekaru!

**Alternativa za djecu:**
- Brufen sirup za djecu (ibuprofen)
- Konsultujte farmaceuta za tačnu dozu

**Kupite online:**
Paracetamol sirup možete rezervisati: www.apoteka-lamela.ba/katalog

Imate dodatnih pitanja o doziranju? Slobodno pitajte!`
    }
    // Glavobolja
    else if (lastMessage.includes("glavobolja") || lastMessage.includes("glava")) {
      response = `**Savjeti za glavobolju:**

**Lijekovi bez recepta:**
- **Brufen 400mg** (ibuprofen) - uzimati nakon jela
- **Paracetamol 500mg** - bezbedan i efikasan
- **Caffetin** - sa dodatkom kofeina za glavobolju

**Doziranje:**
- Odrasli: 1-2 tablete svaka 6-8 sati
- Ne više od 6 tableta dnevno

**Prirodni lijekovi:**
- Odmarajte se u tihoj, tamnoj prostoriji
- Pijte dovoljno vode (dehidracija može biti uzrok)
- Hladni oblog na čelo ili potiljak
- Izbjegavajte ekrane

**Posjetite ljekara ako:**
- Glavobolja traje duže od 3 dana
- Imate visoku temperaturu (preko 38.5°C)
- Krut vrat ili povraćanje
- Iznenadna, jaka bol

Rezervišite lijekove: www.apoteka-lamela.ba/katalog`
    }
    // Temperatura/Groznica
    else if (
      lastMessage.includes("temperatura") ||
      lastMessage.includes("groznica") ||
      lastMessage.includes("vrućina")
    ) {
      response = `**Snižavanje temperature:**

**Lijekovi bez recepta:**
- **Paracetamol 500mg** - svaka 6 sati
- **Brufen 400mg** (ibuprofen) - svaka 6-8 sati
- **Fervex** - kombinirani lijek

**Doziranje za odrasle:**
- Paracetamol: 500-1000mg svaka 6 sati (max 4g/dan)
- Brufen: 400mg svaka 6-8 sati (max 1200mg/dan)

**Prirodne metode:**
- Pijte mnogo tečnosti (2-3L dnevno)
- Komprese mlakom vodom (ne hladnom!)
- Lagana odjeća
- Provetrite prostoriju

**HITNO posjetite ljekara ako:**
- Temperatura preko 39°C duže od 2 dana
- Otežano disanje
- Bol u grudima
- Konfuzija ili nesvjestica
- Mala djeca ispod 3 godine

Za rezervaciju: www.apoteka-lamela.ba/katalog
Za hitne situacije: Hitna pomoć 124`
    }
    // Kašalj i prehlada
    else if (
      lastMessage.includes("kašalj") ||
      lastMessage.includes("kašalj") ||
      lastMessage.includes("prehlada") ||
      lastMessage.includes("kijavica")
    ) {
      response = `**Lijekovi za kašalj i prehladu:**

**Za suvi kašalj:**
- **Sinecod** sirup/kapsule - suzbija kašalj
- **Stoptussin** - kombinovani preparat

**Za kašalj sa sluzju:**
- **Mucosolvan** - olakšava iskašljavanje
- **ACC** (acetilcistein) - razrjeđuje sluz
- **Herbion** sirup - biljni preparat

**Za prehladu:**
- **Fervex** - kombinacija paracetamola i vitamina C
- **Gripex** - protiv simptoma
- **Vitamin C 1000mg** - jača imunitet

**Prirodni lijekovi:**
- Čaj sa medom i limunom
- Inhalacije sa eukaliptusom
- Propolis kapi ili sprej
- Đumbir čaj

**Savjeti:**
- Pijte 2-3L tečnosti dnevno
- Odmarajte se
- Vlažan vazduh (ovlaživač)
- Izbjegavajte hladnoću

**Ljekaru ako:**
- Kašalj duže od 2 sedmice
- Iskašljavate krv ili zelenu sluz
- Visoka temperatura (38.5°C+)
- Otežano disanje

Rezervacija: www.apoteka-lamela.ba/katalog`
    }
    // Brufen/Ibuprofen
    else if (lastMessage.includes("brufen") || lastMessage.includes("ibuprofen")) {
      response = `**BRUFEN (Ibuprofen) - Kompletan vodič:**

**Namjena:**
- Protiv bolova (glavobolja, zubobolja, menstrualni)
- Protiv upale
- Snižavanje temperature

**Doziranje za odrasle:**
- **400mg** svaka 6-8 sati
- **Maximum:** 1200mg dnevno (3 tablete)
- Uzimati **NAKON jela** sa čašom vode

**Kako pravilno uzimati:**
1. Ne uzimati na prazan želudac
2. Popiti punu čašu vode
3. Ne ložiti se odmah nakon uzimanja
4. Razmak najmanje 6 sati između doza

**Nuspojave:**
- Probavne smetnje, mučnina
- Rijetko: oštećenje želuca (dugotrajno)
- Alergijske reakcije (osip, oticanje)

**NE uzimati ako:**
- Imate čir na želucu
- Teška oštećenja jetre/bubrega
- Trudnoća (posebno zadnji trimestar)
- Alergija na aspirin ili NSAIL

**Interakcije:**
- Ne kombinovati sa aspirinom
- Pažnja sa antikoagulansima (lijekovi za razrjeđivanje krvi)

**Dostupnost:** Brufen 400mg dostupan BEZ recepta
Rezervacija: www.apoteka-lamela.ba/katalog`
    }
    // Stomačne tegobe
    else if (
      lastMessage.includes("stomak") ||
      lastMessage.includes("probava") ||
      lastMessage.includes("nadutost") ||
      lastMessage.includes("mučnina")
    ) {
      response = `**Lijekovi za stomak i probavu:**

**Za žgaravicu:**
- **Gaviscon** - neutralizuje kiselinu
- **Ranital** - smanjuje lučenje kiseline
- **Controloc** (pantoprazol) - SA receptom

**Za nadutost:**
- **Espumisan** (simetikon) - razbija gasove
- **Pancef** - pomoć pri probavi
- **Aktivni ugalj** - apsorbuje gasove

**Za mučninu:**
- **Cerucal** - SA receptom
- **Đumbir čaj** - prirodno
- **Reglan** - SA receptom

**Za probavne smetnje:**
- **Mezym Forte** - enzimi za varenje
- **Laktaza** - ako je problem laktoza
- **Probiotici** - obnavljaju crijevnu floru

**Dijetetski savjeti:**
- Jedite manje, ali češće obroke
- Izbjegavajte masnu i ljutu hranu
- Ne ložite se odmah nakon jela
- Smanjite kafu i alkohol

**Prirodni lijekovi:**
- Kamilica čaj
- Nana čaj
- Anis čaj

**LJEKARU ako:**
- Jaka bol u stomaku
- Krvarenje (crna stolica, krv u povraćanju)
- Gubitak težine bez razloga
- Simptomi duže od 7 dana

Rezervišite: www.apoteka-lamela.ba/katalog`
    }
    // Alergije
    else if (lastMessage.includes("alergija") || lastMessage.includes("svrab") || lastMessage.includes("osip")) {
      response = `**Lijekovi za alergije:**

**Antihistaminici (BEZ recepta):**
- **Claritine** (loratadin) - 10mg, 1x dnevno, bez pospanosti
- **Zodac** (cetirizin) - 10mg, 1x dnevno
- **Xyzal** (levocetirizin) - 5mg, jači efekat

**Za kožne alergije:**
- **Fenistil gel** - lokalno na osip
- **Hidrokortison krema 1%** - protiv svraba
- **Kalamin losion** - prirodni, umirujući

**Za nos (sezonske alergije):**
- **Nasivin Allergy** sprej
- **Allergodil** nazalni sprej - SA receptom

**Doziranje antihistaminika:**
- Odrasli: 1 tableta dnevno
- Djeca 6-12 godina: pola doze (konsultujte farmaceuta)

**Hitno ljekaru/hitnu ako:**
- Otežano disanje ili gušenje
- Oticanje lica, usana, jezika
- Ubrzani puls, vrtoglavica
- Jaka kožna reakcija sa mehurićima

**Prevencija:**
- Identifikujte alergen (polen, prašina, hrana)
- Izbjegavajte poznate alergene
- Koristite hipoalergenske proizvode
- Čistite dom redovno

**Dijagnoza:**
- Alergološko testiranje kod ljekara
- Vodite dnevnik simptoma

Rezervacija: www.apoteka-lamela.ba/katalog
Hitna: 124 ili +387 33 611 380 (Toksikološki centar)`
    }
    // Recept
    else if (lastMessage.includes("recept") || lastMessage.includes("recepta")) {
      response = `**Sistem za lijekove na recept:**

**Kako funkcioniše:**

**Korak 1 - Dobijte recept:**
- Posjetite ljekara
- Dobijete papirni ili e-recept

**Korak 2 - Pošaljite nam recept online:**
- Idite na: **www.apoteka-lamela.ba/recept**
- Fotografišite ili skenirajte recept
- Upload-ujte sliku (JPG, PNG do 10MB)
- Unesite kontakt podatke

**Korak 3 - Mi vas kontaktiramo:**
- Provjeravamo dostupnost lijeka
- Zovemo vas za potvrdu (obično za 1-2 sata)
- Pripremi mo lijek za preuzimanje

**Korak 4 - Preuzmite:**
- Dođite u apoteku sa ORIGINALNIM receptom
- Lokacija: Branilaca Šipa 4, Sarajevo
- Rok čuvanja: 7 dana

**Lijekovi bez recepta:**
Možete direktno rezervisati na: **www.apoteka-lamela.ba/katalog**

**Zašto neki lijekovi trebaju recept:**
- Jači lijekovi sa ozbiljnim nuspojavama
- Antibiotici (sprečavanje rezistencije)
- Lijekovi za hronične bolesti
- Kontrolisane supstance (psihotropni)

**E-recept:**
- Ako imate e-recept, možete doći direktno
- Ili pošaljite screenshot/broj recepta online

**Kontakt:**
- Telefon: +387 33 XXX XXX
- Email: info@apoteka-lamela.ba

Imate dodatnih pitanja? Slobodno pitajte!`
    }
    // Rezervacija
    else if (
      lastMessage.includes("rezervacija") ||
      lastMessage.includes("rezervisati") ||
      lastMessage.includes("naručiti")
    ) {
      response = `**Online rezervacija lijekova - APOTEKA LAMELA:**

**Za lijekove BEZ recepta:**

**Korak 1:** Idite na katalog
- www.apoteka-lamela.ba/katalog

**Korak 2:** Pretražite lijek
- Koristite pretragu ili filtere
- Provjerite dostupnost i cijenu

**Korak 3:** Kliknite "Rezerviši"
- Popunite kontakt podatke
- Ime, prezime, telefon

**Korak 4:** Mi vas kontaktiramo
- Potvrđujemo rezervaciju (SMS ili poziv)
- Lijek spremamo za vas

**Korak 5:** Preuzmite u apoteci
- Adresa: Branilaca Šipa 4, Sarajevo
- Radno vrijeme: Pon-Pet 08:00-20:00, Sub 08:00-15:00
- Rok čuvanja: 7 dana

**Za lijekove SA receptom:**
- Idite na: www.apoteka-lamela.ba/recept
- Upload-ujte fotografiju recepta
- Mi ćemo provjeriti dostupnost

**Prednosti online rezervacije:**
- Garantovana dostupnost
- Bez čekanja u redu
- Brza obrada
- SMS/email potvrda

**Plaćanje:**
- Pri preuzimanju u apoteci
- Gotovina ili kartica

**Dostava:**
- Moguća dostava na kućnu adresu (Sarajevo)
- Kontaktirajte nas za detalje

**Kontakt za pitanja:**
- Telefon: +387 33 XXX XXX
- Email: info@apoteka-lamela.ba

Imate dodatnih pitanja o rezervaciji?`
    }
    // Kako uzimati lijekove
    else if (
      lastMessage.includes("kako uzimati") ||
      lastMessage.includes("doziranje") ||
      lastMessage.includes("koliko puta")
    ) {
      response = `**Opšta uputstva za uzimanje lijekova:**

**Vrijeme uzimanja:**

**"Prije jela"** = 30-60 minuta prije obroka
- Bolja apsorpcija lijeka
- Primjer: neki antibiotici, lijekovi za želudac

**"Nakon jela"** = 15-30 minuta nakon obroka
- Štiti želudac od iritacije
- Primjer: Brufen, Aspirin, neke vitamine

**"Tokom jela"** = U toku obroka
- Smanjuje nuspojave
- Primjer: neki antibiotici, metformin

**"Natašte"** = Na prazan želudac (ujutru prije doručka)
- Maximum apsorpcije
- Čekati 30-60min prije jela

**Sa ili bez vode:**
- Tablete/kapsule: UVIJEK sa punom čašom vode (200ml)
- Sirup: prema uputstvu
- Kapi: mogu se razblažiti u vodi
- Šumeće tablete: potpuno rastvoriti u vodi

**Važna pravila:**
1. ✓ Pročitajte uputstvo PRIJE prve upotrebe
2. ✓ Poštujte propisane doze
3. ✓ Uzimajte u isto vrijeme svakog dana
4. ✓ Ne prekidajte terapiju bez ljekara
5. ✓ Ne dijelite lijekove sa drugima
6. ✓ Čuvajte dalje od djece

**Čuvanje lijekova:**
- Sobna temperatura (15-25°C)
- Zaštićeno od svjetla
- Suvo mjesto
- Provjeravajte rok trajanja

**Ako zaboravite dozu:**
- Ako je prošlo manje od 2 sata → uzmite odmah
- Ako je blizu sljedeće doze → preskočite
- **NIKAD nemojte udvostručiti dozu!**

**Interakcije:**
- Neki lijekovi se ne smiju kombinovati
- Inform išite farmaceuta o SVIM lijekovima koje uzimate
- Uključujući biljne preparate i suplemente

Za specifičan lijek, recite mi naziv i daću vam detaljne informacije!`
    }
    // Nuspojave
    else if (lastMessage.includes("nuspojave") || lastMessage.includes("nuspojava")) {
      response = `**Nuspojave lijekova - Kompletan vodič:**

**Česte blage nuspojave:**
- Mučnina, nadutost
- Blaga glavobolja
- Pospanost ili nesanica
- Suva usta
- Blaga vrtoglavica

**Što učiniti:**
- Često prolaze za 2-3 dana (tijelo se prilagođava)
- Nastavite sa terapijom osim ako ljekar ne kaže drugačije
- Uzimajte lijek sa hranom (ako dozvoljeno)
- Pijte dovoljno vode

**Ozbiljne nuspojave - HITNO ljekaru:**
- Alergijska reakcija (osip, oticanje, svrab)
- Otežano disanje
- Oticanje lica, usana ili jezika
- Jaka bol u stomaku ili grudima
- Nesvjestica ili jaka vrtoglavica
- Promjene u srčanom ritmu
- Krvarenje (krv u stolici, krvavljen je nosa)

**Kako smanjiti rizik nuspojava:**
1. Informišite ljekara o:
   - Alergiј ama
   - Drugim lijekovima koje uzimate
   - Trudnoći ili dojenju
   - Hroničnim bolestima

2. Poštujte doziranje
3. Ne kombinujte sa alkoholom
4. Pročitajte uputstvo

**Prijavljivanje nuspojava:**
- Agenciji za lijekove BiH
- Vašem ljekaru ili farmaceutu
- Pomaže u poboljšanju sigurnosti

**Česte nuspojave po grupi lijekova:**

**Antibiotici:**
- Dijareja, mučnina
- Kandidijaza (gljivična infekcija)

**Lijekovi za pritisak:**
- Vrtoglavica, umor
- Suvi kašalj (ACE inhibitori)

**Antidepresivi:**
- Mučnina, glavobolja
- Promjene u apetitu

**NSAIL (Brufen, Aspirin):**
- Iritacija želuca
- Povećan rizik od čira

Za specifičan lijek, recite mi naziv i daću detaljnije informacije o nuspojavama!`
    }
    // Default/Welcome
    else {
      response = `Zdravo! Ja sam **AI Medicinski Asistent APOTEKA LAMELA**. 

Mogu vam pomoći sa:

**Simptomi i savjeti:**
- Glavobolja, temperatura, groznica
- Kašalj, prehlada, curenje nosa
- Stomačne tegobe, probavne smetnje
- Alergije, kožni osip

**Informacije o lijekovima:**
- Kako pravilno uzimati lijekove
- Doziranje i učestalost
- Nuspojave i kontraindikacije
- Interakcije sa drugim lijekovima

**Online usluge:**
- Rezervacija lijekova bez recepta
- Upload recepta za lijekove na recept
- Provjera dostupnosti lijekova

**Primjeri pitanja:**
- "Imam glavobolju i temperaturu, šta da radim?"
- "Kako pravilno uzimati Brufen?"
- "Dijete od 6 godina ima temperaturu, koja je doza paracetamola?"
- "Šta je dobro za kašalj i prehladu?"
- "Kako mogu rezervisati lijek?"

**VAŽNO UPOZORENJE:**
Moji savjeti su opšti i informativnog karaktera. **NE zamjenjuju** pregled i dijagnozu ljekara. Za ozbiljne zdravstvene probleme, obavezno posjetite ljekara.

**Hitni kontakti:**
- Hitna pomoć: **124**
- Toksikološki centar: **+387 33 611 380**
- Apoteka LAMELA: **+387 33 XXX XXX**

Šta vas zanima? Slobodno postavite pitanje!`
    }

    console.log("[v0] Generated response, length:", response.length)

    // Create streaming response
    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      start(controller) {
        const words = response.split(" ")
        let index = 0

        const interval = setInterval(() => {
          if (index < words.length) {
            const chunk = index === 0 ? words[index] : " " + words[index]
            controller.enqueue(encoder.encode(`0:${JSON.stringify({ text: chunk })}\n`))
            index++
          } else {
            clearInterval(interval)
            controller.enqueue(encoder.encode(`e:${JSON.stringify({ finishReason: "stop" })}\n`))
            controller.close()
            console.log("[v0] Stream completed successfully")
          }
        }, 25)
      },
    })

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Vercel-AI-Data-Stream": "v1",
      },
    })
  } catch (error) {
    console.error("[v0] ERROR in chat API:", error)
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}
