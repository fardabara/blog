let express = require('express');
let app = express();
let config = require('../config.json').development;
let port = process.env.PORT || config.host.port;

let fs = require('fs');
let path = require('path');
let bodyParser = require('body-parser');
let morgan = require('morgan');

module.exports = {
	express,
	app,
	port,
	bodyParser,
	fs,
	path,
	morgan
};