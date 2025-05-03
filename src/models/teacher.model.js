import mongoose from 'mongoose';
const { Schema } = mongoose;

const teacherSchema = new Schema({
    teacherName : {
        type:String,
        required:true,
    },
    department : {
        type:String,
        required:true,
    },
    teacherID : {
        type:String,
        required:true,
        unique:true,
    }
},{
    timestamps:true
});

export const User = mongoose.model("Teacher", teacherSchema);