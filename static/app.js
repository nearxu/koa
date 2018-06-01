const koa = require("koa");
// const logger = require("koa-logger");
// const session = require("koa-session");
// const bodyParser = require("koa-bodyparser");
const fs = require("fs");
const app = new koa();

// app.use(async ctx => {
//   let url = ctx.request.url;
//   ctx.body = url;
// });

/**
 * 用Promise封装异步读取文件方法
 * @param  {string} page html文件名称
 * @return {promise}
 */
// function render(page) {
//   return new Promise((resolve, reject) => {
//     let viewUrl = `./view/${page}`;
//     fs.readFile(viewUrl, "binary", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }

/**
 * 根据URL获取HTML内容
 * @param  {string} url koa2上下文的url，ctx.url
 * @return {string}     获取HTML文件内容
 */

// async function route(url) {
//   let view = "404";
//   switch (url) {
//     case "/":
//       view = "index.html";
//       break;
//     case "/404":
//       view = "404.html";
//       break;
//     default:
//       break;
//   }
//   let html = await render(view);
//   return html;
// }

// app.use(async ctx => {
//   let url = ctx.request.url;
//   let html = await route(url);
//   ctx.body = html;
// });

// get
app.use(async ctx => {
  // let url = ctx.url;
  // let request = ctx.request;
  // let req_query = request.query;
  // let req_querystring = request.querystring;
  let ctx_query = ctx.query;
  let ctx_querystring = ctx.querystring;

  ctx.body = {
    // url,
    // req_query,
    // req_querystring
    ctx_query,
    ctx_querystring
  };
});

app.listen(3000);

console.log("app listen 3000");
