const express = require("express");
const mainRouter = require("./routes/main.routes");
// create a server
const server = express();

// add routing in our server
// use() --> spacial middleware (inject data in server instance)
server.use("/", mainRouter); //   / is a prefix url

// add a port number
const PORT = 3001;
server.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});

// 80 443 22 21
