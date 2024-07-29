import { Request, Response } from "express";
import default_try_catch from "../../utils/default_try_catch";
import sendResponse from "../../utils/sendResponse";

// All Get Request 
const getAllTeachers = async (
    req: Request, 
    res: Response) => {
        default_try_catch(() => {
            sendResponse(res, {
                message: 'hi teacher', 
                data: 'data will come here', 
                statusCode: 200,
                success: true
            })
    })
};

export const TeacherController = {
    getAllTeachers
}