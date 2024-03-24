const UserModel = require("../model/UsersModel");

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
  async userRegistration(request, response) {
    let data = request.body;

    // is user exist
    let existUser = await UserModel.findOne({ email: data.email });
    if (existUser) {
      response.send({
        message: "User Already exists , try email id",
        status: false,
      });
    } else {
      // save data in db
      let newUser = new UserModel({
        name: data.name,
        email: data.email,
        mobile: data.mobile,
        password: data.password,
      });

      let result = await newUser.save();
      if (result !== null) {
        response.send({
          message: "User Registration Done Successfully",
          status: true,
        });
      } else {
        response.send({
          message: "Fail to make registration, try again",
          status: false,
        });
      }
    }
  },
};

module.exports = MainController;
