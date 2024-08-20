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

    return lastStudent?.id ? lastStudent?.id : undefined;
};


export const generateStudentId = async (payload: string) => {
    const findAcademicSemester = await academicSemesterModel.findOne({ _id: payload });
    const lastStudentId = await lastCreatedStudentId();

    const lastStudentIdYear =  lastStudentId?.substring(0, 4);
    const lastStudentIdCode = lastStudentId?.substring(4, 6);
    
    const currentStudentIdYear = findAcademicSemester?.year;
    const currentStudentIdCode = findAcademicSemester?.code;

    let currentId = (0).toString().padStart(4, '0');

    if(lastStudentId && lastStudentIdYear == currentStudentIdYear && lastStudentIdCode == currentStudentIdCode){
        currentId = lastStudentId.substring(6)
    }


    const incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

    if (findAcademicSemester) {
        const newStudentId =  findAcademicSemester?.year + findAcademicSemester.code + incrementId
        return newStudentId;
    }
    else
         throw new Error('Academic Semester dose not find....')
    };


