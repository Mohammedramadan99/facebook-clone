const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
require("colors");
dotenv.config();
const dbConnect = require("./config/db/dbConnect");

const userRoutes = require("./route/users/usersRoute");
const postRoute = require("./route/posts/postRoute");
const commentRoute = require("./route/comments/commentRoute");
const categoryRoute = require("./route/category/categoryRoute");
const emailMsgRoute = require("./route/emailMsg/emailMsgRoute");

const { errorHandler, notFound } = require("./middlewares/error/errorHandler");

const app = express();
//DB
dbConnect();

//Middleware
app.use(express.json());
app.use(cors());
//Users route
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);
app.use("/api/category", categoryRoute);
app.use("/api/email", emailMsgRoute);

app.use(express.static("client/build"));
app.get("*", (req, res) =>
  res.sendFile(`${__dirname}/client/build/index.html`)
);

// err handler -- put those below all routes
app.use(notFound);
app.use(errorHandler);

//server
const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server is running ${PORT}`));
