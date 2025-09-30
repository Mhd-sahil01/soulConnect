import User from "../models/user.js";
import httpStatus from "http-status";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export const signUp = async (res, req) => {
    const { username, nickname, email, password } = req.body;

    try {
        //check for blank options
        if (!username || !nickname || !email || !password) {
            return res.status(httpStatus.NOT_FOUND).json({ success: false, message: "Details cannot be empty" });
        }

        const existingUser1 = await User.findOne({ email });
        const existingUser2 = await User.findOne({ username });

        //check if the user already exist
        if (existingUser1 || existingUser2) {
            return res.status(httpStatus[409]).json({ success: false, message: "User already exist!" });
        }

        //hash password
        const hashPassword = await bcrypt.hash(password, 10);

        //create the new user
        const user = new User({ username, nickname, email, password: hashPassword });
        await user.save();

        //jwt token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '5d' });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 5 * 24 * 60 * 60 * 1000
        });

        res.status(httpStatus.CREATED).json({ success: true, message: "Signup successfully" });
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: error.message });
    }

}