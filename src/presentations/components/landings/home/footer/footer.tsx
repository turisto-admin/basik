import { spaceGrotesk } from "@/presentations/fonts/fonts";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-primary-black flex space-x-1 justify-between items-center px-4 md:px-24 mt-10 h-[80px]">
      <div className="">
        <Link href={"/"}>
          <Image
            src={"/assets/logos-tipos/Icono B (Especial) Logo Blanco.svg"}
            width={40}
            height={40}
            alt="logo-basik-footer"
            className="h-[40px] w-[40px] md:h-[60px] md:w-[60px]"
          />
        </Link>
      </div>

      <div className="">
        <p
          className={`${spaceGrotesk.className} text-primary-white text-xs md:text-base`}
        >
          &copy; {new Date().getFullYear()} Basik Todos los derechos reservados.
        </p>
      </div>

      <div className="flex items-center space-x-4">
        <Link href={"https://www.instagram.com/basik_ads"} target="_blank">
          <Image
            src={"/social-media/INSTAGRAM BLANCO.svg"}
            width={25}
            height={25}
            alt="instagram"
            className="h-[20px] w-[20px] md:h-[25px] md:w-[25px]"
          />
        </Link>

        <Link
          href={
            "https://wa.me/17868218592?text=Hola! Me gustaría saber más sobre sus servicios."
          }
          target="_blank"
        >
          <Image
            src={"/social-media/WHATSAPP BLANCO.svg"}
            width={25}
            height={25}
            alt="whatsapp"
            className="h-[20px] w-[20px] md:h-[25px] md:w-[25px]"
          />
        </Link>
      </div>
    </footer>
  );
};
