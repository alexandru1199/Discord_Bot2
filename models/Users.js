module.exports = (sequelize, DataTypes) => {
	return sequelize.define('users', {
		user_id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		xp:{
			type: DataTypes.INTEGER,
			defaultValue:0,
			allowNull:false,
		},
		balance: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: false,
		},
		
		level:{
			type:DataTypes.INTEGER,
			defaultValue:1,
			allowNull:false,
		}
	}, {
		timestamps: false,
	});
};