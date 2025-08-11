import {z} from "zod"
export type ContactForm = z.infer<typeof ContactSchema>;

export const ContactSchema = z.object({
  fullName: z.string().min(2, "El nombre debe tener al menos 2 caracteres").toLowerCase(),
  email: z.email("Ingresa un email válido").toLowerCase(),
  phone: z.string().min(5, "Ingresa un teléfono válido"),
  revenue: z.string().toLowerCase(),
  description: z.string().min(10, "La descripción debe tener al menos 10 caracteres").toLowerCase()
});