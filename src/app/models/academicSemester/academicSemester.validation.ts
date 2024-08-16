import { string, z } from "zod";
import { academicSemesterConstant } from "./academicSemester.constant";

const academicSemesterValidation = z.object({
    body: z.object({
        name: z.enum([...academicSemesterConstant.academicSemesterName] as [string, ...string[]]),
        code: z.enum([...academicSemesterConstant.academicSemesterCode] as [string, ...string[]]),
        year: z.string(),
        startMonth: z.string(),
        endMonth: z.string(),
    })
});

export const academicSemesterValidations = {
    academicSemesterValidation
};