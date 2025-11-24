import express from 'express';
import { getAiText } from '../controller/ai.text.controller.js';
import protect from '../middlewares/protect.js';
import limitPerUser from '../middlewares/api.limiter.js';
const router = express.Router();

// POST /api/ai/text
router.post('/text', protect, limitPerUser(3, 60000), getAiText);

export default router;