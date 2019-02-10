exports.execSQLQuery = function (query, res) {

    global.conn.request()
        .query(query).then(result => {
            var objReturnLst = [];
            result.recordset.forEach(element => {
                var obj = { Id : element.ID, 
                            Nome: element.NOME,
                            Matricula: element.MATRICULA,
                            Expiracao: element.EXPIRACAO  
                          }
                objReturnLst.push(obj);
            });
            res.json(objReturnLst) 
        })
        .catch(err => res.json(err));
}