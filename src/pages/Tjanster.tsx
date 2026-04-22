import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

const services = [
  {
    title: "Hemstädning",
    desc: "Återkommande städning anpassad efter din vardag — varje vecka eller varannan.",
    points: ["Damning av ytor och möbler", "Dammsugning och våttorkning", "Köks- och badrumsstädning", "Sopor och återvinning"],
  },
  {
    title: "Flyttstädning",
    desc: "Noggrann städning vid flytt — godkänd av besiktningsman eller vi städar om.",
    points: ["Fönsterputs in- och utsida", "Vitvaror in- och utvändigt", "Garderober och förvaring", "Trösklar, lister och dörrar"],
  },
  {
    title: "Kontorsstädning",
    desc: "Diskret och regelbunden städning för företag i Malmö med omnejd.",
    points: ["Skrivbord och konferensrum", "Pentry och toaletter", "Soptömning och påfyllnad", "Flexibla tider — även kvällar"],
  },
];

export default function Tjanster() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Tjänster — Hemstädning, Flyttstädning & Kontorsstädning i Malmö | StädMalmö</title>
        <meta name="description" content="Upptäck våra städtjänster i Malmö: hemstädning, flyttstädning och kontorsstädning. Försäkrade städare, RUT-avdrag och kvalitetsgaranti." />
        <link rel="canonical" href="https://stadmalmo.se/tjanster" />
        <meta property="og:title" content="Städtjänster i Malmö — StädMalmö" />
        <meta property="og:description" content="Hemstädning, flyttstädning och kontorsstädning med kvalitetsgaranti." />
      </Helmet>
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-4xl px-6 pt-20 pb-12 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Tjänster</span>
          <h1 className="mt-4 text-4xl md:text-5xl text-foreground">Städning som gör skillnad</h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Vi erbjuder ett komplett utbud av städtjänster för hem och företag i Malmö.
            Alla tjänster utförs av försäkrade städare med kvalitetsgaranti.
          </p>
        </section>
        <section className="mx-auto max-w-6xl px-6 pb-20 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-display text-2xl text-foreground">{s.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2 text-foreground/80">
                    <span className="text-primary mt-1">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
        <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
          <Link to="/kontakt" className="inline-flex items-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            Få offert inom 24h
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}