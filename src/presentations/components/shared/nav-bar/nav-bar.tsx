import Image from "next/image";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { Equal } from "lucide-react";
import { spaceGrotesk } from "@/presentations/fonts/fonts";

export const NavBar = () => {
  return (
    <header className="sticky z-50 top-0 bg-primary-black/20 backdrop-blur-xl border-b border-primary-white/[0.3]">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div>
          <Link href={"/"} className="flex items-center space-x-1">
            <Image
              src={"/logos/B ONDEANDO NARANJA.svg"}
              width={25}
              height={25}
              alt="logo-mobile"
              className="w-[25px] h-[25px] md:hidden"
            />

            <Image
              src={"/logos/logo-basik-oscuro.svg"}
              width={60}
              height={60}
              alt="logo-mobile"
              className="w-[60px] h-[60px] hidden md:block"
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href={"/#service"}
            className={`${spaceGrotesk.className} text-sm font-medium text-primary-white/80 hover:text-white transition-colors`}
          >
            <span>Servicios</span>
          </Link>

          <Link
            href={"/#philosophy"}
            className={`${spaceGrotesk.className} text-sm font-medium text-primary-white/80 hover:text-white transition-colors`}
          >
            <span>Filosofia</span>
          </Link>

          <Link
            href={"#"}
            className={`${spaceGrotesk.className} text-sm font-medium text-primary-white/80 hover:text-white transition-colors`}
          >
            <span>Contacto</span>
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Link
            href={"#"}
            className="bg-primary-red transition-all duration-300 transform active:bg-secondary-red hover:bg-secondary-red hover:scale-105 text-white rounded-full py-2 px-4 md:px-6 md:h-10"
          >
            <span
              className={`${spaceGrotesk.className} text-xs md:text-sm font-family-body font-semibold text-primary-white`}
            >
              Agendar consultoria
            </span>
          </Link>

          <div className="flex md:hidden items-center justify-center">
            <Popover>
              <PopoverTrigger className="h-8 w-8 flex justify-center items-center active:rounded-md active:bg-primary-white/[0.2]">
                <Equal className="text-primary-white" />
              </PopoverTrigger>
              <PopoverContent className="w-screen bg-primary-white/[0.1] backdrop-blur-xl border-0 mt-3">
                <div className="flex flex-col items-center space-y-2">
                  <Link
                    href={"/#service"}
                    className={`${spaceGrotesk.className} font-medium font-family-body text-primary-white/80 active:text-primary-red hover:text-primary-red transition-colors h-8`}
                  >
                    <span>Servicios</span>
                  </Link>

                  <Link
                    href={"/#philosophy"}
                    className={`${spaceGrotesk.className} font-medium font-family-body text-primary-white/80 active:text-primary-red hover:text-primary-red transition-colors h-8`}
                  >
                    <span>Filosofia</span>
                  </Link>

                  <Link
                    href={"#"}
                    className={`${spaceGrotesk.className} font-medium font-family-body text-primary-white/80 active:text-primary-red hover:text-primary-red transition-colors h-8`}
                  >
                    <span>Contacto</span>
                  </Link>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </header>
  );
};
