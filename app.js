const Koa    = require('koa');
const app    = new Koa();
const getUser = require('./getModule/getUser');

app.use(getUser.routes());
app.listen(8081);
