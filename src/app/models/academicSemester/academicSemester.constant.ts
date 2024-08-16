import { TAcademicSemesterCode, TAcademicSemesterName, TMonth } from "./academicSemester.interface";

const months: TMonth[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const academicSemesterName: TAcademicSemesterName[] = ["Autumn" , "Summer" , "Fall"];
const academicSemesterCode: TAcademicSemesterCode[] = ["01" , "02" , "03"];

export const academicSemesterConstant = {
    months,
    academicSemesterName,
    academicSemesterCode
}