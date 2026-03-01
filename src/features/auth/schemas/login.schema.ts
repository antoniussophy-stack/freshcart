import { z } from "zod";

export const loginschema = z.object({
    email: z.string().nonempty("name is required").pipe(z.email("invalid email address")),
    password: z.string().nonempty("password is requried"),
    rememberMe: z.boolean(),
})

export type loginFormValues = z.infer<typeof loginschema>