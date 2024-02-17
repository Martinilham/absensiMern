import mongoose from "mongoose";

const Admin = mongoose.Schema(
    {
        nama: {
            type:String
        },
        password: {
            type:String
        }
    }
)
export default mongoose.model("Admin",Admin);