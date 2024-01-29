import mongoose from "mongoose";

const Karyawan = mongoose.Schema(
    {
        nama:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        nomor:{
            type:String,
            required:true
        },
    }
)
export default mongoose.model("Karyawan",Karyawan);