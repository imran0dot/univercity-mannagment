import express from "express";
import { academicSemesterControllers } from "./academicSemester.controller";
import data_validation_schema from "../../middlewares/data_validation";
import { academicSemesterValidations } from "./academicSemester.validation";

const router = express.Router();

router.post('/create-academic-semester', data_validation_schema(academicSemesterValidations.academicSemesterValidation), academicSemesterControllers.createAcademicSemester );

router.patch('/update-academic-semester',data_validation_schema(academicSemesterValidations.academicSemesterValidation),
academicSemesterControllers.updateSingleSemester);

router.get('/', academicSemesterControllers.getAllAcademicSemester);

router.get('/:id', academicSemesterControllers.getSingleAcademicSemester);

router.patch('/:id', data_validation_schema(academicSemesterValidations.academicSemesterValidation), academicSemesterControllers.updateSingleSemester);


export const academicSemesterRoutes = router;