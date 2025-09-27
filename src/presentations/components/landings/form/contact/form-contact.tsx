"use client";

import {
  ContactForm,
  ContactSchema,
} from "@/application/landing/schemas/contact.schema";
import { Button } from "@/presentations/components/ui/button";
import { Calendar } from "@/presentations/components/ui/calendar";
import { Label } from "@/presentations/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/presentations/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/presentations/components/ui/select";
import { Textarea } from "@/presentations/components/ui/textarea";
import { spaceGrotesk } from "@/presentations/fonts/fonts";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, ChevronDownIcon, LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { PhoneInput } from "react-international-phone";
import { Input } from "@/presentations/components/ui/input";
import { SendEmailContact } from "@/application/use-cases/contact/send-email.action";
import { CreateEventMeeting } from "@/application/use-cases/contact/meeting.action";
import { parseTime } from "@/presentations/lib/parse-time/parse-time";
import { SendEmailReceivedContact } from "@/application/use-cases/contact/send-email-received.action";

export const FormComponentContact = () => {
  const [open, setOpen] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      fullName: "".toLowerCase(),
      email: "".toLowerCase(),
      phone: "",
      revenue: "".toLowerCase(),
      description: "".toLowerCase(),
      dateMeeting: "",
      timeMeeting: "",
    },
  });

  const router = useRouter();

  useEffect(() => {
    const savedEmail = localStorage.getItem("ads");
    if (savedEmail) {
      form.setValue("email", savedEmail);
    }
  }, [form]);

  const dateValue = form.watch("dateMeeting");

  const handleSubmit = async (data: ContactForm) => {
    const { dateMeeting, timeMeeting } = data;

    try {
      if (dateMeeting && timeMeeting) {
        const selectedDate = new Date(dateMeeting);

        const { hours, minutes } = parseTime(timeMeeting);

        selectedDate.setHours(hours, minutes, 0, 0);

        const startDateTime = selectedDate.toISOString();

        const endDateTime = new Date(
          selectedDate.getTime() + 60 * 60 * 1000
        ).toISOString();

        await CreateEventMeeting({
          summary: data.email,
          description: data.description,
          start: {
            dateTime: startDateTime,
            timeZone: "America/Caracas",
          },
          end: {
            dateTime: endDateTime,
            timeZone: "America/Caracas",
          },
        });
      }

      const result = await SendEmailContact(data);

      if (result.success && result.data) {
        toast.success(
          "Email enviado correctamente, nos comunicaremos pronto con usted."
        );

        await SendEmailReceivedContact({
          fullName: data.fullName,
          email: data.email,
        });

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
              className="focus-visible:outline-hidden focus-visible:ring-0 border-0 shadow-none bg-primary-white/[0.05] placeholder:text-sm placeholder:text-primary-white/[0.8] mt-3"
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
              className="focus-visible:outline-hidden focus-visible:ring-0 border-0 shadow-none bg-primary-white/[0.05] placeholder:text-sm placeholder:text-primary-white/[0.8] mt-3"
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
          {/* Date and time */}
          <div className="mt-7 flex flex-col">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* date */}
              <div className="flex flex-1 flex-col gap-3">
                <Label htmlFor="date-picker" className="px-1">
                  Agenda una cita <span>( Opcional )</span>
                </Label>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger
                    asChild
                    className="focus:bg-primary-white/[0.05] backdrop-blur-xl flex justify-between cursor-pointer"
                  >
                    <Button
                      variant="outline"
                      id="date-picker"
                      className="focus-visible:outline-hidden focus-visible:ring-0 w-full border-0 shadow-none bg-primary-white/[0.05] placeholder:text-sm"
                    >
                      {dateValue
                        ? new Date(dateValue).toLocaleDateString("es-ES", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                        : "Selecciona una fecha"}
                      <ChevronDownIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="focus-visible:outline-hidden focus-visible:ring-0 border-0 shadow-none bg-primary-white/[0.9] backdrop-blur-xl w-full "
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={dateValue ? new Date(dateValue) : undefined}
                      captionLayout="dropdown"
                      onSelect={(date) => {
                        form.setValue("dateMeeting", date?.toISOString() || "");
                        setOpen(false);
                      }}
                    />
                  </PopoverContent>
                </Popover>
                {form.formState.errors.dateMeeting && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.dateMeeting.message}
                  </p>
                )}
              </div>

              {/* time */}
              <div className="flex flex-col gap-3">
                <Label htmlFor="time-picker" className="px-1">
                  Hora
                </Label>
                <Select
                  value={form.watch("timeMeeting")}
                  onValueChange={(value) => form.setValue("timeMeeting", value)}
                >
                  <SelectTrigger className="focus-visible:outline-hidden focus-visible:ring-0 w-full lg:w-[170px] border-0 shadow-none bg-primary-white/[0.05] placeholder:text-sm cursor-pointer">
                    <SelectValue
                      placeholder="10:00:00AM"
                      className="placeholder:text-primary-white/[0.05]"
                    />
                  </SelectTrigger>
                  <SelectContent className="focus-visible:outline-hidden focus-visible:ring-0 border-0 shadow-none bg-primary-white/[0.05] backdrop-blur-xl">
                    <SelectItem
                      className="text-primary-white p-2 cursor-pointer"
                      value="10:00AM"
                    >
                      10:00AM - 11:00AM
                    </SelectItem>
                    <SelectItem
                      className="text-primary-white p-2 cursor-pointer"
                      value="11:00AM"
                    >
                      11:00AM - 12:00PM
                    </SelectItem>
                    <SelectItem
                      className="text-primary-white p-2 cursor-pointer"
                      value="01:00PM"
                    >
                      01:00PM - 02:00PM
                    </SelectItem>

                    <SelectItem
                      className="text-primary-white p-2 cursor-pointer"
                      value="03:00PM"
                    >
                      03:00PM - 04:00PM
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          {/* Cuanto genera */}
          <div className="mt-7">
            <Label htmlFor="earnings">¿Cuanto genera tu negocio?</Label>
            <Select
              value={form.watch("revenue")}
              onValueChange={(value) => form.setValue("revenue", value)}
            >
              <SelectTrigger className="focus-visible:outline-hidden focus-visible:ring-0 w-full border-0 shadow-none bg-primary-white/[0.05] placeholder:text-sm mt-2 cursor-pointer">
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
              placeholder="Describe tu negocio, nombre de la empresa y describe tu problema"
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

          {/* SUBMIT BUTTON */}
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
  );
};
