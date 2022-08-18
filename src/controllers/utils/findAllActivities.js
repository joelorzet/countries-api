const { Pais, Actividad_Turistica } = require('../../db.js');

async function findAllActivities(id) {
	try {
		const country = await Pais.findAll({
			where: {
				id: id.toString().toUpperCase(),
			},
			include: Actividad_Turistica,
		});

		if (!country.length) throw new Error('El pais no existe');

		return country;
	} catch (err) {
		throw new Error(err);
	}
}

module.exports = { findAllActivities };
