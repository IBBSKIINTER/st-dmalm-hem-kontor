import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-surface mt-24">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-display">S</span>
            <span className="font-display text-xl text-foreground">StädMalmö</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
            Professionell hem- och flyttstädning i Malmö. Försäkrade, kvalitetssäkrade
            och lokala städare som skapar mer tid för det viktiga.
          </p>
        </div>
        <div>
          <h3 className="font-display text-sm uppercase tracking-widest text-foreground/70">Tjänster</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/tjanster" className="text-muted-foreground hover:text-foreground">Hemstädning</Link></li>
            <li><Link to="/tjanster" className="text-muted-foreground hover:text-foreground">Flyttstädning</Link></li>
            <li><Link to="/tjanster" className="text-muted-foreground hover:text-foreground">Kontorsstädning</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-sm uppercase tracking-widest text-foreground/70">Kontakt</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>040 — 123 45 67</li>
            <li>hej@stadmalmo.se</li>
            <li>Malmö, Sverige</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-muted-foreground flex justify-between">
          <span>© 2026 StädMalmö</span>
          <span>RUT-avdrag • F-skatt • Försäkrade</span>
        </div>
      </div>
    </footer>
  );
}