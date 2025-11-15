import mongoose from "mongoose";

// Pair schema for managing user pairings
const pairSchema = mongoose.Schema({
    user1: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    user2: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: String, enum: ["paired", "waiting", "unpaired"], default: "unpaired" },
    pairId: { type: String, unique: true, default: "" },
}, { timestamps: true });

const Pair = mongoose.model("Pair", pairSchema);
export default Pair;