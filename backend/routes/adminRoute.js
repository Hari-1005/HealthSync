import express from 'express'
import { addDoctor, adminLogin } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import { authAdmin } from '../middlewares/authAdmin.js';

const adminRouter = express.Router();

adminRouter.post('/login',adminLogin)
adminRouter.post('/add-doctor',authAdmin,upload.single('image'), addDoctor);

export default adminRouter;