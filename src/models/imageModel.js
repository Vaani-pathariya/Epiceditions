import mongoose from "mongoose";
const imageSchema = new mongoose.Schema({
    image : Buffer,
    createdAt:{
        type: Date,
        default: Date.now
    }
})

const Image = mongoose.models.images || mongoose.model("images",imageSchema);
export default Image