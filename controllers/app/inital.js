let lib = require('../../helpers/lib');

/************ S E P E R A T O R ********************/
exports.login = (req, res) => {
	// lib.dbConnection.users.findAll().then(function (users) {
	// 	res.json(users);
	// }).catch(function (err) {
	// 	console.log(err);
	// });

	// const length = 10;
	// for (i = 0; i < length; i++) {
	// 	lib.dbConnection.users.create({
	// 		mobile: '0912' + lib.randomString.generate({length: 7, charset: 'numeric'}),
	// 		email: lib.randomString.generate({length: 12, charset: 'alphabetic', lowerCase: true}) + '@gmail.com',
	// 		roleId: lib.constants.user.role.user,
	// 		situationId: Math.floor(Math.random() * 4 + 1),
	// 		activationCode: lib.randomString.generate({length: 12, charset: 'alphabetic'})
	//
	// 	}).then(function (users) {
	//
	// 	}).catch(function (err) {
	// 		console.log(err);
	// 	});
	// }
	// res.json(users);

	// lib.dbConnection.users.update( {
	// 	mobile: 9124990295,
	// 	password: 111111
	// },{where: {id: 1}}).then(function (users) {
	// 	res.json(users);
	//
	// }).catch(function (err) {
	// 	console.log(err);
	// });
	console.log(req.user);
};