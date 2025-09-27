"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/presentations/components/ui/carousel";
import { neueKaine, spaceGrotesk } from "@/presentations/fonts/fonts";
import { Bot, CodeXml, Cpu, Headset } from "lucide-react";
import Image from "next/image";
import "@/presentations/styles/animation/animation.css";

const itemService = [
  {
    id: 1,
    icon: CodeXml,
    path: "",
    title: "Desarrollo Web",
    description:
      "Creamos sitios web y aplicaciones moviles. Diseñamos experiencias digitales que no solo se ven bien, sino que impulsan tus ventas y crecimiento.",
  },

  {
    id: 2,
    icon: Bot,
    title: "Desarrollo Mobile",
    description:
      "Creamos aplicaciones móviles a medida que se adaptan a las necesidades de tu negocio. Desde la idea inicial hasta el lanzamiento, te acompañamos en cada paso.",
  },

  {
    id: 3,
    icon: Cpu,
    title: "Automatizaciones",
    description:
      "Optimizamos tus procesos para que tu negocio funcione sin esfuerzo. Automatizamos tareas repetitivas para que te concentres en lo que realmente importa.",
  },

  {
    id: 4,
    icon: Headset,
    title: "Diseño UX/UI",
    description:
      "Creamos interfaces atractivas que mejoran la experiencia del usuario. Nuestro enfoque centrado en el usuario garantiza que las necesidades de tus clientes.",
  },
];

export const ServiceTech = () => {
  return (
    <section id="service" className="relative mt-20 md:h-[460px]">
      <div className="relative md:grid grid-cols-2">
        <div className="absolute md:static z-20 md:z-0 -top-12 md:top-auto left-6 md:left-auto md:pl-16">
          <h2
            className={`${spaceGrotesk.className} font-bold text-primary-white text-3xl md:text-6xl xl:text-8xl autoShow`}
          >
            Servicios Tecnológicos
          </h2>
          <p
            className={`${neueKaine.className} font-medium text-primary-white text-xl md:text-4xl xl:text-5xl md:mt-4 autoShow`}
          >
            Soluciones a medida para tu negocio
          </p>
        </div>

        <div className="md:relative md:overflow-hidden md:[mask-image:linear-gradient(to_right,transparent,white_8%,white_80%,transparent)] fade-in-view">
          <Carousel
            opts={{
              align: "center",
              slidesToScroll: 1,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent className="md:w-[50%]">
              {itemService.map((service) => {
                const IconComponent = service.icon;

                return (
                  <CarouselItem key={service.id} className="pl-4 basis-4/5">
                    <div className="p-7 bg-primary-white/[0.1] backdrop-blur-xl rounded-2xl min-h-[250px] md:min-h-0 flex flex-col">
                      <div className="flex items-center space-x-2">
                        <div>
                          {service.path ? (
                            <Image
                              src={service.path}
                              width={24}
                              height={24}
                              alt={service.path}
                            />
                          ) : (
                            <IconComponent
                              size={24}
                              className="text-primary-red"
                            />
                          )}
                        </div>
                        <p
                          className={`${spaceGrotesk.className} text-primary-red font-bold text-xl`}
                        >
                          {service.title}
                        </p>
                      </div>

                      <div className="mt-2">
                        <p
                          className={`${spaceGrotesk.className} text-primary-white text-pretty`}
                        >
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
