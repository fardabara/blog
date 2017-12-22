let lib = require('../../helpers/lib');

/************ S E P E R A T O R ********************/
exports.login = (req, res) => {
	lib.dbConnection.users.findAll().then(function (users) {
		res.json(users);
	}).catch(function (err) {
		console.log(err);
	});
};