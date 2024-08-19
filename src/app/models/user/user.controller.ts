import { UserServices } from "./user.service";
import cathAsync from "../../utils/cathAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";



const createStudent =  cathAsync(async ( req, res ) => {

        const { password, student: studentData } = req.body;
        const result = await UserServices.createStudentIntoDB(password, studentData)

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Student created successfully',
            data: result
        })
});

const createTeacher =  cathAsync(async ( req, res, next ) => {
        const { password, teacher: teacherData } = req.body;
        const result = await UserServices.createTeacherIntoDB(password, teacherData);
        res.send({
            error: false,
            isSuccess: true,
            message: result,
        })
}
);
export const UserControllers = {
    createStudent,
    createTeacher
}