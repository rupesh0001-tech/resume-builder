import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Reusable cookie options (for deployment)
const cookieOptions = {
  httpOnly: true,         // FIX: prevent JS from reading cookie
  secure: true,           // FIX: required on HTTPS (Render)
  sameSite: "none",       // FIX: required for cross-site cookie (Vercel <-> Render)
  maxAge: 24 * 60 * 60 * 1000,
  path: "/"               // FIX: required for clearing cookie
};

// --------------------------------------------------------------
// REGISTER USER
// --------------------------------------------------------------
export const registerUser = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return res.status(400).json({ message: "User is already registered" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    // FIX: proper cookie options for Render + Vercel
    res.cookie("token", token, cookieOptions);

    user.password = undefined;

    return res.status(201).json({
      user,
      message: "User registered successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: "Error registering user",
      error: error.message,
    });
  }
};


// --------------------------------------------------------------
// LOGIN USER
// --------------------------------------------------------------
export const userLogin = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return res.status(400).json({ message: "User is not registered" });
    }

    const isMatch = await bcrypt.compare(password, checkUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Password is incorrect" });
    }

    const token = jwt.sign({ id: checkUser._id }, process.env.JWT_SECRET);

    // FIX: cookie was missing secure + sameSite + httpOnly
    res.cookie("token", token, cookieOptions);

    checkUser.password = undefined;

    return res.status(200).json({
      user: checkUser,
      message: "User logged in successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: "Error logging in user",
      error: error.message,
    });
  }
};


// --------------------------------------------------------------
// LOGOUT USER
// --------------------------------------------------------------
export const userLogout = async (req, res) => {
  try {
    // FIX: clearing cookie must use the SAME options
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
    });

    return res.status(200).json({ message: "Logged out successfully" });

  } catch (error) {
    res.status(500).json({
      message: "Error logging out user",
      error: error.message,
    });
  }
};


// --------------------------------------------------------------
// GET USER DATA
// --------------------------------------------------------------
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    return res.status(200).json(user);

  } catch (error) {
    res.status(500).json({
      message: "Error fetching user data",
      error: error.message,
    });
  }
};
