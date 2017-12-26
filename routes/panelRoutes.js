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


	const dashboardModule = require('../controllers/panel/dashboard');
	app.get(namespace + 'dashboard', dashboardModule.index);

	const userModule = require('../controllers/panel/user');
	app.use(namespace + 'users/change_situation/:id', userModule.changeSituation);
	// app.use(namespace + 'users/ajax_list', userModule.ajaxList);
	app.use(namespace + 'users/create', userModule.create);
	app.use(namespace + 'users/index', userModule.index);




};