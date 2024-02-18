import mongoose from "mongoose";

const Admin = mongoose.Schema(
    {
        nama:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    }
)
export default mongoose.model("Admin",Admin);