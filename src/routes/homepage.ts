//import assets
import express from "express";
import type { Request, Response, IRouter } from "express";

const router: IRouter = express.Router();

// simple gateway to homepage (CRUD API)
router.get("/homepage", (_req: Request, res: Response) => {
  res.json({
    page: "Homepage",
    page_num: 1,
  });
});
export default router;
// add auth middleware
// fix route names from live websites
