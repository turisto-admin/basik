import { ContactComponent } from "@/presentations/components/pages/contact/contact";
import { NavBar } from "@/presentations/components/shared/nav-bar/nav-bar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacta a Basik – Soluciones Directas para Hacer Crecer Tu Negocio",
  description:
    "Habla directamente con nuestro equipo de alto rendimiento. Sin intermediarios, sin formularios complicados – soluciones estratégicas para impulsar tus ventas y métricas reales.",
};

export default function ContactPage() {
  return (
    <div className="bg-primary-black min-h-screen">
      <NavBar />
      <ContactComponent />
    </div>
  );
}
