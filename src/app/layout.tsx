import type { Metadata } from "next";

import "../presentations/styles/globals.css";
import { neueKaine } from "@/presentations/fonts/fonts";
import { Toaster } from "@/presentations/components/ui/sonner";

export const metadata: Metadata = {
  title:
    "Basik - Marketing Estratégico Sin Distracciones | Menos Ruido, Más Ventas",
  description:
    "Eliminamos lo innecesario del marketing tradicional. Enfocados 100% en conversiones, crecimiento medible y estrategias que generan resultados reales para tu negocio. Sin promesas vacías, solo lo básico hecho bien.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/B ONDEANDO NARANJA.svg" sizes="any" />
      </head>
      <body className={`${neueKaine.className} antialiased`}>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
