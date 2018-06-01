var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  phoneNumber: {
    unique: true,
    type: String
  },
  areaCode: String,
  verifyCode: String,
  verified: {
    type: Boolean,
    default: false
  },
  accessToken: String,
  nickname: String,
  gender: String,
  breed: String,
  age: String,
  avatar: String,
  meta: {
    createAt: {
      type: Date,
      dafault: Date.now()
    },
    updateAt: {
      type: Date,
      dafault: Date.now()
    }
  }
});

var userModel = mongoose.model("userModel", userSchema);
module.exports = userModel;
