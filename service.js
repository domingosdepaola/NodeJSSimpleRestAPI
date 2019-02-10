'use strict'
var express = require('express');
var app = express();
var port = process.env.port || 3000;
var hostName = process.env.hostName || 'localhost';

const sql = require('mssql');
const connStr = "Server=localhost\\SQLEXPRESS;Database=TOLL_N1;User Id=sa;Password=sa12345";

sql.connect(connStr)
    .then(conn => global.conn = conn)
    .catch(err => console.log(err));


var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes');

routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);