import User from "../models/user.js";
import jwt from "jsonwebtoken";
import httpStatus from "http-status";

export const protectedRoute = async (req, res, next) => {
    try {
        const token = req.cookie.token;
        if(!token)return res.status(httpStatus.UNAUTHORIZED).json({success:false, message:"Token not provided"});

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded)   return res.status(httpStatus.UNAUTHORIZED).json({success:false, message:"Token not provided"});

        const user = await User.findById(decoded.id).select("-password");
        if(!user)  return res.status(httpStatus.NOT_FOUND).json({success:false, message:"User not found"});

        req.user = user;
        next();
    } catch (error) {
        console.log("error in protectedRoute middleware");
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: error.message });
    }
}
