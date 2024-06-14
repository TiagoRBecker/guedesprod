import * as z from "zod";

export const contact = z.object({
  name: z.string().min(1, { message: "Necessário  preencher o campo nome" }),
  email: z
    .string()
    .email({ message: "Insira um email válido" })
    .min(1, { message: "Necessário  preencher o email" }),
  phone: z.string().min(11, {
    message: "Necessário  preencher o campo telefone com 11 dígitos",
  }),

  message: z
    .string()
    .min(1, { message: "Necessário prrencher o campo mensagem" }),
});
export const checkout = z.object({
  name: z.string().min(1, { message: "Necessário  preencher o campo nome" }),
  email: z
    .string()
    .email({ message: "Insira um email válido" })
    .min(1, { message: "Necessário  preencher o campo email" }),
  phone: z.string().min(11, {
    message: "Necessário  preencher o campo telefone com 11 dígitos",
  }),
  city: z.string().min(1, { message: "Necessário  preencher o campo cidade" }),
  doc: z
  .string()
  .refine((value) => value.length >= 11 && value.length <= 14, {
    message: "O campo deve ter entre 11 e 14 dígitos",
  }),
  
});
export const login = z.object({
  email: z
    .string()
    .email({ message: "Insira um email válido" })
    .min(1, { message: "Necessário  preencher o campo email" }),
  password: z
    .string()
    .min(5, { message: "Necessário  preencher o campo senha" }),
});
export const create = z.object({
  name: z.string().min(1, { message: "Necessário  preencher o campo nome" }),
  email: z
    .string()
    .email({ message: "Insira um email válido" })
    .min(1, { message: "Necessário  preencher o email" }),
  profession: z.string().min(1,{message:"Necessário preencher o campo da atuação"}),
  docs: z.string().min(1,{message:"Necessário preencher o campo Registro"}),
  password: z
    .string()
    .min(5, { message: "Necessário  preencher o campo senha" }),
    confirm: z
    .string()
    .min(5, { message: "Necessário  preencher o campo senha" }),
})
.refine((data) => data.password === data.confirm, {
  message: "As senhas não combinam",
  path: ["confirm"], // path of error
})

export type Icreate = z.infer<typeof create>;
export type Ilogin = z.infer<typeof login>;
export type Ichekout = z.infer<typeof checkout>;
export type Icontact = z.infer<typeof contact>;
