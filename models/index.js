let config = require('../config.json').development;
let fs = require('fs');
let path = require('path');
let Sequelize = require('sequelize');
let lodash = require('lodash');
let sequelize = new Sequelize(config.database.name, config.database.user, config.database.pass, {
	host: config.host.domain,
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	},
	define: {
		timestamps: false
	}
});
let db = {};

fs.readdirSync(__dirname)
	.filter(function (file) {
		return (file.indexOf('.') !== 0) && (file !== 'index.js');
	})
	.forEach(function (file) {
		let model = sequelize.import(path.join(__dirname, file));
		db[model.name] = model;
	});

Object.keys(db).forEach(function (modelName) {
	if (db[modelName].options.hasOwnProperty('associate')) {
		db[modelName].options.associate(db);
	}
});

module.exports = lodash.extend({
	sequelize: sequelize,
	Sequelize: Sequelize
}, db);