let lib = require('../helpers/lib');
const namespace = 'authentication/';
/******** S E P A R A T O R ***********/
exports.login = (req, res) => {
	if (req.method === 'GET') {
		res.render(namespace + 'login');
	} else if (req.method === 'POST') {
		console.log(req.body);
	}
};