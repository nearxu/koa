const Router = require("koa-router");
const User = require("../app/user.js");

module.exports = function() {
  var router = new Router({
    prefix: "/api"
  });
  router.get("/user/users", User.users);
  return router;
};
