import { spaceGrotesk } from "@/presentations/fonts/fonts";
import Image from "next/image";
import "@/presentations/styles/animation/animation.css";
export const Philosophy = () => {
  return (
    <section id="philosophy" className="relative mt-28 md:mt-0">
      <div className="md:mx-16 xl:mx-28">
        {/* header */}
        <div className="flex flex-col items-center justify-center mb-5 ">
          <h2
            className={`${spaceGrotesk.className} text-primary-white font-black text-4xl text-center sm:text-5xl md:text-6xl autoShow`}
          >
            Nuestra Filosofía
            <p className="font-bold text-xl sm:text-3xl md:text-4xl mt-3 autoShow">
              Foco, Precisión y Ejecución
            </p>
          </h2>
          <p
            className={`${spaceGrotesk.className} text-primary-white/[0.7] font-medium text-sm md:text-lg mt-2 autoShow`}
          >
            Si no convierte, no sirve. Es así de simple.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 gap-y-10 md:gap-y-0 md:grid-cols-2 mx-3 md:gap-x-12 mt-12">
          <div className="bg-primary-white/[0.1] backdrop-blur-xl rounded-2xl p-7 card-slide-left">
            {/*title - Lo que Eliminamos*/}
            <div className="flex items-center space-x-2 ">
              <div className="border-2 border-primary-red rounded-full h-7 w-7 flex justify-center items-center">
                <Image
                  src={"/assets/signo-menos-basik.svg"}
                  width={14}
                  height={14}
                  alt="minus"
                />
              </div>
              <p
                className={`${spaceGrotesk.className} text-primary-white font-bold text-lg`}
              >
                Lo que Eliminamos
              </p>
            </div>
            {/* Lo que Eliminamos -list*/}
            <div className="pl-2 md:pl-5 mt-4">
              <ul>
                <li className="flex items-center space-x-2 mb-2">
                  <Image
                    src={"/assets/signo-menos-basik.svg"}
                    width={10}
                    height={10}
                    alt="minus"
                  />

                  <span
                    className={`${spaceGrotesk.className} text-primary-white`}
                  >
                    Promesas vacías
                  </span>
                </li>

                <li className="flex items-center space-x-2 mb-2">
                  <Image
                    src={"/assets/signo-menos-basik.svg"}
                    width={10}
                    height={10}
                    alt="minus"
                  />

                  <span
                    className={`${spaceGrotesk.className} text-primary-white`}
                  >
                    Diseño sin propósito
                  </span>
                </li>

                <li className="flex items-center space-x-2 mb-2">
                  <Image
                    src={"/assets/signo-menos-basik.svg"}
                    width={10}
                    height={10}
                    alt="minus"
                  />

                  <span
                    className={`${spaceGrotesk.className} text-primary-white`}
                  >
                    Metricas vanidosas
                  </span>
                </li>

                <li className="flex items-center space-x-2 mb-2">
                  <Image
                    src={"/assets/signo-menos-basik.svg"}
                    width={10}
                    height={10}
                    alt="minus"
                  />

                  <span
                    className={`${spaceGrotesk.className} text-primary-white`}
                  >
                    Storytelling innecesario
                  </span>
                </li>

                <li className="flex items-center space-x-2">
                  <Image
                    src={"/assets/signo-menos-basik.svg"}
                    width={10}
                    height={10}
                    alt="minus"
                  />

                  <span
                    className={`${spaceGrotesk.className} text-primary-white`}
                  >
                    Estrategias de ensayo/error
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-red/[0.1] backdrop-blur-xl rounded-2xl p-6 md:p-7 border border-primary-red card-slide-right">
            {/* title - lo que nos Enfocamos*/}
            <div className="flex items-center space-x-2">
              <div className="border-2 border-primary-red rounded-full h-7 w-7 flex justify-center items-center">
                <Image
                  src={"/assets/signo-mas-basik.svg"}
                  width={14}
                  height={14}
                  alt="minus"
                />
              </div>
              <p
                className={`${spaceGrotesk.className} text-primary-white font-bold text-lg`}
              >
                En lo que nos Enfocamos
              </p>
            </div>
            {/* lo que nos Enfocamos - list */}
            <div className="pl-2 md:pl-5 mt-4">
              <ul>
                <li className="flex items-center space-x-2 mb-2">
                  <Image
                    src={"/assets/signo-mas-basik.svg"}
                    width={10}
                    height={10}
                    alt="minus"
                  />

                  <span
                    className={`${spaceGrotesk.className} text-primary-white`}
                  >
                    Conversiones y ventas
                  </span>
                </li>

                <li className="flex items-center space-x-2 mb-2">
                  <Image
                    src={"/assets/signo-mas-basik.svg"}
                    width={10}
                    height={10}
                    alt="minus"
                  />

                  <span
                    className={`${spaceGrotesk.className} text-primary-white`}
                  >
                    Crecimiento medible
                  </span>
                </li>

                <li className="flex items-center space-x-2 mb-2">
                  <Image
                    src={"/assets/signo-mas-basik.svg"}
                    width={10}
                    height={10}
                    alt="minus"
                  />

                  <span
                    className={`${spaceGrotesk.className} text-primary-white`}
                  >
                    Marketing basado en datos
                  </span>
                </li>

                <li className="flex items-center space-x-2 mb-2">
                  <Image
                    src={"/assets/signo-mas-basik.svg"}
                    width={10}
                    height={10}
                    alt="minus"
                  />

                  <span
                    className={`${spaceGrotesk.className} text-primary-white`}
                  >
                    Ejecución agresiva
                  </span>
                </li>

                <li className="flex items-center space-x-2">
                  <Image
                    src={"/assets/signo-mas-basik.svg"}
                    width={10}
                    height={10}
                    alt="minus"
                  />

                  <span
                    className={`${spaceGrotesk.className} text-primary-white`}
                  >
                    Mentalidad de exportación
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
