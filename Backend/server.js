
import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import userRoutes from './Routes/userRoutes.js';



// inits 
const app = express();
const port = process.env.PORT ||  4000;
connectDB();

//middleware
app.use(express.json());
app.use(cors());

//index route
app.get('/', (req, res) => {
    res.send('API is running fine bro')
});

//routes 
app.use('/api/auth', userRoutes)



// server listen
app.listen(port, (req, res)=>{
    console.log(`server is running on the ${port}`);
})



 // 
// in server.js 
//     import exp, cors , dotconfig
//     connect express.json 
//     connect cors 
//     make index route 
//     make server listen

