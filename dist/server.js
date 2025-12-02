"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
require("dotenv/config");
//get port from enviroment
const port = Number(process.env.PORT || 3000);
//listen to port
app_1.default.listen(port, () => {
    try {
        console.log(`server is running on port ${port}. \nsite: https://localhost:${port}`);
    }
    catch (e) {
        console.log("error occured while loading server. ", e);
        process.exit(1);
    }
});
//# sourceMappingURL=server.js.map