import Siswa from "../models/siswaModels.js";

export const getSiswa = async(req,res)=>{
    try {
        const siswa= await Siswa.find();
        res.json(siswa)
    } catch{
        res.status(500).json({message: error.message});
    }
}

export const getSiswaByNis = async(req,res)=>{
    try{
        const siswa = await Siswa.findById(req.params.id)
        res.json(siswa)
    }catch{

    }
}
export const saveSiswa = async (req, res) => {
    const siswa = new Siswa(req.body);
    try {
        const insertedSiswa = await siswa.save();
        res.status(201).json(insertedSiswa);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateSiswa = async (req, res) => {
    try {
        const updatedSiswa = await Siswa.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedSiswa);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteSiswa = async (req, res) => {
    try {
        const deletedSiswa = await User.deleteOne({_id:req.params.id});
        res.status(200).json(deletedSiswa);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}