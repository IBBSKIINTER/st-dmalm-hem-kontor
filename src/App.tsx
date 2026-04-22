import { Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import Tjanster from "./pages/Tjanster";
import OmOss from "./pages/OmOss";
import Kontakt from "./pages/Kontakt";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Sidan hittades inte</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Sidan du letar efter finns inte eller har flyttats.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Till startsidan
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/tjanster" element={<Tjanster />} />
      <Route path="/om-oss" element={<OmOss />} />
      <Route path="/kontakt" element={<Kontakt />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}