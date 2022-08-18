const { Pais, Actividad_Turistica } = require('../../db.js');

async function allCountries() {
	try {
		const data = await Pais.findAll({ include: Actividad_Turistica });

		return data;
	} catch (e) {
		throw new Error(e);
	}
}

module.exports = { allCountries };
