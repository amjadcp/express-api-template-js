import mongoose from "mongoose";

const Org = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: false,
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
},
{ timestamps: true }
);

export default mongoose.model("org", Org);