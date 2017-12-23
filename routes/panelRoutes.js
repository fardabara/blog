const namespace = '/panel/';
const lib = require('../helpers/lib');
module.exports = function (app) {
	// Middleware Check for Panel

	const authenticationModule = require('../middlewares/authentication');
	app.use('/login', authenticationModule.login);

	// Middleware
	app.use('/panel', (req, res, next) => {
		next();
	});


	let dashboardModule = require('../controllers/panel/dashboard');
	app.get(namespace + 'dashboard', dashboardModule.index);

};