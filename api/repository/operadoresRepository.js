'use strict'
exports.getAll = function(res) {
    var repository = require('./repository');
    repository.execSQLQuery("SELECT * from operador", res);
}