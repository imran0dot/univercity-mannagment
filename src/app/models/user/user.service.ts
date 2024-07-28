import config from "../../config";
import { TUser } from "./user.interface";
import userModel from "./user.model";

const createStudentIntoDB = async(password: string, studentData) => {
    // set student user
    const userData: Partial<TUser> = {};

    userData.password = password || (config.default_pass as string);
    userData.role = 'student',

    //set manually generated id
    userData.id = '203010000001'

    const createdUser = await userModel.create(userData);

    if(Object.keys(createdUser).length){
        studentData.id = createdUser.id;
        studentData.user = createdUser._id;
    }
    const createStudent = await userModel.create(userData);


};

export const UserServices = {
    createStudentIntoDB,
}