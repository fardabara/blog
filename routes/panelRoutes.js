let namespace = '/panel/';
module.exports = function (app) {
	// Middleware Check for Panel
	app.use('/panel', (req, res, next) => {
		next();
	});


	let dashboardModule = require('../controllers/panel/dashboard');
	app.get(namespace + 'dashboard', dashboardModule.index);

};