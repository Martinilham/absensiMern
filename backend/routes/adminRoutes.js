import express from 'express'
import {
    getAdmin,
    saveAdmin,
} from '../controllers/adminControllers.js';

const router = express.Router();

router.get('/users',getAdmin);
router.post('/users',saveSiswa);

export default router