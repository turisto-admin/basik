import type { Metadata } from "next";

import "../presentations/styles/globals.css";
import { neueKaine } from "@/presentations/fonts/fonts";

export const metadata: Metadata = {
  title: "En Basik hacemos Menos ruido, Más dinero",
  description: "Marketing",
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
      <body className={`${neueKaine.className} antialiased`}>{children}</body>
    </html>
  );
}
