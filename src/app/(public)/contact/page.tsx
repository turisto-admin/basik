import { ContactComponent } from "@/presentations/components/pages/contact/contact";
import { NavBar } from "@/presentations/components/shared/nav-bar/nav-bar";

export default function ContactPage() {
  return (
    <div className="bg-primary-black min-h-screen">
      <NavBar />
      <ContactComponent />
    </div>
  );
}
