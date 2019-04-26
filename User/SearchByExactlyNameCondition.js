class SearchByExactlyNameCondition {
    constructor(name) {
        this.name = name;
    }

    buildWhereCondition(query) {
        return query.where('user', '=', this.name);
    }
}

module.exports = SearchByExactlyNameCondition;
