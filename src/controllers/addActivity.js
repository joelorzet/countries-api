const { Pais, Actividad_Turistica } = require('../db.js');

async function addActivity(req, res) {
	try {
		const { countryId, name, difficulty, duration, season } = req.body;

		if (!countryId || !name || !difficulty || !duration || !season) {
			res.status(404).json({ error: 'Faltan datos' });
		} else {
			const country = await Pais.findAll({
				where: {
					id: countryId,
				},
			});
			const IDS = country.map((e) => e.id);

			const activity = await Actividad_Turistica.create({
				name,
				difficulty: Number(difficulty),
				duration: Number(duration),
				season,
				//countryId,
			});

			await activity.addPais(IDS);

			res.status(201).json({ activity });
		}
	} catch (err) {
		res.status(404).json({ error: err.message });
	}
}

module.exports = { addActivity };
