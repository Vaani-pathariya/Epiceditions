import mongoose from "mongoose";
import { type } from "os";
const bookSchema = new mongoose.Schema({
    addedOn:{
        type: Date,
        default : Date.now
    },
    simpleImage: mongoose.Schema.Types.ObjectId,
    openImage : mongoose.Schema.Types.ObjectId,
    designImage : mongoose.Schema.Types.ObjectId,
    name : {
        type:String,
        required:[true,"Please enter the name of the book"]
    },
    author : {
        type: String,
        required: [true,"Please enter the Author's name"]
    },
    description : {
        type:String
    },
    smallDescription : {
        type: String
    },
    review : {
        type: String
    },
    stars : {
        type: Number
    },
    series:{
        type : String
    },
    views :{
        type: Number ,
        default: 0,
    },
    likes :{
        type: Number,
        default : 0
    },
    buy :{
        type: String 
    },
    languages : {
        type : String
    }
})
const Book = mongoose.models.books || mongoose.model("books",bookSchema);
export default Book