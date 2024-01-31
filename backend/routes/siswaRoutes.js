import express from 'express'
import {
    getSiswa,
    getSiswaByNis,
    saveSiswa,
    updateSiswa,
    deleteSiswa
} from '../controllers/userControllers.js';

const router = express.Router();

router.get('/users',getSiswa);
router.get('/users/:id',getSiswaById);
router.post('/users',saveSiswa);
router.patch('/users/:id',updateSiswa);
router.delete('/users/:id',deleteSiswa)

export default router