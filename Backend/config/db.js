import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('DB connected');   
    }
    catch(error)
    {
        console.log('Somthing went wrong while connecting the DB ', error)
    }
}

export default connectDB








// in db.js
//     import mongoose
//     export connectDb
//     init mongoose
//     connect atlast
//     connect it in server.js