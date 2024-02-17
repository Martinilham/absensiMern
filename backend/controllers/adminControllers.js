import Admin from "../models/administrator.js";

export const getAdmin = async(req,res)=>{
    try {
        const admin = await Admin.find();
        res.json(admin)
    } catch{
        res.status(500).json({message: error.message});
    }
}
export const saveAdmin = async (req, res) => {
    const Admin = new Admin(req.body);
    try {
        const insertedAdmin = await Admin.save();
        res.status(201).json(insertedAdmin);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

