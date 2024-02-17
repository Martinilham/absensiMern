import express from 'express'
import {
    getSiswa,
    getSiswaByNis,
    saveSiswa,
    updateSiswa,
    deleteSiswa
} from '../controllers/siswaControllers.js';

const router = express.Router();

router.get('/siswa',getSiswa);
router.get('/siswa/:id',getSiswaByNis);
router.post('/siswa',saveSiswa);
router.patch('/siswa/:id',updateSiswa);
router.delete('/siswa/:id',deleteSiswa)

export default router