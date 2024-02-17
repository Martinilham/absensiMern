import Siswa from "../models/administrator.js";

export const getadmin = async(req,res)=>{
    try {
        const admin = await Siswa.find();
        res.json(admin)
    } catch{
        res.status(500).json({message: error.message});
    }
}
export const saveadmin = async (req, res) => {
    const Admin = new Admin(req.body);
    try {
        const insertedAdmin = await Admin.save();
        res.status(201).json(insertedAdmin);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

