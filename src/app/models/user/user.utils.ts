import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import academicSemesterModel from "../academicSemester/academicSemester.model";
import userModel from "./user.model";

const lastCreatedStudentId = async () => {
    const lastStudent = await userModel
        .findOne(
            { role: 'student' }, 
            { id: 1, _id: 0 }
        )
        .sort(
            { 'createdAt': -1 }
        )
        .lean();

    return lastStudent?.id ? Number(lastStudent.id.substring(6)) : undefined;
};


export const generateStudentId = async (payload: string) => {
    const findAcademicSemester = await academicSemesterModel.findOne({ _id: payload });
    const currentId = await lastCreatedStudentId() || 0;
    console.log(currentId);

    const incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

    if (findAcademicSemester) {
        const newStudentId =  findAcademicSemester?.year + findAcademicSemester.code + incrementId
     return newStudentId;
    }
    else
         throw new Error('Academic Semester dose not find....')
    };


