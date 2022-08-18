const router = require('express').Router();
const { addActivity, deletedActivity } = require('../controllers/controllers.js');

router.post('/', addActivity);
router.delete('/', deletedActivity);

module.exports = router;
