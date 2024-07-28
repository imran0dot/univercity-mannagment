import mongoose from "mongoose";
import { TUser
    
 } from "./user.interface";
 const userSchema = new mongoose.Schema<TUser>({
    id: {
        type: String,
        required: true,
        validate: {
            validator: (value: string) => value.trim() !== "",
            message: "ID must not be empty"
        }
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: (value: string) => value.trim() !== "",
            message: "Password must not be empty"
        }
    },
    needsPasswordChange: {
        type: Boolean,
        default: true
    },
    status: {
        type: String,
        enum: ['in-progress', 'blocked'],
        default: 'in-progress',
        validate: {
            validator: (value: string) => ['in-progress', 'blocked'].includes(value),
            message: "Status must be either 'in-progress' or 'blocked'"
        }
    },
    role: {
        type: String,
        enum: ['admin', 'student', 'teacher'],
        required: true,
        validate: {
            validator: (value: string) => ['admin', 'student', 'teacher'].includes(value),
            message: "Role must be either 'admin', 'student', or 'teacher'"
        }
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
});

const userModel = mongoose.model('User', userSchema);

export default userModel;