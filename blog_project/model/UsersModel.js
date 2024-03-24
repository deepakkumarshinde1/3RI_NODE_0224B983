const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  mobile: { type: Number },
  password: { type: String },
});

const UserModel = mongoose.model("users", UserSchema, "users");

module.exports = UserModel;
