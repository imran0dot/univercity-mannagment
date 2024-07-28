import config from "../../config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TTeacher } from "../teacher/teacher.interface";
import TeacherModel from "../teacher/teacher.model";
import { TUser } from "./user.interface";
import userModel from "./user.model";

const createStudentIntoDB = async(password: string, studentData: TStudent) => {
    // set student user
    const userData: Partial<TUser> = {};

    userData.password = password || (config.default_pass as string);
    userData.role = 'student',

    //set manually generated id
    userData.id = '203010000004'

    const createdNewUser = await userModel.create(userData);

    if(Object.keys(createdNewUser).length){
        studentData.id = createdNewUser.id;
        studentData.user = createdNewUser._id;

        const newStudent = await Student.create(studentData);
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