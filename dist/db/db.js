"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDbMdb = connectToDbMdb;
//import mongodb
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
//create connection
async function connectToDbMdb() {
    const mongoUrl = process.env.Mongo_Url;
    if (!mongoUrl) {
        // Fail fast - caller can decide how to handle startup failure
        throw new Error("Missing environment variable: Mongo_Url");
    }
    try {
        await mongoose_1.default.connect(mongoUrl);
        console.log("MongoDB connected successfully.");
    }
    catch (er) {
        console.log("mongoose not connected! err=> ", er);
    }
}
//# sourceMappingURL=db.js.map