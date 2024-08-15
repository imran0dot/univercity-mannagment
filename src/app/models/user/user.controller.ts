import { UserServices } from "./user.service";
import cathAsync from "../../utils/cathAsync";



const createStudent =  cathAsync(async ( req, res ) => {

        const { password, student: studentData } = req.body;
        const result = await UserServices.createStudentIntoDB(password, studentData)
        res.send({
            error: false,
            isSuccess: true,
            message: result,
        })
});

const createTeacher =  cathAsync(async ( req, res, next ) => {
        const { password, teacher: teacherData } = req.body;
        const result = await UserServices.createTeacherIntoDB(password, teacherData);
        res.send({
            error: false,
            isSuccess: true,
            message: result,
        })
}
);
export const UserControllers = {
    createStudent,
    createTeacher
}