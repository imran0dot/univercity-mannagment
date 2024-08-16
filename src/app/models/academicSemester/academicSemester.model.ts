import mongoose from "mongoose";
import { TAcademicSemester } from "./academicSemester.interface";
import { academicSemesterConstant } from "./academicSemester.constant";

const academicSemesterSchema = new mongoose.Schema<TAcademicSemester>({
    name: {
        type: String,
        required: true,
        enum: academicSemesterConstant.academicSemesterName,
    },
    code: {
        type: String,
        required: true,
        enum: academicSemesterConstant.academicSemesterCode,
    },
    year: {
        type: String,
        required: true
    },
    startMonth: {
        type: String,
        enum: academicSemesterConstant.months,
        required: true
    },
    endMonth: {
        type: String,
        enum: academicSemesterConstant.months,
        required: true
    }
},
    {
        timestamps: true
    }
);


const academicSemesterModel = mongoose.model<TAcademicSemester>('AcademicSemister', academicSemesterSchema);
export default academicSemesterModel;