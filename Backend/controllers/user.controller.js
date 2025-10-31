import userModel from "../models/user.model.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


const genToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
}

export const resgisterUser = async (req, res) => {



    try {
        let { name, email, password } = req.body;
        let checkUserExist = await userModel.findOne({ email: email });
        if (checkUserExist) {
            return res.status(300).json({ "message": " exists " });
        }
        if (!password || password.length < 8) {
            return res.status(300).json({ "message": " Please enter a Strong password  " });
        }



        const salt = await bcrypt.genSalt(10);
        const hashPassword = bcrypt.hashSync(password, salt);


        const newUser = await new userModel({

            name: name,
            email: email,
            password: hashPassword,

        })
        await newUser.save();
        const token = genToken(newUser._id);

        res.status(200).json({
            message: ' new user saved ',
            name: name,
            email: email,
            password: hashPassword

        })




    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong in register controller',
            error: error.message
        });
    }


}

export const loginUser = async (req, res) => {
    try {
        let { email, password } = req.body;
        //check if the user exist 
        const user = await userModel.findOne({ email: email });
        if (!user) {
            res.status(400).json({ message: ' inccorect email or password ' });
        }

        let isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(400).json({
                message: ' email or Password is incorrect ',
            })
        }
        const token = genToken(user._id)
        res.status(200).json({

            message: ' you have accesss ',
            name: user.name,
            email: user.email,
            password: user.hashPassword,


        })


    } catch(error) {
        res.status(400).json({
            message : ' somthing went wrong in login controller ',
            error : error.message,
        })
    }
}

export const getUser = async () => {
    try {
        let [name, email, password] = req.body;
        const getUser = userModel.findOne({ email: email })
        if (!getUser) {
            res.status(400).json({
                message: ' user not found '
            });
        }
    } catch {
        res.json({
            message: ' somthing went wrong in get user controller '
        })
    }

}
