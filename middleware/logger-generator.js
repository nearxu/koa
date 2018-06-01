function log(ctx) {
  console.log(ctx.method, ctx.headerhost + ctx.url);
}

module.exports = function() {
  return function*(next) {
    log(this);
    if (next) {
      yield next;
    }
  };
};
