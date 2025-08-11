import { spaceGrotesk } from "@/presentations/fonts/fonts";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <div className="flex justify-center">
          <Image
            width={100}
            height={100}
            src={"/logos/logo-basik-oscuro.svg"}
            alt="logo-basik"
          />
        </div>
        <div className="">
          <h2
            className={`${spaceGrotesk.className} text-primary-black font-black text-4xl text-center mb-3 mt-5`}
          >
            Page Not Found - 404
          </h2>
          <Link
            className={`${spaceGrotesk.className} px-5 py-2 bg-primary-red rounded-2xl text-primary-white flex justify-center items-center space-x-2`}
            href={"/"}
          >
            <span>Volver a la pagina principal</span>
            <ArrowRight size={18} className="text-primary-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
