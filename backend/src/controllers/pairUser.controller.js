import Pair from "../models/pairUser.js";
import httpStatus, { status } from "http-status";
import uniqueCode from "../config/nanoid.js";

export const createPair = async (req, res) => {
    try {
        const newUniqueCode = uniqueCode();
        const userId = req.user._id;

        const userAlreadyPaired1 = await Pair.findOne({ user1: userId, status: "paired" });
        const userAlreadyPaired2 = await Pair.findOne({ user2: userId, status: "paired" });

        if (userAlreadyPaired1 || userAlreadyPaired2) {
            return res.status(httpStatus.CONFLICT).json({ success: false, message: "Active pair exist" });
        }

        const newPair = await new Pair({
            user1: userId,
            status: "waiting",
            pairId: newUniqueCode
        });
        await newPair.save();

        res.status(httpStatus.CREATED).json({ success: true, message: "New pair created", newPair });
    } catch (error) {
        console.log("error in createPair controller");
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: error.message });
    }

}

export const joinPair = async (req, res) => {
    try {
        const pairId = req.params.pairId;
        const userId = req.user._id;
        const findPair = await Pair.findOne({pairId: pairId, status: "waiting"});

        if(!findPair) {
            return res.status(httpStatus.NOT_FOUND).json({ success: false, message: "Pair not found" });
        }

        if(findPair.user1 == userId){
            return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: "You cannot join your own pair" });
        }

        if(findPair.user2) {
            return res.status(httpStatus.CONFLICT).json({ success: false, message: "Pair already joined" });
        }

        findPair.user2 = userId;
        findPair.status = "paired";
        await findPair.save();

        res.status(httpStatus.OK).json({ success: true, message: "user joined successfully", findPair});
    } catch (error) {
        console.log("error in joinPair controller");
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: error.message });
    }
}

export const unPair = async (req, res) => {
    try {
        const pairId = req.params.pairId;
        const userId = req.user._id;

        const unPair = await Pair.findOne({pairId: pairId, status: "paired"});
        if(!unPair) {
            return res.status(httpStatus.NOT_FOUND).json({ success: false, message: "Pair not found"});
        }
 
        if(unPair.user1 != userId && unPair.user2 != userId){
            return res.status(httpStatus.FORBIDDEN).json({ success: false, message: "Not the owners of this pair"});
        }

        await Pair.findByIdAndDelete(unPair._id);
        res.status(httpStatus.OK).json({success: true, message: " Delete pair successfully"})
        
    } catch (error) {
        console.log("error in unPair controller");
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: error.message });
    }
}