import jwt from "jsonwebtoken";



const protect = (req, res, next) => {
  try {
    // check if the token is in the cookie
    let token = req.cookies.token;

    // if token is not in the cookie
    if (!token) {
      return res.status(401).json({
        message: "You are not logged in",
      });
    }

    // check if the token is valid
    const isAuth = jwt.verify(token, process.env.JWT_SECRET);

    // if token is not valid
    if (!isAuth) {
      return res.json({
        message: "Somthing went wrong please login again",
      });
    }


    // take out the user from the token
    req.user = isAuth;

    // if valid next 
    next();
  } catch (error) {
    res.status(401).json({
      message: "Somthing went wrong",
      error: error.message,
    });
  }
};


export default protect
