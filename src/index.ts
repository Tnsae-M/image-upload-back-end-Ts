//assets import section
import express from "express";
import type { Express } from "express";
import "dotenv/config";
import { connectToDbMdb } from "./db/db";
import { User } from "./models/User";
import router from "./routes/homepage";
//create a server
const server: Express = express();
//use expressjson middleware to parse json of request body
server.use(express.json());
//create routes
server.use("/api", router);
//Tasks for next!!

//create mother routes one by one
// app.use("/api/home", HomeRoutes);
// app.use("/api/auth", authRoutes);
// app.use("/api/admin", adminRoute);
// app.use("/api/image", imgRoutes);

//create an async function that checks DB first and starts server next
async function StartServer(): Promise<void> {
  try {
    //connect to mongoose DB
    await connectToDbMdb();
    //declare port
    const port: number = Number(process.env.PORT) || 3000;
    server.listen(port, () => {
      console.log(
        `Server is running on port ${port}.\nWebsite link: http://localhost:${port}`
      );
    });
  } catch (e) {
    console.log("Server start failed. check error=> ", e);
    process.exit(1);
  }
}
//call the function
void StartServer();
