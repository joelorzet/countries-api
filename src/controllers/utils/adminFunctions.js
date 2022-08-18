// al igual que con controllers traemos las funciones aca y las exportamos como objeto para
// poder sacarlas de un solo lugar

const { allCountries } = require('./allCountries.js');
const { deleteActivity } = require('./deleteActivity.js');
const { fetchCountries } = require('./fetchCountries.js');
const { findAll } = require('./findAll.js');
const { findAllActivities } = require('./findAllActivities.js');
const { findOne } = require('./findOne.js');

module.exports = { allCountries, deleteActivity, fetchCountries, findAll, findOne, findAllActivities };
