import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    needsPasswordChange: {
        type: Boolean,
        default: true,
    },
    status: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin' , 'student' , 'teacher'],
        required: true
    } ,
    isDeleted: {
        type: Boolean,
        required: true
    },
});

const userModel = mongoose.model('User', userSchema);

export default userModel;