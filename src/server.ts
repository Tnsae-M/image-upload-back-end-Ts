import app from "./app";
import "dotenv/config";

//get port from enviroment
const port: Number = Number(process.env.PORT || 3000);
//listen to port
app.listen(port, () => {
  try {
    console.log(
      `server is running on port ${port}. \nsite: http://localhost:${port}`
    );
  } catch (e) {
    console.log("error occured while loading server. ", e);
    process.exit(1);
  }
});
