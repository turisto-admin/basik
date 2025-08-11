import { NavBar } from "../../shared/nav-bar/nav-bar";
import { Hero } from "../../landings/home/hero";
import { PresentationVideo } from "../../landings/home/presentation/presentation-video";
import { Service } from "../../landings/home/service/service";
import { Philosophy } from "../../landings/home/philosophy/philosophy";
import { Testimonies } from "../../landings/home/testimonies/testimonies";
import { NewsLetter } from "../../landings/home/newsletter/newsletter";
import { Footer } from "../../landings/home/footer/footer";
import { BackgroundAnimation } from "../../shared/background-animation/bg-animation";

export const HomeComponent = () => {
  return (
    <div className="relative">
      {/* nav */}
      <NavBar />

      {/* background animation */}
      <BackgroundAnimation />

      {/* Hero */}
      <Hero />

      {/* Presentation */}
      <PresentationVideo />

      {/* services section */}
      <Service />

      {/* philosophy */}
      <Philosophy />

      {/* testimonies */}
      <Testimonies />

      {/* newsletter */}
      <NewsLetter />

      {/* footer */}
      <Footer />
    </div>
  );
};
