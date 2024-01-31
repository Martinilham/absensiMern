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
        nilai:[
            {
                bhsindo:{
                    type:String,
                    
                },
                mtk:{
                    type:String,
                    
                },
                inggris:{
                    type:String,
                    
                }
            }
        ],
        absensi:[
            {
                hari:{
                    type:Date,
                    
                },
                jam:{
                    type:String,
                    
                },
                keterangan:{
                    type:String,
                    
                }
            }
        ]

    }
)
export default mongoose.model("Siswa",Siswa);