import express from 'express';
import { resgisterUser, loginUser, getUser } from '../controllers/user.controller.js';

const router = express.Router(); 

router.post('/register', resgisterUser);
router.post('/login', loginUser);


// protect route 
router.post('/profile', getUser);

export default router;
