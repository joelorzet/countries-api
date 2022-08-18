const { findAllActivities } = require('./utils/adminFunctions.js');

async function getCountry(req, res) {
	const { idPais } = req.params;

	try {
		const country = await findAllActivities(String(idPais).toUpperCase());

		res.status(201).json(country);
	} catch (err) {
		res.status(404).json(err.message);
	}
}

module.exports = { getCountry };
