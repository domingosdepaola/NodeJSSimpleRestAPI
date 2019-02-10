'use strict'
exports.getAll = function(req, res) {
    var repository = require('./repository');
    repository.execSQLQuery("SELECT * from operador", req, res);
}