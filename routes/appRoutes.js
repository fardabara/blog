let namespace = '/api/';
/***** S E P E R A T O R ***********/
module.exports = function (app) {
	// Middleware check for App
	app.use('/api', (req, res, next) => {
		next();
	});

	app.post(namespace + 'login', require('../controllers/app/inital').login);

};