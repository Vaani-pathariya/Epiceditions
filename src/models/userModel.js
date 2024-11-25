import mongoose from "mongoose";
const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please provide a username"],
        unique: true
    },
    email:{
        type:String,
        required:[true,"Please provide an email"],
        unique:true
    },
    password :{
        type:String,
        required:[true,"Please provide a password"],
    },
    isVerified:{
        type: Boolean,
        default: false,
    },
    role:{
        type:String,
        default:'User'
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date,
    bookmarks:{
        type: [mongoose.Schema.Types.ObjectId],
        default:[],
    },
    createdOn: {
        type: Date,
        default : Date.now
    },
    status:{
        type: String,
        default: 'Active'
    }
})
const User = mongoose.models.users || mongoose.model("users",userSchema);
export default User;