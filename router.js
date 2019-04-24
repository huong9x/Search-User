const Router        = require('koa-router');

const router        = new Router();

router.get('/search/:name', async (context) => {
    let users    = await context.userRepository.getUser(context.params.name);

    context.logger.log({query: context.params.name, result: users});
    context.render('index.html', { users });
});

module.exports   = router;
