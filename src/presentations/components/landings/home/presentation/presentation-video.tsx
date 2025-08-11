import { spaceGrotesk } from "@/presentations/fonts/fonts";
import { ArrowRight, Play } from "lucide-react";
import "@/presentations/styles/animation/animation.css";
export const PresentationVideo = () => {
  return (
    <section className="relative h-[500px] mx-5 md:mx-28 lg:mx-40 mt-15">
      <div className="flex flex-col items-center justify-center">
        {/* video */}
        <div className="border border-primary-white rounded-2xl h-[300px] w-full flex justify-center items-center">
          <Play size={28} className="text-primary-red" />
        </div>
        <div className="flex flex-col items-center justify-center mt-5 autoShow">
          <p
            className={`${spaceGrotesk.className} text-pretty text-primary-white text-center md:w-[80%]`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            convallis aliquet ante, sed aliquet nibh. Suspendisse ut porta
          </p>
        </div>

        <button
          className={`${spaceGrotesk.className} bg-primary-red active:bg-secondary-red hover:bg-secondary-red transition-all duration-300 transform hover:scale-105 px-8 py-3 rounded-full flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer w-full md:w-fit mt-6 fade-in-view`}
        >
          <span className="text-primary-white">
            Agenda una consultoria gratuita
          </span>
          <ArrowRight className="text-primary-white" size={16} />
        </button>
      </div>
    </section>
  );
};
