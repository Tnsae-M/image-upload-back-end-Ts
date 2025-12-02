"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const db_1 = require("./db/db");
const homepage_1 = __importDefault(require("./routes/homepage"));
//call connection to DB
(0, db_1.connectToDbMdb)();
//create an express app
const app = (0, express_1.default)();
//parse json
app.use(express_1.default.json());
//configure routes
app.use("./", homepage_1.default);
//export app to server
exports.default = app;
//# sourceMappingURL=app.js.map