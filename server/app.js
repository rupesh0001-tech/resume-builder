// import modules
import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser';

// import files
import ConnectDB from './db/db.js';
import authRoutes from './routes/user.auth.routes.js';
import userRoutes from './routes/user.profile.routes.js';
import resumeRoutes from './routes/resume.routes.js';
import aiRoutes from './routes/ai.text.routes.js';

// init server
const app = express();
const port = process.env.PORT || 5000
ConnectDB();

// inBuild middlewares
app.use(express.json());
app.use(cors({
    origin: 'https://resume-builder-delta-black-55.vercel.app',
    credentials: true
})); 
app.use(cookieParser());

// init server
app.get('/', (req, res) => res.send('Hello World!'));

//routes 
app.use('/api/auth/users', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/resumes', resumeRoutes);
app.use('/api/ai', aiRoutes); 


app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
})