const router = require('express').Router();
const { getCountries } = require('../controllers/controllers.js');
const { getCountry } = require('../controllers/controllers.js');

router.get('/', getCountries);
router.get('/:idPais', getCountry);

module.exports = router;
