import userModel from "../models/user.model";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


export  const resgisterUser =  async ( req, res ) => {

    const genToken = (userid ) => {
        const token = jwt.sign({userid : userid}, process.env.JWT_SECRET,{expiresIn : '7d'});
    }

    try {
        let {name, email, password } = req.body;
        let checkUserExist =  userModel.findOne({name : name });
        if(checkUserExist){
            res.status(300).json({"message" : " exists "});
        }
        if(password.length < 8){
            res.status(300).json({"message" : " Please enter a Strong password  "});
        }
        genToken(userid);
        bcryp
        
        const salt = 10;
        const hashPassword = bcrypt.hashSync(password, salt);

        
        const newUser = await new userModel({
            
            name : name, 
            email : email,
            password : hashPassword,

        })

        res.status(200),json({
            message : ' new user saved ',
            name : name, 
            email : email,
            password : hashPassword

        })
        



    }catch(error){
        res.status(400).json(' somthing went wrong in register controller ')
    }


}

export const loginUser = async (req, res) => {
    try {
        let [email, password ] = req.body;
        //check if the user exist 
        const user = userModel.findOne({email :email });
        if(!user){
            res.status(400).json({message : ' inccorect email or password '});
        }

        let isMatch = await bcrypt.compare(user.password, password);
        if(!isMatch){
            res.status(400).json({
                message : ' email or Password is incorrect ',
            })
        }
        res.status(200).json({

            message : ' you have accesss ',
            name : name, 
            email : email,
            password : hashPassword,

            
        })

        
    }catch{
        res.status(400).json(' somthing went wrong in logincontroller ')
    }
}

export const getUser = async () => {
    try {
        let [name, email, password] = req.body;
        const getUser = userModel.findOne({email : email})
        if( !getUser) {
            res.status(400).json({
                message : ' user not found '
            });
        }
    }catch{
        res.json({
            message : ' somthing went wrong in get user controller '
        })
    }

}
// in controllers > userControler
//     require userModel
//     export registeUser 
//         try{
//             take req.body { name email pass }
//             check if the user exists 
//                 yes => res.status(400).json( msg : ' exists ' )

//             check pass lenth ( lest 8 );
            
//             make jwt secreate in .env file 
//             genrate  token ( by function, sign id, expire in 7 days )
//             hashed pass 
//             create user
//             res.status(200);
//             message with detail include tokens 

//         }   catch { catch the error }

//         export login function
//         try {
//             take email and pass as inputs 
//             find user
//             compare pass 
//             if match 
//             res( same msg with details )
//         }
//         catch{ catch errors }
//         // get user profile 
//         try{
//             find user by id 
//             check for user 
//             res.json(user)
//         }catch
