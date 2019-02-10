'use strict'
module.exports = function(app) {
    var operadorController = require('../controllers/operadorController');

    app.route('/getAll').get(operadorController.getAll);

    app.route('/get/:id/:name').get(operadorController.get);

    app.route('/operador/getAll').get(operadorController.getOperadores);
}