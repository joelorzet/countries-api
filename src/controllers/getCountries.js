const { fetchCountries, findAll, allCountries } = require('./utils/adminFunctions.js');
const { Pais, Actividad_Turistica } = require('../db.js');

async function getCountries(req, res) {
	const { name } = req.query;

	// si no viene un name por query entonces directamente devolvemos un array con todos
	// los countrys que esten cargados en la db

	if (!name) {
		try {
			const dbData = await allCountries();

			if (!dbData.length) {
				const result = await fetchCountries();
				await Pais.bulkCreate(result);
				const rest = await allCountries();

				res.status(201).json(rest);
			} else {
				res.status(201).json(dbData);
			}
		} catch (err) {
			res.status(404).json({ error: err.message });
		}
	} else {
		try {
			const country = await findAll(String(name));

			if (!country.length) {
				res.status(404).json({ error: 'No se encontro el pais solicitado' });
			} else {
				res.status(201).json(country);
			}
		} catch (err) {
			res.status(404).json({ error: err.message });
		}
	}
}

module.exports = { getCountries };
