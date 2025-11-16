import httpStatus from "http-status";
import Message from "../models/message.js";

// Controller to send a message in a pair
export const getMessages = async (req, res) => {
    try {
        const pairId = req.params.pairId;
        const messages = await Message.find({ pairId });

        if (!messages) {
            return res.status(httpStatus.NOT_FOUND).json({ success: false, message: "No messages found" });
        }

        // Return the messages
        res.status(httpStatus.OK).json({ success: true, messages });

    } catch (error) {
        console.log("error in getMessages controller");
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: error.message });
    }
}
 