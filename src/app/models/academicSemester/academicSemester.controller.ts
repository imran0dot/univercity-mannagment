import httpStatus from "http-status";
import cathAsync from "../../utils/cathAsync";
import sendResponse from "../../utils/sendResponse";
import { academicSemesterServices } from "./academicSemester.service";


const createAcademicSemester = cathAsync(async (req, res) => {
    const result = await academicSemesterServices.createAcademicSemesterIntoDb(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Acadimc Semster is created succesfully',
        data: result
    })
});


export const academicSemesterControllers = {
    createAcademicSemester
}