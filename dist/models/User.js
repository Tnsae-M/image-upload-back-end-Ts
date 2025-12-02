"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
//import mongoose and other assets
const mongoose_1 = __importDefault(require("mongoose"));
//use interface in schema to simplify type
const userSchema = new mongoose_1.default.Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        KmaxLength: [50, "username is too long. try a shorter one."],
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        required: true,
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
}, { timestamps: true });
//export User model
exports.User = mongoose_1.default.model("User", userSchema);
//# sourceMappingURL=User.js.map