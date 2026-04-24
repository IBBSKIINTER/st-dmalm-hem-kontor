import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import heroImage from "@/assets/hero-clean-home.jpg";

const features = [
  { title: "Tryggt", desc: "Försäkrade och bakgrundskontrollerade städare i varje hem." },
  { title: "Kvalitet", desc: "Kvalitetsgaranti — vi städar om kostnadsfritt om du inte är nöjd." },
  { title: "Flexibelt", desc: "Anpassat efter din vardag, med RUT-avdrag direkt på fakturan." },
];

const services = [
  { title: "Hemstädning", desc: "Återkommande städning som ger dig mer tid över." },
  { title: "Flyttstädning", desc: "Noggrann städning godkänd av besiktningsman." },
  { title: "Kontorsstädning", desc: "Diskret, regelbunden städning för företag." },
];

const steps = [
  { n: "01", title: "Boka", desc: "Beskriv ditt behov online — det tar två minuter." },
  { n: "02", title: "Vi städar", desc: "Vårt team kommer på avtalad tid med allt material." },
  { n: "03", title: "Njut", desc: "Kom hem till ett rent, fräscht och välkomnande hem." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "StädMalmö",
  telephone: "+46-40-1234567",
  email: "hej@stadmalmo.se",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Stortorget 1",
    addressLocality: "Malmö",
    postalCode: "211 22",
    addressCountry: "SE",
  },
  areaServed: "Malmö",
  serviceType: ["Hemstädning", "Flyttstädning", "Kontorsstädning"],
};

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Städfirma i Malmö — Hemstädning & Flyttstädning | StädMalmö</title>
        <meta name="description" content="Professionell hemstädning, flyttstädning och kontorsstädning i Malmö. Försäkrade städare, RUT-avdrag och kvalitetsgaranti. Boka enkelt online." />
        <link rel="canonical" href="https://stadmalmo.se/" />
        <meta property="og:title" content="Städfirma i Malmö — Hemstädning & Flyttstädning" />
        <meta property="og:description" content="Försäkrade städare, kvalitetsgaranti och RUT-avdrag. Boka städning i Malmö idag." />
        <meta property="og:image" content={heroImage} />
        <meta name="twitter:image" content={heroImage} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 pt-16 md:pt-24 pb-20 grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Lokal städfirma i Malmö
              </span>
              <h1 className="mt-6 text-4xl md:text-6xl text-foreground">
                Mer tid till livet.<br />
                <span className="italic text-primary">Mindre till städet.</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md">
                Professionell hem- och flyttstädning i Malmö. Försäkrade städare,
                kvalitetsgaranti och RUT-avdrag direkt på fakturan.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/kontakt" className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                  Boka städning
                </Link>
                <Link to="/tjanster" className="inline-flex items-center rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium text-foreground hover:bg-surface transition-colors">
                  Se tjänster
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
                <span>★★★★★ 4.9/5 (320+ recensioner)</span>
                <span>RUT-avdrag</span>
                <span>Försäkrade</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
                <img
                  src={heroImage}
                  alt="Ljust och nystädat skandinaviskt vardagsrum"
                  width={1600}
                  height={1152}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface border-y border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-primary">Varför StädMalmö</span>
              <h2 className="mt-3 text-3xl md:text-4xl">Tryggt, noggrant och anpassat efter dig</h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {features.map((f) => (
                <div key={f.title} className="border-t border-border pt-6">
                  <h3 className="font-display text-2xl">{f.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed text-[15px]">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-[0.2em] text-primary">Tjänster</span>
              <h2 className="mt-3 text-3xl md:text-4xl">Städning för varje behov</h2>
            </div>
            <Link to="/tjanster" className="text-sm font-medium text-primary hover:underline">
              Alla tjänster →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <article key={s.title} className="group rounded-2xl border border-border bg-card p-8 hover:border-primary/40 transition-colors">
                <span className="text-xs text-muted-foreground">0{i + 1}</span>
                <h3 className="mt-4 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link to="/tjanster" className="mt-6 inline-block text-sm font-medium text-primary">
                  Läs mer →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-surface border-y border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-primary">Så funkar det</span>
              <h2 className="mt-3 text-3xl md:text-4xl">Tre enkla steg</h2>
            </div>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {steps.map((s) => (
                <div key={s.n}>
                  <span className="font-display text-5xl text-primary/30">{s.n}</span>
                  <h3 className="mt-4 font-display text-2xl">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed text-[15px]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-3xl md:text-5xl">Redo för ett fräschare hem?</h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
            Få en kostnadsfri offert inom 24 timmar — utan förpliktelser.
          </p>
          <Link to="/kontakt" className="mt-8 inline-flex items-center rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            Boka städning
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}