const lib = require('../../helpers/lib');
let namespace = 'panel/user/';
/******** S E P A R A T O R*********/
exports.index = (req, res) => {
	lib.dbConnection.users.findAll({
		include: [{
			model: lib.dbConnection.userSituations
		}, {
			model: lib.dbConnection.userRoles
		}],
		order: [['createdAt','DESC']]
	}).then(function (users) {
		res.render(namespace + 'index', {
			data: users,
			constants: lib.constants,
			userChange: req.flash('userChange')
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
/******** S E P A R A T O R*********/
exports.changeSituation = (req, res) => {
	const body = JSON.parse(JSON.stringify(req.body));
	lib.dbConnection.users.update(body, {where: {id: req.params.id}}).then(function () {
		req.flash('userChange', 'وضعیت کاربر با موفقیت تغییر یافت');
		res.json({Result: true});
	}).catch(function (err) {
		console.log(err);
	});
};
/******** S E P A R A T O R*********/
// exports.ajaxList = (req, res) => {
// 	console.log(req.query);
// 	console.log(req.query.search.value);
//
// 	lib.dbConnection.users.findAll().then(function (users) {
// 		res.send(users);
// 	}).catch(function (err) {
// 		console.log(err);
// 	});
// };