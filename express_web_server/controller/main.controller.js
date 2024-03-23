let MainController = {
  homePage(request, response) {
    response.send("Welcome to express from 3ri");
  },
  aboutPage(request, response) {
    response.send("This is about page");
  },
  projectPage(request, response) {
    response.send("This is project page");
  },
};

module.exports = MainController;
