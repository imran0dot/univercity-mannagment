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

academicSemesterSchema.pre('save', async function(next){
    const isSemesterExist = await academicSemesterModel.findOne({
        name: this.name,
        year: this.year
    });
    if(isSemesterExist){
        throw new Error('semester is already exists !')
    };
    next();
})

const academicSemesterModel = mongoose.model<TAcademicSemester>('AcademicSemester', academicSemesterSchema);
export default academicSemesterModel;