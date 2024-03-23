const MainController = {
  homePage(request, response) {
    response.send({
      message: "Welcome to blog api application",
    });
  },
  makeLogin(request, response) {
    response.json({
      message: "Login API CALL",
    });
  },
  userRegistration(request, response) {
    let data = request.body;
    response.send({
      message: "User Registration API CALL",
      data,
    });
  },
};

module.exports = MainController;
