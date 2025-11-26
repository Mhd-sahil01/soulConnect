import User from "../models/user.js";
import httpStatus from "http-status";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
    const { username, nickname, email, password } = req.body;

    // check for blank options
    if (!username || !nickname || !email || !password) {
        return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: "All fields are required!" });
    }

    try {
        const existingUser1 = await User.findOne({ email });
        const existingUser2 = await User.findOne({ username });

        // check if the user already exist
        if (existingUser1 || existingUser2) {
            return res.status(httpStatus.CONFLICT).json({ success: false, message: "User already exist!" });
        }

        // Hash the password
        const hashPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = new User({ username, nickname, email, password: hashPassword });
        await user.save();

        // JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '5d' });

        res.cookie('token', token, { // Set cookie
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 5 * 24 * 60 * 60 * 1000
        });

        res.status(httpStatus.CREATED).json({
            success: true, message: "Signup successfully",
            user: {
                id: user._id,
                username: user.username,
                nickname: user.nickname,
                email: user.email
            }
        });
    } catch (error) {
        console.log("error in signUp controller");
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: error.message });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    // check for blank options
    if (!email || !password) {
        return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: "All fields are required!" })
    }

    try {
        // check if the email is valid
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(httpStatus.UNAUTHORIZED).json({ success: false, message: "Invalid email or password" });
        }

        // check if the password is valid
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(httpStatus.UNAUTHORIZED).json({ success: false, message: "Invalid email or password" });
        }

        // JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '5d' });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 5 * 24 * 60 * 60 * 1000
        });

        res.status(httpStatus.OK).json({
            success: true, message: "Login successfully",
            user: {
                id: user._id,
                username: user.username,
                nickname: user.nickname,
                email: user.email
            }
        });
    } catch (error) {
        console.log("error in login controller");
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: error.message });
    }
}

export const logout = async (req, res) => {
    try {
        // Clear the cookie for logout
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 5 * 24 * 60 * 60 * 1000
        });

        res.status(httpStatus.OK).json({ success: true, message: "Logout successfully" })
    } catch (error) {
        console.log("error in logout controller");
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: error.message });
    }
}

export const checkAuth = (req, res) => {
    console.log(req.user);
    res.status(httpStatus.OK).json({ success: true, message: "User is authenticated", user: req.user });
}