const express = require('express');
const app = express();
const config = require('../config.json').development;
const port = process.env.PORT || config.host.port;
const dbConnection = require('../models/');

const constants = require('../helpers/constants');

const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const randomString = require('randomstring');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const flash = require('flash');
const moment = require('moment-jalaali');
const cookieParser = require('cookie-parser');



module.exports = {
	express,
	app,
	port,
	bodyParser,
	fs,
	path,
	morgan,
	config,
	dbConnection,
	randomString,
	constants,
	_,
	passport,
	session,
	cookieParser,
	flash,
	moment
};