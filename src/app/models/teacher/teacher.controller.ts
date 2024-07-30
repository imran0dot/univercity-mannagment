import { Request, Response } from "express";
import default_try_catch from "../../utils/default_try_catch";
import sendResponse from "../../utils/sendResponse";
import TeacherModel from "./teacher.model";

// All Get Request 
const getAllTeachers = async (
    req: Request, 
    res: Response) => {
        default_try_catch( async() => {
            const result = await TeacherModel.find();
            sendResponse(res, {
                message: 'Student are retrieved successfully', 
                data: result, 
                statusCode: 200,
                success: true
            })
    })
};

const getSingelTeacher = async (
        req: Request, 
        res: Response
    ) => {

    default_try_catch(async() => {

        const { id } = req.query;
        const result = await TeacherModel.findById(id);

        if(result){
            sendResponse(res, {
                message: 'Teacher got retrieved successfully', 
                data: result, 
                statusCode: 200,
                success: true
            })
        }

        else{
            sendResponse(res, {
                message: 'Teacher got retrieved successfully', 
                data: result, 
                statusCode: 505,
                success: true
            })
        }
        
    })
}

export const TeacherController = {
    getAllTeachers,
    getSingelTeacher
}