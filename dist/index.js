"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//assets import section
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const db_1 = require("./db/db");
const homepage_1 = __importDefault(require("./routes/homepage"));
//create a server
const server = (0, express_1.default)();
//use expressjson middleware to parse json of request body
server.use(express_1.default.json());
//create routes
server.use("/api", homepage_1.default);
//Tasks for next!!
//create mother routes one by one
// app.use("/api/home", HomeRoutes);
// app.use("/api/auth", authRoutes);
// app.use("/api/admin", adminRoute);
// app.use("/api/image", imgRoutes);
//create an async function that checks DB first and starts server next
async function StartServer() {
    try {
        //connect to mongoose DB
        await (0, db_1.connectToDbMdb)();
        //declare port
        const port = Number(process.env.PORT) || 3000;
        server.listen(port, () => {
            console.log(`Server is running on port ${port}.\nWebsite link: http://localhost:${port}`);
        });
    }
    catch (e) {
        console.log("Server start failed. check error=> ", e);
        process.exit(1);
    }
}
//call the function
void StartServer();
//# sourceMappingURL=index.js.map