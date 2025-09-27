import { NavBar } from "../../shared/nav-bar/nav-bar";
import { BackgroundAnimation } from "../../shared/background-animation/bg-animation";
import { Hero } from "../../landings/home/hero";
import { PresentationVideo } from "../../landings/home/presentation/presentation-video";
import { ServiceTech } from "../../landings/tech/service/service-tech";
import { NewsLetter } from "../../landings/home/newsletter/newsletter";
import { Footer } from "../../landings/home/footer/footer";
import { Testimonies } from "../../landings/home/testimonies/testimonies";

export const TechComponent = () => {
  return (
    <div className="relative">
      {/* nav */}
      <NavBar hiddenPhilosophy servicePath />

      {/* background animation */}
      <BackgroundAnimation />

      {/* Hero */}
      <Hero />

      {/* Presentation */}
      <PresentationVideo />

      {/* services section */}
      <ServiceTech />

      {/* testimonies */}
      <Testimonies />

      {/* newsletter */}
      <NewsLetter />

      {/* footer */}
      <Footer />
    </div>
  );
};
