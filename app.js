const Koa           = require('koa');
const router        = require('./getModule/router');
const createLogger  = require("./loggers");
const config        = require("./config");

const app           = new Koa();
const logger        = createLogger(config.log);

app.use(async (context, next) => {
    context.logger = logger;
    await next();
});

app.use(router.routes());
app.listen(8081);
