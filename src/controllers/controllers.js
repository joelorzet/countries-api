// este archivo sirve unicamente como conector de los controladores y las rutas para tener mas prolijo todo

const { addActivity } = require('./addActivity.js');
const { getCountries } = require('./getCountries.js');
const { getCountry } = require('./getCountry.js');
const { deletedActivity } = require('./deletedActivity.js');

module.exports = { addActivity, deletedActivity, getCountry, getCountries };
