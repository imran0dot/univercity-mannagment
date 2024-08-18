import { TAcademicSemester } from "./academicSemester.interface";
import academicSemesterModel from "./academicSemester.model";

const createAcademicSemesterIntoDb = async (payload: TAcademicSemester) => {
    
    // need to same code and seasion 
    type TAcademicSemesterMapper = {
        [key: string] : string
    }
    const academicSemesterMapper:TAcademicSemesterMapper = {
        Autumn: '01',
        Summer: '02',
        Fall: '03'
    };

    if(academicSemesterMapper[payload.name] !== payload.code){
        throw new Error('Year and Code not Matched! Please include write code or year.')
    }
    const result = await academicSemesterModel.create(payload);
    return result;
};

const getAllAcademicSemesterFromDb = async () => {
    const allSemesters = await academicSemesterModel.find();
    return allSemesters;
};

const getSingleAcademicSemesterFromDb = async (id: string) => {
    const result = await academicSemesterModel.find({_id: id});
    return result;
};

const updateSingleAcademicSemesterFromDb = async (id: string, payload: TAcademicSemester) => {
    const result = await academicSemesterModel.findByIdAndUpdate({_id: id}, payload );
    return result;
}

export const academicSemesterServices = {
    createAcademicSemesterIntoDb,
    getAllAcademicSemesterFromDb,
    getSingleAcademicSemesterFromDb,
    updateSingleAcademicSemesterFromDb
}