import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-lg">S</span>
          <span className="font-display text-xl tracking-tight text-foreground">
            StädMalmö
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/tjanster" className="text-muted-foreground hover:text-foreground transition-colors" activeProps={{ className: "text-foreground font-medium" }}>
            Tjänster
          </Link>
          <Link to="/om-oss" className="text-muted-foreground hover:text-foreground transition-colors" activeProps={{ className: "text-foreground font-medium" }}>
            Om oss
          </Link>
          <Link to="/kontakt" className="text-muted-foreground hover:text-foreground transition-colors" activeProps={{ className: "text-foreground font-medium" }}>
            Kontakt
          </Link>
        </nav>
        <Link
          to="/kontakt"
          className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Boka städning
        </Link>
      </div>
    </header>
  );
}