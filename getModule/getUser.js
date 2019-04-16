const nunjucks      = require('nunjucks');
const Router        = require('koa-router');
const configuration = require('../knexfile')['development']; 
const knex          = require('knex')(configuration); 
let   getUser       = new Router();

getUser.get('/search/:name',async (context,next) => {
    let items    = await knex('users').where(knex.raw('?? like ?', ['user', '%'+context.params.name+'%']))
    context.body = nunjucks.render('index.html',{items});
});

module.exports   = getUser;
