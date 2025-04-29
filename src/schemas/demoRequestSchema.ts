
import { z } from "zod";

export const demoRequestSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um e-mail válido.",
  }),
  company: z.string().min(2, {
    message: "O nome da empresa deve ter pelo menos 2 caracteres."
  }),
  role: z.string({
    required_error: "Por favor, selecione sua função."
  }),
  employees: z.string({
    required_error: "Por favor, selecione o número de funcionários."
  }),
  message: z.string().optional(),
});

export type DemoRequestFormData = z.infer<typeof demoRequestSchema>;
