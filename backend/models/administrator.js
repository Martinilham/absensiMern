import mongoose from "mongoose";

const administrator = mongoose.Schema(
    {
        nama: {
            type:String
        },
        password: {
            type:String
        }
    }
)