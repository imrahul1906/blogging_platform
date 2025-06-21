import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: String,
    content: String,
    category: String,
    tags: [String],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

export const Post = mongoose.model('Post', schema);