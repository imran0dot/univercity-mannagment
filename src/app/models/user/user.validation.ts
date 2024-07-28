import { z } from "zod";

const userValidationSchema = z.object({
    password: z
        .string({invalid_type_error: 'password must be string'})
        .max(15, {message: 'password cannot be more then 15 characters'})
        .optional(),
    needsPasswordChange: z
        .boolean()
        .optional()
        .default(true),
});

export const userValidation = {
    userValidationSchema
}