"use client";
import Link from "next/link";

import "react-international-phone/style.css";
import "@/presentations/styles/input-number/input-number.css";

import { neueKaine, spaceGrotesk } from "@/presentations/fonts/fonts";
import { Footer } from "../../landings/home/footer/footer";
import { BackgroundAnimation } from "../../shared/background-animation/bg-animation";

import { Mail, Phone } from "lucide-react";

import { FormComponentContact } from "../../landings/form/contact/form-contact";

export const ContactComponent = () => {
  return (
    <div className="relative">
      <BackgroundAnimation />
      <FormComponent />
      <Footer />
    </div>
  );
};

const FormComponent = () => {
  return (
    <div className="relative">
      {/* container */}
      <div
        className={`${spaceGrotesk.className} text-primary-white pt-18 md:pt-0 mx-3 sm:mx-6 xl:mx-28 min-h-screen flex justify-center items-center`}
      >
        <div className="grid grid-cols-1 space-y-8 md:space-y-0 md:space-x-8 md:grid-cols-2">
          {/* main message */}
          <div>
            <p
              className={`text-center md:text-left md:text-xl font-semibold text-primary-white/[0.7]`}
            >
              Estamos aquí para ayudarte
            </p>
            <h2
              className={`${neueKaine.className} text-center md:text-left font-black text-3xl md:text-5xl mt-6`}
            >
              {" "}
              No importa el tamaño de tu idea, estamos aquí para convertirla en
              un éxito
            </h2>
            <div className="mt-10 md:mt-5">
              <div className="flex flex-col justify-center px-3 md:px-0">
                <div className="flex space-x-2 items-center mb-3">
                  <Mail
                    size={30}
                    className="text-primary-red h-[20px] w-[20px] md:h-[30px] md:w-[30px]"
                  />
                  <div>
                    <p className="text-primary-white font-semibold">Email</p>
                    <p className="text-primary-white">support@basik.pro</p>
                  </div>
                </div>
                <div className="flex space-x-2 items-center">
                  <Phone
                    size={30}
                    className="text-primary-red h-[20px] w-[20px] md:h-[30px] md:w-[30px]"
                  />
                  <div>
                    <p className="text-primary-white font-semibold">Whatsapp</p>
                    <Link
                      href={
                        "https://wa.me/17868218592?text=Hola! Me gustaría saber más sobre sus servicios."
                      }
                      target="_blank"
                      className="text-primary-white font-medium hover:text-primary-red underline hover:underline active:text-primary-red"
                    >
                      {"+1 (786) 821-8592"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* form */}
          <FormComponentContact />
        </div>
      </div>
    </div>
  );
};
