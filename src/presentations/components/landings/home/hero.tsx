import { spaceGrotesk } from "@/presentations/fonts/fonts";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative h-[500px]">
      <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 justify-center items-center pt-28">
        <div className="flex items-center space-x-2 mr-3">
          <Image
            src={"/assets/signo-menos-basik.svg"}
            width={40}
            height={40}
            alt="minus-icon"
            className="h-[20px] w-[20px] md:h-[40px] md:w-[40px]"
          />

          <p className="text-primary-white font-semibold font-family-heading text-5xl md:text-8xl">
            ruido
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <Image
            src={"/assets/signo-mas-basik.svg"}
            width={40}
            height={40}
            alt="minus-icon"
            className="h-[20px] w-[20px] md:h-[40px] md:w-[40px]"
          />

          <p className="text-primary-white font-black font-family-body text-6xl md:text-8xl">
            Dinero
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center pt-2">
        <p
          className={`${spaceGrotesk.className} px-2 text-sm md:text-base text-pretty text-primary-white font-medium text-center w-full md:w-1/2`}
        >
          Basik no compite en creatividad, compite en resultados. Eliminamos lo
          innecesario y nos enfocamos en solo una sola cosa: vender más
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-y-4 md:justify-center md:items-center space-x-4 mt-6 px-2 md:px-0">
        <button
          className={`${spaceGrotesk.className} bg-primary-red active:bg-secondary-red hover:bg-secondary-red px-8 py-3 rounded-full flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors cursor-pointer w-full md:w-fit`}
        >
          <span className="text-primary-white">Quiero Resultados</span>
          <ArrowRight className="text-primary-white" size={16} />
        </button>
        <button
          className={`${spaceGrotesk.className} bg-transparent active:bg-primary-white hover:bg-primary-white text-primary-white hover:text-primary-black active:text-primary-black px-8 py-3 rounded-full flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors cursor-pointer border border-primary-white w-full md:w-fit`}
        >
          <span className="">Escribenos</span>
        </button>
      </div>
      <div className="mt-16">
        <p className="text-sm md:text-base text-primary-white/85 font-bold text-center w-full pt-3 italic">
          "Clicks que cuentan Ventas que escalan"
        </p>
      </div>
    </section>
  );
};
