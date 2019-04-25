class SearchByIdCondition {
    constructor(id) {
        this.id = id;
    }

    buildWhereCondition(query) {
        return query.where('id', this.id);
    }
}

module.exports = SearchByIdCondition;