import { spaceGrotesk } from "@/presentations/fonts/fonts";
import { ArrowRight } from "lucide-react";
import "@/presentations/styles/animation/animation.css";
import Link from "next/link";
import VideoMuxPlayer from "../../video/video-mux-player";

export const PresentationVideo = () => {
  return (
    <section className="relative mx-5 md:mx-28 lg:mx-40 mt-16 mb-28">
      <div className="flex flex-col items-center justify-center">
        {/* Contenedor del video */}
        <div className="w-full flex justify-center items-center mt-5">
          <div className="relative w-full" style={{ paddingTop: "26.25%" }}>
            <VideoMuxPlayer />
          </div>
        </div>

        {/* Contenido debajo del video */}
        <div className="w-full flex flex-col items-center justify-center mt-8 fade-in-view">
          <p
            className={`${spaceGrotesk.className} text-pretty text-primary-white text-center md:w-[80%]`}
          >
            El momento de crecer es ahora. Agenda tu consultoria y descubre como
            poddemos llevar tu negocio al siguiente nivel.
          </p>

          <Link
            href={"/contact"}
            className={`${spaceGrotesk.className} bg-primary-red active:bg-secondary-red hover:bg-secondary-red transition-all duration-300 transform hover:scale-105 px-8 py-3 rounded-full flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer w-full md:w-fit mt-6 fade-in-view`}
          >
            <span className="text-primary-white">
              Agenda una consultoria gratuita
            </span>
            <ArrowRight className="text-primary-white" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
