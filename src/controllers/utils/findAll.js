const { Pais } = require('../../db.js');
const { Op } = require('sequelize');

async function findAll(name) {
	try {
		const country = await Pais.findAll({
			where: {
				name: { [Op.iLike]: `%${String(name)}%` },
			},
		});

		return country;
	} catch (err) {
		throw new Error(err);
	}
}

module.exports = { findAll };
