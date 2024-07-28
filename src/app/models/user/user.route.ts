import { Router } from "express";
import { UserControllers } from "./user.controller";

const router = Router();

// TODO 
router.post('/create-user', UserControllers.createStudent);
router.post('/create-teacher', UserControllers.createTeacher);

export const userRouts = router;