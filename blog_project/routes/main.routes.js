const MainController = require("../controller/main.controller");
const mainRoutes = require("express").Router();
const multer = require("multer");
const upload = multer();

mainRoutes.get("/", MainController.homePage);
mainRoutes.get("/login", MainController.makeLogin);

mainRoutes.post(
  "/user-registration",
  upload.none(),
  MainController.userRegistration
);

module.exports = mainRoutes;
