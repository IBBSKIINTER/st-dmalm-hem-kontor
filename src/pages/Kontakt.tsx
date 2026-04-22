import { Helmet } from "react-helmet-async";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export default function Kontakt() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Kontakt — Boka städning i Malmö | StädMalmö</title>
        <meta name="description" content="Kontakta StädMalmö för offert eller bokning. Vi svarar inom 24 timmar — ring 040-123 45 67 eller skicka ett meddelande." />
        <link rel="canonical" href="https://stadmalmo.se/kontakt" />
        <meta property="og:title" content="Kontakta StädMalmö" />
        <meta property="og:description" content="Boka hem-, flytt- eller kontorsstädning i Malmö. Offert inom 24h." />
      </Helmet>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 pt-20 pb-24">
        <span className="text-xs uppercase tracking-[0.2em] text-primary">Kontakt</span>
        <h1 className="mt-4 text-4xl md:text-5xl">Hör av dig</h1>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          Berätta vad du behöver hjälp med så återkommer vi inom 24 timmar med en offert.
        </p>

        <form
          className="mt-10 grid gap-5"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Tack! Vi återkommer inom 24 timmar.");
          }}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-medium">Namn</span>
              <input required className="rounded-lg border border-input bg-card px-4 py-3 text-sm focus:border-ring focus:outline-none" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium">E-post</span>
              <input required type="email" className="rounded-lg border border-input bg-card px-4 py-3 text-sm focus:border-ring focus:outline-none" />
            </label>
          </div>
          <label className="grid gap-2">
            <span className="text-sm font-medium">Telefon</span>
            <input type="tel" className="rounded-lg border border-input bg-card px-4 py-3 text-sm focus:border-ring focus:outline-none" />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-medium">Vad kan vi hjälpa till med?</span>
            <textarea rows={5} className="rounded-lg border border-input bg-card px-4 py-3 text-sm focus:border-ring focus:outline-none resize-none" />
          </label>
          <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            Skicka förfrågan
          </button>
        </form>

        <div className="mt-14 grid gap-6 md:grid-cols-3 text-sm">
          <div>
            <h2 className="font-display text-base">Telefon</h2>
            <p className="text-muted-foreground mt-1">040 — 123 45 67</p>
          </div>
          <div>
            <h2 className="font-display text-base">E-post</h2>
            <p className="text-muted-foreground mt-1">hej@stadmalmo.se</p>
          </div>
          <div>
            <h2 className="font-display text-base">Adress</h2>
            <p className="text-muted-foreground mt-1">Stortorget 1, Malmö</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}