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
    name: "Nombre 1",
    company: "Empresa/Cliente 1",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias voluptatem consequatur natus ipsam ad similique blanditiis. Temporibus dicta molestiae officia aperiam saepe itaque neque totam, recusandae adipisci hic quasi! Modi.",
    image: "/logos/B NARANJA NORMAL.svg",
  },
  {
    id: 2,
    name: "Nombre 2",
    company: "Empresa/Cliente 2",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias voluptatem consequatur natus ipsam ad similique blanditiis. Temporibus dicta molestiae officia aperiam saepe itaque neque totam, recusandae adipisci hic quasi! Modi.",
    image: "/logos/B NARANJA NORMAL.svg",
  },

  {
    id: 3,
    name: "Nombre 3",
    company: "Empresa/Cliente 3",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias voluptatem consequatur natus ipsam ad similique blanditiis. Temporibus dicta molestiae officia aperiam saepe itaque neque totam, recusandae adipisci hic quasi! Modi.",
    image: "/logos/B NARANJA NORMAL.svg",
  },
  {
    id: 4,
    name: "Nombre 4",
    company: "Empresa/Cliente 4",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias voluptatem consequatur natus ipsam ad similique blanditiis. Temporibus dicta molestiae officia aperiam saepe itaque neque totam, recusandae adipisci hic quasi! Modi.",
    image: "/logos/B NARANJA NORMAL.svg",
  },

  {
    id: 5,
    name: "Nombre 5",
    company: "Empresa/Cliente 5",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias voluptatem consequatur natus ipsam ad similique blanditiis. Temporibus dicta molestiae officia aperiam saepe itaque neque totam, recusandae adipisci hic quasi! Modi.",
    image: "/logos/B NARANJA NORMAL.svg",
  },
  {
    id: 6,
    name: "Nombre 6",
    company: "Empresa/Cliente 6",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias voluptatem consequatur natus ipsam ad similique blanditiis. Temporibus dicta molestiae officia aperiam saepe itaque neque totam, recusandae adipisci hic quasi! Modi.",
    image: "/logos/B NARANJA NORMAL.svg",
  },
];

const loopedTestimonials = [...testimonials, ...testimonials, ...testimonials];

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
                    <div className="rounded-full border-2 border-primary-red h-9 w-9 flex items-center justify-center">
                      <Image
                        width={20}
                        height={20}
                        src={testimony.image}
                        alt={testimony.text}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle
                        className={`${spaceGrotesk.className} text-primary-white`}
                      >
                        {testimony.name}
                      </CardTitle>
                      <CardDescription>{testimony.company}</CardDescription>
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
                      <div className="rounded-full border-2 border-primary-red h-9 w-9 flex items-center justify-center">
                        <Image
                          width={20}
                          height={20}
                          src={testimony.image}
                          alt={testimony.text}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle
                          className={`${spaceGrotesk.className} text-primary-white`}
                        >
                          {testimony.name}
                        </CardTitle>
                        <CardDescription>{testimony.company}</CardDescription>
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
                      <div className="rounded-full border-2 border-primary-red h-9 w-9 flex items-center justify-center">
                        <Image
                          width={20}
                          height={20}
                          src={testimony.image}
                          alt={testimony.text}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle
                          className={`${spaceGrotesk.className} text-primary-white`}
                        >
                          {testimony.name}
                        </CardTitle>
                        <CardDescription>{testimony.company}</CardDescription>
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
                      <div className="rounded-full border-2 border-primary-red h-9 w-9 flex items-center justify-center">
                        <Image
                          width={20}
                          height={20}
                          src={testimony.image}
                          alt={testimony.text}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle
                          className={`${spaceGrotesk.className} text-primary-white`}
                        >
                          {testimony.name}
                        </CardTitle>
                        <CardDescription>{testimony.company}</CardDescription>
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
