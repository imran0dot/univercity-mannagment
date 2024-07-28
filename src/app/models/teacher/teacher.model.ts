import mongoose, { Types } from "mongoose";
import { TTeacher } from "./teacher.interface";

const TeacherSchema = new mongoose.Schema<TTeacher>({
    id: {
      type: String,
      required: [true, 'Teacher ID is required'],
      unique: true,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: [true, 'User reference is required'],
    },
    name: {
      type: {
        firstName: { type: String, required: [true, 'First name is required'] },
        lastName: { type: String, required: [true, 'Last name is required'] },
        middleName: { type: String },
      },
      required: [true, 'Teacher name is required'],
    },
    gender: {
      type: String,
      enum: ['male' , 'female'],
      required: [true, 'Gender is required'],
    },
    dateOfBirth: {
      type: String,
      required: [true, 'Date of birth is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    contactNo: {
      type: String,
      required: [true, 'Contact number is required'],
    },
    emergencyContactNo: {
      type: String,
      required: [true, 'Emergency contact number is required'],
    },
    presentAddress: {
      type: String,
      required: [true, 'Present address is required'],
    },
    permanentAddress: {
      type: String,
      required: [true, 'Permanent address is required'],
    },
    profileImg: {
      type: String,
      required: [true, 'Profile image is required'],
    },
    academicDepartment: {
      type: String,
      enum: [
        'English',
        'History',
        'Sociology',
        'Marketing',
        'Management',
        'CSC',
        'Crop Science',
        'Agriculture',
        'Political Science',
        'Civil Engineering',
        'Pharmacy',
        'Social Work',
        'Philosophy',
        'Accounting',
      ],
      required: [true, 'Academic department is required'],
    },
    academicFaculty: {
      type: String,
      enum: [
        'Faculty of Arts',
        'Faculty of Social Science',
        'Faculty of Business Studies',
        'Faculty of Agriculture',
        'Faculty of Science',
      ],
      required: [true, 'Academic faculty is required'],
    },
  });


const TeacherModel = mongoose.model<TTeacher>('Teacher', TeacherSchema);
export default TeacherModel;