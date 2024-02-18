import express from 'express'
import {
    getAdmin,
    saveAdmin,
} from '../controllers/adminControllers.js';

const routerAdmin = express.Router();

routerAdmin.get('/admin',getAdmin);
routerAdmin.post('/admin',saveAdmin);

export default routerAdmin;