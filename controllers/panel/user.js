const lib = require('../../helpers/lib');
let namespace = 'panel/user/';
/******** S E P A R A T O R*********/
exports.index = (req, res) => {
	lib.dbConnection.users.findAll({
		include: [{
			model: lib.dbConnection.userSituations
		}, {
			model: lib.dbConnection.userRoles
		}]
	}).then(function (users) {
		res.render(namespace + 'index', {
			data: users
		});
	}).catch(function (error) {
		console.log("an error happen", error);
	});
};
/******** S E P A R A T O R*********/
exports.create = (req, res) => {
	if (req.method === 'GET') {
		lib.dbConnection.userRoles.findAll().then(function (userRoles) {
			res.render(namespace + 'create', {
				userRoles: userRoles
			});
		}).catch(function (err) {
			console.log(err);
		});
	} else if (req.method === 'POST') {
		let body = JSON.parse(JSON.stringify(req.body));
		body.situationId = lib.constants.user.situation.accepted;
		lib.dbConnection.users.create(body).then(function () {
			res.redirect('/panel/users/index');
		}).catch(function (err) {
			console.log(err);
		});
	}
};