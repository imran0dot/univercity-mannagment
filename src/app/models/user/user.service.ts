import config from "../../config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import userModel from "./user.model";

const createStudentIntoDB = async(password: string, studentData: TStudent) => {
    // set student user
    const userData: Partial<TUser> = {};

    userData.password = password || (config.default_pass as string);
    userData.role = 'student',

    //set manually generated id
    userData.id = '203010000001'

    const createdNewUser = await userModel.create(userData);

    if(Object.keys(createdNewUser).length){
        studentData.id = createdNewUser.id;
        studentData.user = createdNewUser._id;

        const newStudent = await Student.create(studentData);
        return newStudent;
    }
    
};

export const UserServices = {
    createStudentIntoDB,
}