import { Types } from "mongoose";
import { TUserName } from "../student/student.interface";

export interface TTeacher {
    id: string;
    user: Types.ObjectId;
    name: TUserName;
    gender: 'male' | 'female' ;
    dateOfBirth: string;
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
    profileImg: string;
    academicDepartment: 'English' | 'History' | 'Sociology' | 'Marketing' | 'Management' | 'CSC' | 'Crop Science' | 'Agriculture' | 'Political Science' | 'Civil Engineering' | 'Pharmacy' | 'Social Work' | 'Philosophy' | 'Accounting' ;
    academicFaculty: 'Faculty of Arts' | 'Faculty of Social Science' | 'Faculty of Business Studies' | 'Faculty of Agriculture' | 'Faculty of Science';
}