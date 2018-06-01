var xss = require("xss");
var mongoose = require("mongoose");
var User = mongoose.model("userModel");

const findAllUsers = async () => {
  var query = User.find({});
  var res = [];
  await query.exec(function(err, user) {
    if (err) {
      res = [];
    } else {
      res = user;
    }
  });
  return res;
};

exports.users = async (ctx, next) => {
  var data = await findAllUsers();
  ctx.body = {
    success: true,
    data
  };
};

// exports.register = async (ctx, next) => {
//   var phoneNumber = xxs(ctx.request.body.phoneNumber.trim());
//   var nickname = xxs(ctx.request.body.nickname.trim());
//   var user = await User.findOne({
//     phoneNumber
//   }).exec();
//   if (!user) {
//     user = new User({
//       nickname: xxs(nickname),
//       phoneNumber: xxs(phoneNumber)
//     });
//     try {
//       user = await user.save();
//       ctx.body = {
//         success: true,
//         data: "success"
//       };
//     } catch (e) {
//       ctx.body = {
//         success: false
//       };

//       return next;
//     }
//   } else {
//     ctx.body = {
//       success: false,
//       data: "该号码已经注册过"
//     };
//   }
// };
