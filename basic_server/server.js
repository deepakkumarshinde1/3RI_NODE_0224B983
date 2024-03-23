// import a module
const http = require("http");

// create server
const server = http.createServer((request, response) => {
  response.write("Welcome to NodeJs from 3ri");
  response.end();
});

// add port number to a server
server.listen(3001, () => {
  console.log("Server running on port 3001");
});
