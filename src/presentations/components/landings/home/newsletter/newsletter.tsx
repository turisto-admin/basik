import { spaceGrotesk } from "@/presentations/fonts/fonts";
import Image from "next/image";

export const NewsLetter = () => {
  return (
    <section className="relative mt-10">
      <div className="mx-3 md:mx-28">
        <div className="flex flex-col justify-center md:flex-row items-center bg-primary-red/[0.8] backdrop-blur-xl rounded-xl p-8 xl:h-[400px]">
          <div className="w-full xl:w-[90%]">
            <h2
              className={`${spaceGrotesk.className} font-black text-3xl md:text-5xl xl:text-6xl text-primary-white`}
            >
              El futuro de tu marca empieza aquí
            </h2>
            <p
              className={`${spaceGrotesk.className} text-primary-white/[0.7] mt-3`}
            >
              Descubre estrategias probadas para escalar tu negocio. Suscríbete
              para recibir tips exclusivos y análisis de mercado cada semana.
            </p>

            <div className="flex items-centerm bg-primary-white py-2 px-4 rounded-2xl mt-3">
              <input
                type="text"
                className={`${spaceGrotesk.className} placeholder:text-sm w-full focus:outline-none focus:ring-0`}
                placeholder="Ingresa tu email"
              />

              <button
                className={`${spaceGrotesk.className} bg-primary-red active:bg-secondary-red hover:bg-secondary-red rounded-xl text-primary-white font-semibold px-4 py-2 cursor-pointer transition-colors duration-300`}
              >
                Enviar
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <Image
              src={"/assets/laptop.jpg"}
              height={800}
              width={800}
              alt="mockup-newsletter"
              className="hidden md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
