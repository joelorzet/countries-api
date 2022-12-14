const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const countries = require('./countries.routes.js');
const activities = require('./activities.routes.js');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countries);
router.use('/activities', activities);

module.exports = router;
