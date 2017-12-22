let lib = require('../../helpers/lib');
let namespace = 'panel/';
/******** S E P A R A T O R*********/
exports.index = (req, res) => {
	res.render(namespace+'dashboard');
};