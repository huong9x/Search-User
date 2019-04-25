const User = require('./User');

class UserRepository {
    constructor(knex) {
        this.knex = knex;
    }
    async getUser(name) {
        let results = await this.knex.select('*').from('users').where('user', 'like', '%' + name + '%');
        return results.map(result => new User(result.id, result.user));
    }
    async addUser(name) {
        let ids = await this.knex('users').insert({user: name});
        return new User(ids[0], name);
    }
}

module.exports = UserRepository;
