import app from "../app";
import { academicSemesterRoutes } from "../app/models/academicSemester/academicSemester.route";
import { StudentRoutes } from "../app/models/student/student.rout";
import { TeacherRoutes } from "../app/models/teacher/teacher.route";
import { userRouts } from "../app/models/user/user.route";
import express from "express";

export const router = express.Router();

const routes = [
    {
        path: '/students' ,
        rout: StudentRoutes
    },
    {
        path: '/users' ,
        rout: userRouts
    },
    {
        path: '/teachers' ,
        rout: TeacherRoutes
    },
    {
        path: '/academic-semester' ,
        rout: academicSemesterRoutes
    }
];

routes.forEach(route => router.use(route.path, route.rout))