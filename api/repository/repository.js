exports.execSQLQuery = function (query, req, res) {
    const sql = require('mssql');
    const connStr = "Server=localhost\\SQLEXPRESS;Database=TOLL_N1;User Id=sa;Password=sa12345";

    sql.connect(connStr)
        .then(conn => global.conn = conn)
        .catch(err => console.log(err));

    global.conn.request()
        .query(query).then(result => res.json(result.recordset))
        .catch(err => res.json(err));
}