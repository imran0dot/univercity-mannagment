import { Request, Response } from "express"
import { UserServices } from "./user.service";

const createStudent = async (req: Request, res: Response) => {
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
        res.status(404).send({
            error: true,
            isSuccess: false,
            message: err,
        })
    }
};

const createTeacher = async (req: Request, res: Response) => {
    try{
        const { password, student: studentData } = req.body;
        const result = await UserServices.createStudentIntoDB(password, studentData);
        res.send({
            error: false,
            isSuccess: true,
            message: result,
        })
    }
    catch (err) {
        res.status(404).send({
            error: true,
            isSuccess: false,
            message: err,
        })
    }
}

export const UserControllers = {
    createStudent,
    createTeacher
}