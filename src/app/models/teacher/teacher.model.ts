import mongoose, { Types } from "mongoose";
import { TTeacher } from "./teacher.interface";

const teacherSchema = new mongoose.Schema<TTeacher>({
    id: {
      type: String,
      required: true,
      unique: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        middleName: { type: String },
      },
      required: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'others'],
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    contactNo: {
      type: Number,
      required: true,
    },
    emergencyContactNo: {
      type: Number,
      required: true,
    },
    presentAddress: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      required: true,
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
      required: true,
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
      required: true,
    },
  });