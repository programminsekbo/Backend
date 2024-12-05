import mongoose from "mongoose";

const DataSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phone: {type: String, required: true},
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please fill a valid email address']
    },
    password: {type: String, required: true},
    otp : {type: Number, default:0},
    status: {type: Number, default:0},
},{timestamps: true, versionKey: false});

export const UserModel = mongoose.model('users', DataSchema)