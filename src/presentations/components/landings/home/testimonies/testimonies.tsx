"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/presentations/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/presentations/components/ui/carousel";
import { spaceGrotesk } from "@/presentations/fonts/fonts";
import Image from "next/image";
import "@/presentations/styles/animation/animation.css";
const testimonials = [
  {
    id: 1,
    name: "Doctor Valle Folgueral",
    company: "Doctor Valle Folgueral",
    text: "Mi consulta es otra desde que trabajé con Basik. El sistema de citas online que implementaron en mi web ha eliminado por completo el caos de la agenda.",
    image: "/assets/testimonies/drvalle-avatar.jpg",
  },
  {
    id: 2,
    name: "Dr Rafael",
    company: "Dr Rafael",
    text: "Gracias a Basik, mi clínica prácticamente  se maneja sola. La página web que crearon tiene un sistema de citas que funciona perfecto",
    image: "/assets/testimonies/drrafael-.png",
  },

  {
    id: 3,
    name: "Soonline",
    company: "Soonline",
    text: "La eficiencia de mi consulta mejoró radicalmente con Basik. Su diseño web es funcional. Ahora puedo enfocarme en atender  por completo a todos mis pacientes",
    image: "/assets/testimonies/soonline.webp",
  },

  {
    id: 4,
    name: "Invisalign",
    company: "Invisalign",
    text: "El desarrollo de mi web fue un proceso sencillo y el resultado es increíble. Entendieron mi visión y la transformaron en un sitio profesional que realmente me representa.",
    image: "/assets/testimonies/invisalign.svg",
  },
];

const loopedTestimonials = testimonials;

export const Testimonies = () => {
  return (
    <section className="relative mt-28">
      <div className="mb-8 md:mb-15 autoShow">
        <h2
          className={`${spaceGrotesk.className} font-black text-center text-5xl text-primary-white`}
        >
          Testimoniales
        </h2>
      </div>
      <CarouselTestimoniesMobile />

      <CarourelTestimoniesDesktop />
    </section>
  );
};

const CarouselTestimoniesMobile = () => {
  return (
    <div className="block fade-in-view md:hidden">
      <Carousel
        orientation="horizontal"
        opts={{
          loop: true,
          align: "center",
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="block md:hidden"
      >
        <CarouselContent className="h-[250px] px-2 ">
          {testimonials.map((testimony, index) => (
            <CarouselItem
              key={`${testimony.id}-${index}`}
              className="pl-4 basis-4/5"
            >
              <Card className="bg-primary-white/[0.1] backdrop-blur-xl border-0">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="rounded-full h-9 w-9 flex items-center justify-center">
                      <Image
                        width={20}
                        height={20}
                        src={testimony.image}
                        alt={testimony.text}
                        className="object-cover rounded-full h-full w-full"
                      />
                    </div>
                    <div>
                      <CardTitle
                        className={`${spaceGrotesk.className} text-primary-white`}
                      >
                        {testimony.name}
                      </CardTitle>
                      <CardDescription className="text-gray-400 mt-1">
                        {testimony.company}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p
                    className={`${spaceGrotesk.className} text-pretty leading-5 text-primary-white text-xs`}
                  >
                    {testimony.text}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

const CarourelTestimoniesDesktop = () => {
  return (
    <div className="hidden md:grid fade-in-view md:grid-cols-3 md:gap-x-6 md:mx-16 xl:mx-28">
      {/* Carousel 1 */}
      <div className="">
        <Carousel
          orientation="vertical"
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent className="h-[300px] -mt-4">
            {loopedTestimonials.map((testimony, index) => (
              <CarouselItem key={`${testimony.id}-${index}`}>
                <Card className="bg-primary-white/[0.1] backdrop-blur-xl border-0">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <div className="rounded-full h-9 w-9 flex items-center justify-center">
                        {testimony.image && (
                          <Image
                            width={36}
                            height={36}
                            src={testimony.image}
                            alt={testimony.text}
                            className="object-cover h-full w-full rounded-full"
                          />
                        )}
                      </div>
                      <div>
                        <CardTitle
                          className={`${spaceGrotesk.className} text-primary-white`}
                        >
                          {testimony.name}
                        </CardTitle>
                        <CardDescription className="text-gray-400 mt-1">
                          {testimony.company}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p
                      className={`${spaceGrotesk.className} text-pretty text-primary-white text-xs leading-5`}
                    >
                      {testimony.text}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Carousel 2 */}
      <div className="">
        <Carousel
          orientation="vertical"
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 6000,
            }),
          ]}
          className="hidden md:block"
        >
          <CarouselContent className="h-[300px] -mt-4">
            {loopedTestimonials.map((testimony, index) => (
              <CarouselItem key={`${testimony.id}-${index}`}>
                <Card className="bg-primary-white/[0.1] backdrop-blur-xl border-0">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="rounded-full h-9 w-9 flex items-center justify-center">
                        <Image
                          width={36}
                          height={36}
                          src={testimony.image}
                          alt={testimony.text}
                          className="object-cover rounded-full h-full w-full"
                        />
                      </div>
                      <div>
                        <CardTitle
                          className={`${spaceGrotesk.className} text-primary-white`}
                        >
                          {testimony.name}
                        </CardTitle>
                        <CardDescription className="text-gray-400 mt-1">
                          {testimony.company}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p
                      className={`${spaceGrotesk.className} text-pretty text-primary-white text-xs leading-5`}
                    >
                      {testimony.text}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Carousel 3 */}
      <div className="">
        <Carousel
          orientation="vertical"
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 9000,
            }),
          ]}
        >
          <CarouselContent className="h-[300px] -mt-4">
            {loopedTestimonials.map((testimony, index) => (
              <CarouselItem key={`${testimony.id}-${index}`}>
                <Card className="bg-primary-white/[0.1] backdrop-blur-xl border-0">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="rounded-full h-9 w-9 flex items-center justify-center">
                        <Image
                          width={36}
                          height={36}
                          src={testimony.image}
                          alt={testimony.text}
                          className="object-cover rounded-full h-full w-full"
                        />
                      </div>
                      <div>
                        <CardTitle
                          className={`${spaceGrotesk.className} text-primary-white`}
                        >
                          {testimony.name}
                        </CardTitle>
                        <CardDescription className="text-gray-400 mt-1">
                          {testimony.company}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p
                      className={`${spaceGrotesk.className} text-pretty text-primary-white text-xs leading-5`}
                    >
                      {testimony.text}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
