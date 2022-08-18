const { Pais } = require('../../db.js');

async function findOne(id) {
	try {
		const country = await Pais.findOne({
			where: {
				id: id.toString().toUpperCase(),
			},
		});

		if (!country) throw new Error('No se encontro el pais solicitado');

		return country;
	} catch (err) {
		throw new Error(err);
	}
}

module.exports = { findOne };
