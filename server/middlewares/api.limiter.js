import User from "../models/user.model.js";


const userRequests = new Map(); // userId -> data

const limitPerUser = (limit, windowMs) => {
  return (req, res, next) => {
    const userId = req.user.id;
    const now = Date.now();

    let userData = userRequests.get(userId);

    if (!userData || now - userData.lastTime > windowMs) {
      userData = { count: 0, lastTime: now };
    }

    userData.count++;
    userRequests.set(userId, userData);

    if (userData.count > limit) {
      return res.status(429).json({ message: "Too many requests" });
    }
    next();
  };
};


export default limitPerUser;