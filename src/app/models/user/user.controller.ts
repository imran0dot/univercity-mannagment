import { NextFunction, Request, Response } from "express"
import { UserServices } from "./user.service";

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { password, student: studentData } = req.body;
        const result = await UserServices.createStudentIntoDB(password, studentData)
        res.send({
            error: false,
            isSuccess: true,
            message: result,
        })
    }
    catch (err) {
        next(err);
    }
};

const createTeacher = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const { password, teacher: teacherData } = req.body;
        const result = await UserServices.createTeacherIntoDB(password, teacherData);
        res.send({
            error: false,
            isSuccess: true,
            message: result,
        })
    }
    catch (err) {
        next(err)
    }
}

export const UserControllers = {
    createStudent,
    createTeacher
}