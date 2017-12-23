/* jshint indent: 2 */

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
			field: 'created_at'
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'updated_at'
		}
	}, {
		tableName: 'users',
		timestamps: true
	});
	users.associate = (models) => {
		users.blongsTo(models.userRoles, {foreignKey: 'roleId'});
		users.blongsTo(models.userSituations, {foreignKey: 'situationId'});
	};
	users.prototype.someMethod = () => {

	};
	return users;
};
