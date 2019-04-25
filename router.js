const Router        = require('koa-router');

const router        = new Router();

router
    .get('/search/:name', async (context) => {
        let users    = await context.userRepository.getUser(context.params.name);

        context.logger.log({query: context.params.name, result: users});
        context.render('index.html', { users });
    })
    .get('/add/user/:name', async (context, next) => {
        let existUser     = await context.userRepository.getUser(context.params.name);
        if (existUser.length == 0 ) {
            await next();
        } else {
            context.body = { message: 'Your Username is Already Taken!' };
        };       

    }, async(context) => {
        let addedUser = await context.userRepository.addUser(context.params.name);
        context.render('user.html', {user: addedUser});
    });

module.exports   = router;
