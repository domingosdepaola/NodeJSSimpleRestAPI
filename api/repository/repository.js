exports.execSQLQuery = function (query, res) {

    global.conn.request()
        .query(query).then(result => res.json(result.recordset))
        .catch(err => res.json(err));
}