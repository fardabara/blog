/* jshint indent: 2 */
const moment = require('moment-jalaali');

module.exports = function (sequelize, DataTypes) {
	const users = sequelize.define('users', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		mobile: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'mobile'
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'email'
		},
		password: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'password'
		},
		roleId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'role_id'
		},
		situationId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'situation_id'
		},
		activationCode: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'activation_code'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'created_at',
			get() {
				return moment(this.getDataValue('createdAt')).format('jYYYY/jM/jD');
			},
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'updated_at'
		}
	}, {
		tableName: 'users',
		timestamps: true,
		classMethods: {
			associate: function (models) {
				users.belongsTo(models.userSituations, {foreignKey: 'situationId'});
				users.belongsTo(models.userRoles, {foreignKey: 'roleId'});
			}
		},
		instanceMethods: {}
	});
	return users;
};
