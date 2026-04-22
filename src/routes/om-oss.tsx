import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/om-oss")({
  component: OmOssPage,
  head: () => ({
    meta: [
      { title: "Om oss — Lokal städfirma i Malmö sedan 2018 | StädMalmö" },
      { name: "description", content: "StädMalmö är en lokal städfirma med försäkrade städare och kvalitetsgaranti. Lär känna teamet bakom Malmös pålitligaste hemstädning." },
      { property: "og:title", content: "Om StädMalmö — Lokal städfirma i Malmö" },
      { property: "og:description", content: "Försäkrade städare, kvalitetsgaranti och en personlig kundkontakt." },
    ],
    links: [{ rel: "canonical", href: "https://stadmalmo.se/om-oss" }],
  }),
});

function OmOssPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 pt-20 pb-24">
        <span className="text-xs uppercase tracking-[0.2em] text-primary">Om oss</span>
        <h1 className="mt-4 text-4xl md:text-5xl">En städfirma med omtanke</h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          StädMalmö startades med en enkel tanke — att städning ska vara enkelt, tryggt
          och göra verklig skillnad i människors vardag. Sedan 2018 har vi hjälpt
          tusentals hem och företag i Malmö att frigöra tid för det som verkligen betyder något.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-surface p-8 border border-border">
            <h2 className="font-display text-2xl">Vårt löfte</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Är du inte 100% nöjd? Vi kommer tillbaka och städar om — utan kostnad. Det är vår kvalitetsgaranti.
            </p>
          </div>
          <div className="rounded-2xl bg-surface p-8 border border-border">
            <h2 className="font-display text-2xl">Vårt team</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Alla våra städare är fast anställda, försäkrade och utbildade i miljövänliga metoder.
            </p>
          </div>
        </div>
        <div className="mt-16 text-center">
          <Link to="/kontakt" className="inline-flex items-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Kontakta oss
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}