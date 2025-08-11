"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import "react-international-phone/style.css";
import "@/presentations/styles/input-number/input-number.css";
import { PhoneInput } from "react-international-phone";

import { neueKaine, spaceGrotesk } from "@/presentations/fonts/fonts";
import { Footer } from "../../landings/home/footer/footer";
import { BackgroundAnimation } from "../../shared/background-animation/bg-animation";

import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Textarea } from "../../ui/textarea";

import { ArrowRight, LoaderCircle, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  ContactForm,
  ContactSchema,
} from "@/application/landing/schemas/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { SendEmailContact } from "@/application/use-cases/contact/send-email.action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

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
  const form = useForm<ContactForm>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      fullName: "".toLowerCase(),
      email: "".toLowerCase(),
      phone: "",
      revenue: "".toLowerCase(),
      description: "".toLowerCase(),
    },
  });

  const router = useRouter();

  useEffect(() => {
    const savedEmail = localStorage.getItem("ads");
    if (savedEmail) {
      form.setValue("email", savedEmail);
    }
  }, [form]);

  const handleSubmit = async (data: ContactForm) => {
    try {
      const result = await SendEmailContact(data);
      if (result.success && result.data) {
        toast.success("Email enviado correctamente");

        localStorage.setItem("ads", "");

        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error del servidor - Intente de nuevo");
    }
  };
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
          <div className="bg-primary-white/[0.1] backdrop-blur-xl rounded-3xl">
            <div className="p-7">
              <form onSubmit={form.handleSubmit(handleSubmit)}>
                {/* nombre */}
                <div className="mt-7 flex flex-col">
                  <Label htmlFor="full-name">Nombre Completo</Label>
                  <Input
                    id="full-name"
                    type="text"
                    placeholder="Nombre completo"
                    className="focus-visible:outline-hidden focus-visible:ring-0 border-0 shadow-none bg-primary-white/[0.05] placeholder:text-sm placeholder:text-primary-white/[0.8] mt-3 lowercase"
                    {...form.register("fullName")}
                  />
                  {form.formState.errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.fullName.message}
                    </p>
                  )}
                </div>
                {/* email */}
                <div className="mt-7 flex flex-col">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="text"
                    placeholder="Email"
                    className="focus-visible:outline-hidden focus-visible:ring-0 border-0 shadow-none bg-primary-white/[0.05] placeholder:text-sm placeholder:text-primary-white/[0.8] mt-3 lowercase"
                    {...form.register("email")}
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
                {/* telefono */}
                <div className="mt-7 flex flex-col">
                  <Label htmlFor="phone">Telefono</Label>
                  <div className="flex space-x-2 items-center mt-2">
                    <PhoneInput
                      defaultCountry="us"
                      value={form.watch("phone")}
                      onChange={(phone) => form.setValue("phone", phone)}
                      inputStyle={{
                        width: "100%",
                      }}
                      style={{
                        width: "100%",
                      }}
                    />
                  </div>
                  {form.formState.errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.phone.message}
                    </p>
                  )}
                </div>
                {/* Cuanto genera */}
                <div className="mt-7">
                  <Label htmlFor="earnings">¿Cuanto genera tu negocio?</Label>
                  <Select
                    value={form.watch("revenue")}
                    onValueChange={(value) => form.setValue("revenue", value)}
                  >
                    <SelectTrigger className="focus-visible:outline-hidden focus-visible:ring-0 w-full border-0 shadow-none bg-primary-white/[0.05] placeholder:text-sm mt-2">
                      <SelectValue
                        placeholder="Selecciona una opción"
                        className="placeholder:text-primary-white/[0.8]"
                      />
                    </SelectTrigger>
                    <SelectContent className="focus-visible:outline-hidden focus-visible:ring-0 border-0 shadow-none bg-primary-white/[0.05] backdrop-blur-xl">
                      <SelectItem
                        className="text-primary-white p-2 cursor-pointer"
                        value="Menos de 1.000$"
                      >
                        Menos de 1.000$
                      </SelectItem>
                      <SelectItem
                        className="text-primary-white p-2 cursor-pointer"
                        value="1.000$/10.000$"
                      >
                        1.000$/10.000$
                      </SelectItem>
                      <SelectItem
                        className="text-primary-white p-2 cursor-pointer"
                        value="10.000$/100.000$"
                      >
                        10.000$/100.000$
                      </SelectItem>

                      <SelectItem
                        className="text-primary-white p-2 cursor-pointer"
                        value="Más de 100.000$"
                      >
                        Más de 100.000$
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* descripcion */}
                <div className="mt-7">
                  <Label htmlFor="description">Describe tu negocio</Label>
                  <Textarea
                    placeholder="Describe tu negocio y plantea tu problema"
                    className="h-[7rem] md:h-[120px] focus-visible:outline-hidden focus-visible:ring-0 border-0 shadow-none bg-primary-white/[0.05] placeholder:text-sm mt-2"
                    maxLength={700}
                    {...form.register("description")}
                  />
                  {form.formState.errors.description && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.description.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-primary-red hover:bg-secondary-red active:bg-secondary-red text-primary-white flex justify-center items-center space-x-2 rounded-2xl py-2 px-5 w-full mt-5 cursor-pointer"
                >
                  <span
                    className={`${spaceGrotesk.className} font-medium text-sm md:text-base`}
                  >
                    {form.formState.isSubmitting ? (
                      <LoaderCircle
                        size={18}
                        className="text-primary-white animate-spin"
                      />
                    ) : (
                      "Consultar"
                    )}
                  </span>
                  <ArrowRight
                    size={18}
                    className={`${form.formState.isSubmitting ? "hidden" : "text-primary-white font-medium"} `}
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
