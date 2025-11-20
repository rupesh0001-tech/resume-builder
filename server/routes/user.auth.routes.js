import express from 'express';
import { registerUser, userLogin, userLogout } from '../controller/user.auth.controller.js';

const router = express.Router();

// POST /api/auth/users
router.post('/register', registerUser);
router.post('/login', userLogin);
router.post('/logout', userLogout);



export default router;
