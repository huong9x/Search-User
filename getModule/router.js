const nunjucks      = require('nunjucks');
const Router        = require('koa-router');
const configuration = require('../knexfile')['development']; 
const knex          = require('knex')(configuration); 
const router        = new Router();

router.get('/search/:name', async (context) => {
    let users    = await knex('users').where(knex.raw('?? like ?', ['users.user', '%' + context.params.name + '%']));

    context.logger.log({query: context.params.name, result: users});

    context.body = nunjucks.render('index.html', { users });
});

module.exports   = router;
