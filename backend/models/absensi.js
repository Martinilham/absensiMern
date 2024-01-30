import mongoose from "mongoose";

const Absensi = mongoose.Schema(
    {    
        hari:{
            type:Date,
            required:true
        },
        jam:{
            type:String,
            required:true
        }
            
        
    }
)

export default mongoose.models("Absensi",Absensi)