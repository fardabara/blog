const config = require('../config.json').development;
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const _ = require('lodash');
const sequelize = new Sequelize(config.database.name, config.database.user, config.database.pass, {
	host: config.host.domain,
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	},
	define: {
		underscored: false,
		syncOnAssociation: true,
		charset: 'utf8',
		collate: 'utf8_general_ci',
		timestamps: false
	}
});
const db = {};

fs.readdirSync(__dirname).filter(function (file) {
	return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach(function (file) {
	const model = sequelize.import(path.join(__dirname, file));
	db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
	if ('associate' in db[modelName]) {
		db[modelName].associate(db);
	}
});
module.exports = _.extend({
	sequelize: sequelize,
	Sequelize: Sequelize
}, db);