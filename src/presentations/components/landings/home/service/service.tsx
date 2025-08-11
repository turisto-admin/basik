"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/presentations/components/ui/carousel";
import { neueKaine, spaceGrotesk } from "@/presentations/fonts/fonts";
import {
  Bot,
  CodeXml,
  Cpu,
  Film,
  Headset,
  Meh,
  PencilRuler,
} from "lucide-react";
import Image from "next/image";
import "@/presentations/styles/animation/animation.css";

const itemService = [
  {
    id: 1,
    icon: Meh,
    title: "Google Ads",
    path: "/icon-services/google-ads.svg",
    description:
      "Publicidad en el mayor buscador del mundo para captar tráfico cualificado. Anuncios en Search, Display y YouTube para impulsar conversiones.",
  },

  {
    id: 2,
    icon: Meh,
    title: "Meta Ads",
    path: "/icon-services/meta-ads.svg",
    description:
      "Campañas publicitarias en Facebook e Instagram para llegar a tu audiencia ideal. Segmentación avanzada y creativos impactantes para maximizar resultados.",
  },

  {
    id: 3,
    icon: PencilRuler,
    title: "Diseño Grafico",
    description:
      "Construimos una identidad visual que vende. Nuestro diseño no es solo estético, es estratégico y está pensado para generar un impacto directo en tus clientes.",
  },

  {
    id: 4,
    icon: Film,
    title: "AudioVisual",
    description:
      "Creación de videos profesionales para promoción, redes sociales o contenido corporativo. Grabación, edición y motion graphics",
  },

  {
    id: 5,
    icon: CodeXml,
    title: "Desarrollo Web",
    description:
      "Creamos sitios web y aplicaciones moviles. Diseñamos experiencias digitales que no solo se ven bien, sino que impulsan tus ventas y crecimiento.",
  },

  {
    id: 6,
    icon: Cpu,
    title: "Automatizaciones",
    description:
      "Optimizamos tus procesos para que tu negocio funcione sin esfuerzo. Automatizamos tareas repetitivas para que te concentres en lo que realmente importa.",
  },
  {
    id: 7,
    icon: Bot,
    title: "Agentes de AI",
    description:
      "Asistentes inteligentes automatizados para atención al cliente, ventas o gestión de tareas. Soluciones personalizadas con IA para optimizar procesos.",
  },

  {
    id: 8,
    icon: Headset,
    title: "Consultorias",
    description:
      "Estrategias personalizadas para aumentar tus ventas y posicionar tu marca. Análisis de mercado, planes de acción y métricas para lograr tus objetivos comerciales",
  },

  {
    id: 9,
    icon: Meh,
    path: "/icon-services/social-media.png",
    title: "Social Media",
    description:
      "Administración profesional de tus redes sociales: contenido, interacción y publicidad. Crecimiento de audiencia y engagement con estrategias adaptadas a cada plataforma. ",
  },
];

export const Service = () => {
  return (
    <section id="service" className="relative mt-20 md:h-[460px]">
      <div className="relative md:grid grid-cols-2">
        <div className="absolute md:static z-20 md:z-0 -top-12 md:top-auto left-6 md:left-auto md:pl-16">
          <h2
            className={`${spaceGrotesk.className} font-bold text-primary-white text-3xl md:text-6xl xl:text-8xl autoShow`}
          >
            No solo es un anuncio
          </h2>
          <p
            className={`${neueKaine.className} font-medium text-primary-white text-xl md:text-7xl xl:text-6xl md:mt-4 autoShow`}
          >
            es tu futuro
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
