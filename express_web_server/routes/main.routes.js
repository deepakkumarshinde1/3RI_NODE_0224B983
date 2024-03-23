const mainRouter = require("express").Router();
const MainController = require("../controller/main.controller");

// add end point of routing
// get, post, put, delete
// Read --> get (default)
// Add/Create/Insert --> post
// Update --> put
// Delete --> delete

// home route
// request, response
// server ----- response -------> browser
// server <----- request ------- browser
mainRouter.get("/", MainController.homePage);
mainRouter.get("/about", MainController.aboutPage);
mainRouter.get("/project", MainController.projectPage);

module.exports = mainRouter;
