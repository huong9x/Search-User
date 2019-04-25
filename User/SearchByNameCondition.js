class SearchByNameCondition {
    constructor(name) {
        this.name = name;
    }

    buildWhereCondition(query) {
        return query.where('user', 'like', '%' + this.name + '%');
    }
}

module.exports = SearchByNameCondition;
