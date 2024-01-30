import mongoose from "mongoose";

const Absensi = mongoose.Schema(
    {   
        nama:{
            type:Date,
            required:true
        },
        kelas:{
            type:Date,
            required:true
        }, 
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