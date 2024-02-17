import express from 'express'
import {
    getSiswa,
    getSiswaByNis,
    saveSiswa,
    updateSiswa,
    deleteSiswa
} from '../controllers/siswaControllers.js';

const router = express.Router();

router.get('/users',getSiswa);
router.get('/users/:id',getSiswaByNis);
router.post('/users',saveSiswa);
router.patch('/users/:id',updateSiswa);
router.delete('/users/:id',deleteSiswa)

export default router