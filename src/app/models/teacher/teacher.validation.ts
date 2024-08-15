import { z } from 'zod';
import { TUserName } from '../student/student.interface';

const userNameSchema: z.ZodType<TUserName> = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .refine((value) => /^[A-Z]/.test(value), {
      message: 'First Name must start with a capital letter',
    }),
  middleName: z.string(),
  lastName: z.string(),
});

export const teacherValidationSchema = z.object({
    body: z.object({
        password: z.string().min(8).max(20),
        teacher: z.object({
            name: userNameSchema,
            gender: z.enum(['male', 'female']),
            dateOfBirth: z.string(),
            email: z.string().email(),
            contactNo: z.string(),
            emergencyContactNo: z.string(),
            presentAddress: z.string(),
            permanentAddress: z.string(),
            profileImg: z.string(),
            academicDepartment: z.enum([
                'English',
                'History',
                'Sociology',
                'Marketing',
                'Management',
                'CSC',
                'Crop Science',
                'Agriculture',
                'Political Science',
                'Civil Engineering',
                'Pharmacy',
                'Social Work',
                'Philosophy',
                'Accounting',
            ]),
            academicFaculty: z.enum([
                'Faculty of Arts',
                'Faculty of Social Science',
                'Faculty of Business Studies',
                'Faculty of Agriculture',
                'Faculty of Science',
            ]),
        })
    })
});


export const teacherValidations = {
    teacherValidationSchema,
}