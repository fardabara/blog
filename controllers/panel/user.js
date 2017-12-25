const lib = require('../../helpers/lib');
let namespace = 'panel/user/';
/******** S E P A R A T O R*********/
exports.index = (req, res) => {
	lib.dbConnection.users.findAll({
		include:[{
			model: lib.dbConnection.userSituations
		},{
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