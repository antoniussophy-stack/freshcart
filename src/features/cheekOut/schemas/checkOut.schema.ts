import z from "zod";

export const shippingAddressSchema = z.object({

    details: z
        .string()
        .nonempty()
        .min(10, "Address must be at least 10 characters long")
        .max(200, "Address must be at most 200 characters long"),

    phone: z
        .string()
        .nonempty()
        .regex(/^01[0125][0-9]{8}$/, "Invalid Egyptian phone number"),

    city: z
        .string()
        .nonempty()
        .min(2, "City must be at least 2 characters long")
        .max(50, "City must be at most 50 characters long"),
});

export type shippingAddressValues = z.infer<typeof shippingAddressSchema>