/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
	const userSituations = sequelize.define('userSituations', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'name'
		},
		flagId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'flag_id'
		}
	}, {
		tableName: 'user_situations'
	});
	return userSituations;
};