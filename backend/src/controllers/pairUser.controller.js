import Pair from "../models/pairUser.js";
import httpStatus, { status } from "http-status";
import uniqueCode from "../config/nanoid.js";

export const createPair = async (req, res) => {
    try {
        const newUniqueCode = uniqueCode();
        const userId = req.user._id;
        
        const userAlreadyPaired1 = await Pair.findOne({user1:userId, status: "paired"});
        const userAlreadyPaired2 = await Pair.findOne({user2:userId, status: "paired"});

        if(userAlreadyPaired1 || userAlreadyPaired2) {
            res.status(httpStatus.CONFLICT).json({success: false, message:"Active pair exist"})
        }

        const newPair = await Pair.findOne({user1:userId});
        newPair.status = "paired";
        newPair.pairId = newUniqueCode;
        await newPair.save();

        res.status(httpStatus.CREATED).json({success:true, message:"New pair created", newUniqueCode});
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: error.message });
    }

}

// export const joinPair = async (req, res) => {

// }

// export const unPair = async (req, res) => {

// }