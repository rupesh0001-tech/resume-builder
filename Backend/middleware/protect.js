import jwt from 'jsonwebtoken';
import userModel from '../models/user.model.js';

export const protect = async (req, res) => {
    try {
        let token;
        if (req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization();


            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await userModel.findById(decoded.userid).select('-password');
            next();
        }
        else {
            return res.status(401).json({ message: 'Not authorized, no token' });
        }
    }
    catch {
        res.status(400).json({
            message: " somthing went wrong in protect middleware "
        })
    }
}