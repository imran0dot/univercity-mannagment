import { Router } from "express";
import { UserControllers } from "./user.controller";

const router = Router();

// TODO 
router.post('/create-user', UserControllers.createUser);

export const userRouts = router;