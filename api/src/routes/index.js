const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios')
const { getAlls, getDogName, dogsId, DeleteDogs, dogCreate} = require ('../Controllers/ControllerDogs');
const { getTemperamentos } = require ('../Controllers/ControllerTemperament');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs', getAlls)
router.delete('/dog/:id', DeleteDogs)
router.post('/dog', dogCreate)
router.get('/dogss', getDogName)
router.get('/temperament', getTemperamentos)
router.get('/dogs/:id', dogsId)


module.exports = router;
