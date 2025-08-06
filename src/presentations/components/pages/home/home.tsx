import { NavBar } from "../../shared/nav-bar/nav-bar";
import { Hero } from "../../landings/home/hero";
import { PresentationVideo } from "../../landings/home/presentation/presentation-video";
import { Service } from "../../landings/home/service/service";
import { Philosophy } from "../../landings/home/philosophy/philosophy";
import { Testimonies } from "../../landings/home/testimonies/testimonies";
import { NewsLetter } from "../../landings/home/newsletter/newsletter";

export const HomeComponent = () => {
  return (
    <div>
      {/* nav */}
      <NavBar />

      {/* background animation */}
      <div className="blob-outer-container">
        <div className="blob-inner-container">
          <div className="blob"></div>
        </div>
      </div>

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
    </div>
  );
};
