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
// init server
const app = express();
const port = process.env.PORT || 5000
ConnectDB();

// inBuild middlewares
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
})); 
app.use(cookieParser());

// init server
app.get('/', (req, res) => res.send('Hello World!'));

//routes 
app.use('/api/auth/users', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/resumes', resumeRoutes);


app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
})