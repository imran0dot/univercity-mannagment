import httpStatus from "http-status";
import cathAsync from "../../utils/cathAsync";
import sendResponse from "../../utils/sendResponse";
import { academicSemesterServices } from "./academicSemester.service";


const createAcademicSemester = cathAsync(async (req, res) => {
    const result = await academicSemesterServices.createAcademicSemesterIntoDb(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic semester is created successfully',
        data: result
    })
});

const getAllAcademicSemester = cathAsync(async (req, res) => {
    const result = await academicSemesterServices.getAllAcademicSemesterFromDb();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic Semester get successfully',
        data: result
    })
});

const getSingleAcademicSemester = cathAsync(async (req, res) => {
    const { id } = req.params;
    if (!id) {
        throw new Error('please insert id')
    };
    const result = await academicSemesterServices.getSingleAcademicSemesterFromDb(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic Semester get successfully',
        data: result
    })
});

const updateSingleSemester = cathAsync(async (req, res) => {
    const { id } = req.params;
    const result = await academicSemesterServices.updateSingleAcademicSemesterFromDb(id, req.body);
    
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic Semester get successfully',
        data: result
    })
})


export const academicSemesterControllers = {
    createAcademicSemester,
    getAllAcademicSemester,
    getSingleAcademicSemester,
    updateSingleSemester
}