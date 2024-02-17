import express from 'express'
import {
    getAdmin,
    saveAdmin,
} from '../controllers/adminControllers.js';

const router = express.Router();

router.get('/Admin',getAdmin);
router.post('/Admin',saveAdmin);

export default router