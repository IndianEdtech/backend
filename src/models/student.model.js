import mongoose from 'mongoose';
const { Schema } = mongoose;

const studentSchema = new Schema({
    studentName : {
        type:String,
        required:true,
    },
    studentClass : {
        type:String,
        required:true,
    },
    dob:{
        type:String,
        required:true,
    },
    studentID : {
        type:String,
        required:true,
        unique:true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowecase: true,
    },
    mobileNo:{
        type:String,
        required:true,
        unique:true,
    },
    Address:{
        type:String,
        required:true,
    }
},{
    timestamps:true
});

export const User = mongoose.model("Student", studentSchema);