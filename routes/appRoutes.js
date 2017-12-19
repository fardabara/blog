let namespace = '/api/';
/***** S E P E R A T O R ***********/
module.exports = function (app) {

	app.post('/login', require('../controllers/app/inital').login);

};