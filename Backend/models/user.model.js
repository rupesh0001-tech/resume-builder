import mongoose from 'mongoose'



const userSchama = new  mongoose.Schema({
    name : {
        type : String,
        require : true,
    },

    email : {
        type : String,
        require : true,
        unique : true,
    },

     password : {
        type : String,
        require : true,

    },

    

});

const userModel = new  mongoose.model('userModel', userSchama);

export default userModel;


// in models > userModel.js
//     make model with schema
//         name, email, pass, timestamp
//     export as model