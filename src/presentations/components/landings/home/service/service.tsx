"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/presentations/components/ui/carousel";
import { neueKaine, spaceGrotesk } from "@/presentations/fonts/fonts";
import { Meh } from "lucide-react";
import Image from "next/image";

const itemService = [
  {
    id: 1,
    icon: Meh,
    title: "Google Ads",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate ligula mattis elit lacinia, ut tincidunt nunc vestibulum. Nullam convallis",
  },

  {
    id: 2,
    icon: Meh,
    title: "Diseño Grafico",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate ligula mattis elit lacinia, ut tincidunt nunc vestibulum. Nullam convallis",
  },

  {
    id: 3,
    icon: Meh,
    title: "Audio visual",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate ligula mattis elit lacinia, ut tincidunt nunc vestibulum. Nullam convallis",
  },

  {
    id: 4,
    icon: Meh,
    title: "Desarrollo Web",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate ligula mattis elit lacinia, ut tincidunt nunc vestibulum. Nullam convallis",
  },

  {
    id: 5,
    icon: Meh,
    title: "Automatizaciones",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate ligula mattis elit lacinia, ut tincidunt nunc vestibulum. Nullam convallis",
  },
  {
    id: 6,
    icon: Meh,
    title: "Agentes de AI",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate ligula mattis elit lacinia, ut tincidunt nunc vestibulum. Nullam convallis",
  },

  {
    id: 7,
    icon: Meh,
    title: "Consultorias",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate ligula mattis elit lacinia, ut tincidunt nunc vestibulum. Nullam convallis",
  },

  {
    id: 8,
    icon: Meh,
    title: "Social Media",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate ligula mattis elit lacinia, ut tincidunt nunc vestibulum. Nullam convallis",
  },
];

export const Service = () => {
  return (
    <section id="service" className="relative mt-20 md:h-[460px]">
      <div className="relative md:grid grid-cols-2">
        <div className="absolute md:static z-20 md:z-0 -top-12 md:top-auto left-6 md:left-auto md:pl-16">
          <h2
            className={`${spaceGrotesk.className} font-bold text-primary-white text-3xl md:text-6xl xl:text-8xl`}
          >
            No solo es un anuncio
          </h2>
          <p
            className={`${neueKaine.className} font-medium text-primary-white text-xl md:text-7xl xl:text-6xl md:mt-4`}
          >
            es tu futuro
          </p>
        </div>

        <div className="md:relative md:overflow-hidden md:[mask-image:linear-gradient(to_right,transparent,white_8%,white_80%,transparent)]">
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
                    <div className="p-7 bg-primary-white/[0.1] backdrop-blur-xl rounded-2xl">
                      <div className="flex items-center space-x-2">
                        <div>
                          <IconComponent
                            size={24}
                            className="text-primary-red"
                          />
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
