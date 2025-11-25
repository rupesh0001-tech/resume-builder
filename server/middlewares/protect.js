import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
  try {
    // FIX 1: In Render + Vercel, cookies only work when cookie-parser is added
    // Make sure: app.use(cookieParser());

    const token = req.cookies.token; // GOOD

    // if no token found
    if (!token) {
      return res.status(401).json({ message: "You are not logged in" });
    }

    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // FIX 2: isAuth is NOT a boolean — jwt.verify returns the payload
    // OLD (wrong):
    // const isAuth = jwt.verify(...)

    // FIX: decoded is your payload
    req.user = decoded;  // contains { id: "userId", iat: ... }

    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
      error: error.message,
    });
  }
};

export default protect;
