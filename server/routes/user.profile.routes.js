import express from 'express';
import { getUser } from '../controller/user.auth.controller.js';
import protect from '../middlewares/protect.js';



const router = express.Router();


// GET /api/users/profile 
router.get('/profile', protect, getUser);

export default router;
