const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define('Actividad_Turistica', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
		},
		difficulty: {
			type: DataTypes.INTEGER,
			validate: {
				min: 1,
				max: 5,
			},
		},
		duration: {
			type: DataTypes.FLOAT,
		},
		season: {
			type: DataTypes.STRING,
		},
	});
};
