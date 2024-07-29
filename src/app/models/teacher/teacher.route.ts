import { Router } from "express";
import { TeacherController } from "./teacher.controller";

const router = Router();

// create teacher 
router.get('/', TeacherController.getAllTeachers)

export const TeacherRoutes = router;