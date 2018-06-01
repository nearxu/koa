const koa = require("koa");
const logger = require("koa-logger");
const session = require("koa-session");
const bodyParser = require("koa-bodyparser");
const mongoose = require("mongoose");
const db = "mongodb://localhost/nodeapi";
require("./model/user");
mongoose.Promise = require("bluebird");

mongoose.connect(db, { useMongoClient: true });

const app = new koa();

app.use(logger());
app.use(session(app));
app.use(bodyParser());

app.listen(8000);

const router = require("./config/router")();
app.use(router.routes()).use(router.allowedMethods());

console.log("app listen 8000");
