import mongoose, { mongo } from "mongoose";

const Nilai = mongoose.Schema(
    {
        nama:{
            type:String,
            required:true
        },
        kelas:{
            type:String,
            required:true
        },
        nis:{
            type:String,
            required:true
        },
        bhsindo:{
            type:String,
            required:true
        },
        mtk:{
            type:String,
            required:true
        },
        inggris:{
            type:String,
            required:true
        }

    }
)
export default mongoose.models("Nilai",Nilai)