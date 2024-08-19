import config from "../../config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TTeacher } from "../teacher/teacher.interface";
import TeacherModel from "../teacher/teacher.model";
import { TUser } from "./user.interface";
import userModel from "./user.model";
import { generateStudentId } from "./user.utils";

const createStudentIntoDB = async(password: string, payload: TStudent) => {
    // set student user
    const userData: Partial<TUser> = {};
    userData.password = password || (config.default_pass as string);
    userData.role = 'student',

    //set generated id
    userData.id = await generateStudentId(payload.academicSemester);

    const createdNewUser = await userModel.create(userData);

    if(Object.keys(createdNewUser).length){
        payload.id = createdNewUser.id;
        payload.user = createdNewUser._id;

        const newStudent = await Student.create(payload);
        return newStudent;
    }
    
};


const createTeacherIntoDB = async(password: string, teacherData: TTeacher) => {
    // set student user
    const userData: Partial<TUser> = {};

    userData.password = password || (config.default_pass as string);
    userData.role = 'teacher',

    //set manually generated id
    userData.id = '203010000004'

    const createdNewUser = await userModel.create(userData);
    if(Object.keys(createdNewUser).length){
        teacherData.id = createdNewUser.id;
        teacherData.user = createdNewUser._id;
        try{
            const newTeacher = await TeacherModel.create(teacherData);
            return newTeacher;
        }
        catch(err){
            const deleteTeacher = await userModel.findOneAndDelete(createdNewUser._id);
            throw new Error('Teacher is not created and user has been deleted!' + deleteTeacher);
        }
    }
    
};

export const UserServices = {
    createStudentIntoDB,
    createTeacherIntoDB,
}