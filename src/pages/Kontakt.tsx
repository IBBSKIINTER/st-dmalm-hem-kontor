import { Helmet } from "react-helmet-async";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().min(2, "Ange ditt namn"),
  email: z.string().email("Ogiltig e-postadress"),
  phone: z.string().optional(),
  message: z.string().min(5, "Berätta lite mer om vad du behöver"),
});

type ContactValues = z.infer<typeof contactSchema>;

export default function Kontakt() {
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = (values: ContactValues) => {
    console.log("Kontaktformulär:", values);
    toast.success("Tack! Vi återkommer inom 24 timmar.");
    form.reset();
  };

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

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Namn</FormLabel>
                    <FormControl>
                      <Input placeholder="Anna Andersson" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-post</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="anna@exempel.se" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefon</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="070-123 45 67" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vad kan vi hjälpa till med?</FormLabel>
                  <FormControl>
                    <Textarea rows={5} placeholder="Beskriv kort vad du behöver hjälp med..." className="resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="mt-2 w-fit rounded-full px-7">
              Skicka förfrågan
            </Button>
          </form>
        </Form>

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