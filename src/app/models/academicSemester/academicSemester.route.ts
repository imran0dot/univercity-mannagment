import express from "express";
import { academicSemesterControllers } from "./academicSemester.controller";
import data_validation_schema from "../../middlewares/data_validation";
import { academicSemesterValidations } from "./academicSemester.validation";

const router = express.Router();

router.post('/create-academic-semester', data_validation_schema(academicSemesterValidations.academicSemesterValidation), academicSemesterControllers.createAcademicSemester );


export const academicSemesterRoutes = router;