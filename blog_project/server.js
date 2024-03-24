const express = require("express");
const mainRoutes = require("./routes/main.routes");
const server = express();
const mongoose = require("mongoose");
const PORT = 3002;
const MONGODB_URI = `mongodb://127.0.0.1:27017/blog_project`;

// enable static files
server.use(express.static("public"));

// enable template engine as pug
server.set("views", "./views");
server.set("view engine", "ejs");

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use("/", mainRoutes);

// DB Connect
console.log("connecting to db...");
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log("Server is running on port ", PORT);
    });
  })
  .catch(() => {
    console.log("Unable to connect db server, try again");
  });
