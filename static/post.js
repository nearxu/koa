const koa = require("koa");
const bodyParser = require("koa-bodyparser");
const app = new koa();

app.use(bodyParser());
app.use(async ctx => {
  if (ctx.url === "/" && ctx.method === "GET") {
    let html = `
        <h1>koa2 request post demo</h1>
        <form method="POST" action="/">
          <p>userName</p>
          <input name="userName" /><br/>
          <p>nickName</p>
          <input name="nickName" /><br/>
          <p>email</p>
          <input name="email" /><br/>
          <button type="submit">submit</button>
        </form>
      `;
    ctx.body = html;
  } else if (ctx.url === "/" && ctx.method === "POST") {
    // let postData = await parsePostData(ctx);
    // 当POST请求的时候，中间件koa-bodyparser解析POST表单里的数据，并显示出来
    let postData = ctx.request.body;
    ctx.body = postData;
  } else {
    ctx.body = `<h1>404 !!!!</h1>`;
  }
});

function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postdata = "";
      ctx.req.addListener("data", data => {
        postdata += data;
      });
      ctx.req.addListener("end", function() {
        let parseData = parseQueryStr(postdata);
        resolve(parseData);
      });
    } catch (err) {
      reject(err);
    }
  });
}

function parseQueryStr(queryStr) {
  let queryData = {};
  let arr = queryStr.split("&");
  for (let i = 0; i < arr.length; i++) {
    let lists = arr[i].split("=");
    queryData[lists[0]] = decodeURIComponent(lists[1]);
  }
  return queryData;
}

app.listen(3000);

console.log("app listen 3000");
