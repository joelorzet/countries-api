const { deleteActivity } = require('./utils/adminFunctions.js');

async function deletedActivity(req, res) {
	try {
		const { countryId, activityId } = req.query;

		const deletedActivity = await deleteActivity(countryId, activityId);

		if (!deletedActivity) {
			return res.status(404).json({ error: 'No se pudo eliminar' });
		}

		return res.status(200).json(deletedActivity);
	} catch (error) {
		return res.status(404).json({ error: error.message });
	}
}

module.exports = { deletedActivity };
