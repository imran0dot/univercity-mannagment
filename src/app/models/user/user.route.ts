import { Router } from "express";
import { UserControllers } from "./user.controller";
import { studentValidationSchema } from "../student/student.validation";
import data_validation_schema from "../../middlewares/data_validation";
import { teacherValidationSchema } from "../teacher/teacher.validation";

const router = Router();



// TODO 
router.post('/create-student', data_validation_schema(studentValidationSchema),  UserControllers.createStudent);
router.post('/create-teacher', data_validation_schema(teacherValidationSchema), UserControllers.createTeacher);

export const userRouts = router;