import { z } from "zod";

export const signinSchema = z.object({
    email: z.string().email(),
    password: z.string().min(5, {
        message: "Password should not be less than 5 characters"
    }),

})