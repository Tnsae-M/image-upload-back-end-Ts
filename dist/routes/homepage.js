"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import assets
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// simple gateway to homepage (CRUD API)
router.get("/homepage", (_req, res) => {
    res.json({
        page: "Homepage",
        page_num: 1,
    });
});
exports.default = router;
// add auth middleware
// fix route names from live websites
//# sourceMappingURL=homepage.js.map