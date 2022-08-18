const { Pais, Actividad_Turistica } = require('../../db.js');

async function deleteActivity(countryId, activityId) {
	try {
		if (!countryId || !activityId) throw new Error('Faltan datos');

		const pais = await Pais.findOne({ where: { id: countryId.toUpperCase() } });

		const deletedActivity = await pais.removeActividad_Turistica(activityId);

		const activity = await Actividad_Turistica.findOne({ where: { id: deletedActivity } });

		return activity;
	} catch (err) {
		throw new Error(err);
	}
}

module.exports = { deleteActivity };
