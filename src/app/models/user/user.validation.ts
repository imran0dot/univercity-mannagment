import { z } from "zod";

const userValidationSchema = z.object({
    id: z.string(),
    password: z.string().max(20, {message: 'password cannot be more then 20 characters'}),
    needsPasswordChange: z.boolean().optional().default(true),
    status: z.enum(["in-progress", "blocked"]).default("in-progress"),
    role: z.enum(["admin", "student", "teacher"]),
    isDeleted: z.boolean().default(false)
});

export const userValidation = {
    userValidationSchema
}