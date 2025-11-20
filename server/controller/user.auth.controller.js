import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// POST /api/auth/users/register

export const registerUser = async (req, res) => {
  try {
    // destructuring
    let { name, email, password } = req.body;

    // check if the fields are empty from req.body
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are Required ",
      });
    }

    //check if the user is already registered
    const checkUser = await User.findOne({ email: email });
    if (checkUser) {
      return res.status(400).json({
        message: " User is already registered ",
        checkUser,
      });
    }

    // hashPassword
    const hashPassword = await bcrypt.hash(password, 10);

    // create a new user
    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    //genrate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    // set token in cookie
    res.cookie("token", token, {
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    // send response
    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      message:
        " error while registering the user, Please try again after some time ",
      error: error.message,
    });
  }
};

//POST api/auth/users/login

export const userLogin = async (req, res) => {
  try {
    // destructuring
    let { email, password } = req.body;

    //check if the fields are empty from req.body
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are Required ",
      });
    }

    //check if the user is register
    const checkUser = await User.findOne({ email: email });
    if (!checkUser) {
      return res.status(400).json({
        message: " User is not registered ",
      });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, checkUser.password);

    // is not match
    if (!isMatch) {
      return res.status(400).json({
        message: "Password is incorrect ",
      });
    }

    //genrate token
    const token = jwt.sign({ id: checkUser._id }, process.env.JWT_SECRET);

    // set token in cookie
    res.cookie("token", token, {
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    
    checkUser.password = undefined;
    // send response
    res.status(200).json({
      user : checkUser,
      message: "User logged in successfully",
    });
  } catch (error) {
    res.status(500).json({
      message:
        " error while logging in the user, Please try again after some time ",
      error: error.message,
    });
  }
};

//logout Route

export const userLogout = async (req, res) => {
  try {
    res.clearCookie("token", {
      path: "/", // MUST match
      sameSite: "lax", // MUST match
      secure: false, // MUST match
      httpOnly: false, // MUST match
    });

    return res.status(200).json({ message: "Logged out" });
    res.status(200).json({
      message: "User logged out successfully",
    });
  } catch (error) {
    res.status(500).json({
      message:
        " error while logging out the user, Please try again after some time ",
      error: error.message,
    });
  }
};

//get user Data
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message:
        " error while fetching the user, Please try again after some time ",
      error: error.message,
    });
  }
};
