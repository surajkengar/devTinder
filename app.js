const express = require("express");
const connectDB = require("./src/config/database");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const http = require("http");
const {userAuth}=require("./src/middleware/auth");

require("dotenv").config();

console.log("MONGO_URI =", process.env.MONGO_URI);


// require("./utils/cronjob");
app.use(
  cors({
    origin: [
      "http://localhost:5173",
       " https://dev-tinder-frontend-suraj-kengars-projects.vercel.app"
    ],
    credentials: true,
  })
);




app.use(express.json());
app.use(cookieParser());

const authRouter = require("./src/routes/auth");
const profileRouter = require("./src/routes/profile");
const requestRouter = require("./src/routes/request");
const userRouter = require("./src/routes/user");
// const paymentRouter = require("./routes/payment");
const initializeSocket = require("./src/utils/socket");
// const chatRouter = require("./routes/chat");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);
// app.use("/", paymentRouter);
// app.use("/", chatRouter);

const server = http.createServer(app);
initializeSocket(server);

connectDB()
  .then(() => {
    console.log("Database connection established...");
    server.listen(process.env.PORT, () => {
      console.log("Server is successfully listening on port 7777...");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected!!");
  });