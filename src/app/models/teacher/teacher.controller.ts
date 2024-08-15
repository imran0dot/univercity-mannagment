import sendResponse from "../../utils/sendResponse";
import TeacherModel from "./teacher.model";
import cathAsync from "../../utils/cathAsync";

// All Get Request 

const getAllTeachers = cathAsync(async(req, res) => {
    const result = await TeacherModel.find();
    sendResponse(res, {
        message: 'Student are retrieved successfully', 
        data: result, 
        statusCode: 200,
        success: true
    })
})

const getSingelTeacher =  cathAsync(async ( req, res ) => {
        const { id } = req.query;
        const result = await TeacherModel.findById(id);

        if(result){
            sendResponse(res, {
                message: 'Teacher got retrieved successfully', 
                data: result, 
                statusCode: 200,
                success: true
            })
        }else{
            sendResponse(res, {
                message: 'Teacher got retrieved successfully', 
                data: result, 
                statusCode: 505,
                success: true
            })
        };
    });


export const TeacherController = {
    getAllTeachers,
    getSingelTeacher
}