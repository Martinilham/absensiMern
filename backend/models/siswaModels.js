import mongoose from "mongoose";

const Siswa = mongoose.Schema(
    {
        nama:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        nomorNIS:{
            type:String,
            required:true
        },
        kelas:{
            type:String,
            required:true
        },
        nomor:{
            type:String,
            required:true
        },
        nomorOrtu: {
            type:String,
            required:true
        },

    }
)
export default mongoose.model("Siswa",Siswa);