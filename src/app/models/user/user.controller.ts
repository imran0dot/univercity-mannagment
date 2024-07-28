import { Request, Response } from "express"
import { UserServices } from "./user.service";

const createStudent = async (req: Request, res: Response) => {
    try{
        const {password} = req.body;
        const result = await UserServices.createStudentIntoDB()

        res.send({
            error: true,
            isSuccess: false,
            message: '',
        })
    }
    catch(err){
        res.send({
            error: true,
            isSuccess: false,
            message: err,
        })
    }
};

export const UserControllers = {
    createUser,
}