import mongoose from "mongoose";

const Absensi = mongoose.Schema(
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
        absen:[
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
        ]
    }
)

export default mongoose.models("Absensi",Absensi)