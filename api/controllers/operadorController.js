'use strict'
exports.getAll = function (req, res) {
    var result = { name: 'ola mundo' };
    res.json(result);
}

exports.get = function (req, res) {
    var id = req.params.id;
    var name = req.params.name;
    var result = 'o nome passado foi : ' + name + 'e seu id e ' + id;
    return res.json(result);
}

exports.getOperadores = function (req, res) {
    
    var query = 'SELECT * FROM operador';

    global.conn.request()
        .query(query).then(result => res.json(result.recordset))
        .catch(err => res.json(err));
}


