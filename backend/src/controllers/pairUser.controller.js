import Pair from "../models/pairUser.js";
import httpStatus from "http-status";
import uniqueCode from "../config/nanoid.js";

export const createPair = async (req, res) => {
    try {
        // Generate a unique code
        const newUniqueCode = uniqueCode();
        const userId = req.user._id;

        const userAlreadyPaired1 = await Pair.findOne({ user1: userId, status: "paired" });
        const userAlreadyPaired2 = await Pair.findOne({ user2: userId, status: "paired" });

        // Check if the user is already in an active pair
        if (userAlreadyPaired1 || userAlreadyPaired2) {
            return res.status(httpStatus.CONFLICT).json({ success: false, message: "Active pair exist" });
        }

        // Create a new pair with the generated code
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
        const findPair = await Pair.findOne({ pairId: pairId, status: "waiting" })
            .populate("user1", "username nickname email")
            .populate("user2", "username nickname email");

        // Check if the pair exists
        if (!findPair) {
            return res.status(httpStatus.NOT_FOUND).json({ success: false, message: "Pair not found" });
        }

        // Prevent the user from joining their own pair
        if (findPair.user1.toString() == userId.toString()) {
            console.log(userId);
            console.log(findPair.user1);
            return res.status(httpStatus.BAD_REQUEST).json({ success: false, message: "You cannot join your own pair" });
        }

        // Check if the pair already has a second user
        if (findPair.user2) {
            return res.status(httpStatus.CONFLICT).json({ success: false, message: "Pair already joined" });
        }

        // Add the user to the pair and update the status
        findPair.user2 = userId;
        findPair.status = "paired";
        await findPair.save();
        res.status(httpStatus.OK).json({ success: true, message: "user joined successfully", findPair });
    } catch (error) {
        console.log("error in joinPair controller");
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: error.message });
    }
}

export const unPair = async (req, res) => {
    try {
        const pairId = req.params.pairId;
        const userId = req.user._id;

        const unPair = await Pair.findOne({ pairId: pairId, status: "paired" });
        // Check if the pair exists
        if (!unPair) {
            return res.status(httpStatus.NOT_FOUND).json({ success: false, message: "Pair not found" });
        }

        // Check if the user is one of the pair owners
        if (unPair.user1.toString() != userId && unPair.user2.toString() != userId) {
            console.log(unPair.user1);
            console.log(unPair.user2);
            return res.status(httpStatus.FORBIDDEN).json({ success: false, message: "Not the owners of this pair" });
        }

        // Delete the pair
        await Pair.findByIdAndDelete(unPair._id);
        res.status(httpStatus.OK).json({ success: true, message: " Delete pair successfully" })

    } catch (error) {
        console.log("error in unPair controller");
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: error.message });
    }
}

export const checkPair = async (req, res) => {
    try {
        const pairId = req.params.pairId;
        const findPair = await Pair.findOne({ pairId: pairId, status: "paired" })
            .populate("user1", "username nickname email")
            .populate("user2", "username nickname email");
        if (!findPair) {
            return res.status(httpStatus.NOT_FOUND).json({ success: false });
        }
        return res.status(httpStatus.OK).json({ success: true, findPair });
    } catch (error) {
        console.log("error in checkPair controller");
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: error.message });
    }
} 