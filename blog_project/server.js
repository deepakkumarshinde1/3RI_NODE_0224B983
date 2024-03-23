const express = require("express");
const mainRoutes = require("./routes/main.routes");
const server = express();
const PORT = 3002;

// enable static files
server.use(express.static("public"));

// enable template engine as pug
server.set("views", "./views");
server.set("view engine", "ejs");

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use("/", mainRoutes);

server.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
