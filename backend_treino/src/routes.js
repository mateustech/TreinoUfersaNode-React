const express = require('express');
const DenunciaController = require('./Controllers/DenunciaController');

const routes = express.Router();

routes.get('/noticias', DenunciaController.index);
routes.get('/noticias/:id', DenunciaController.show);
routes.post('/noticias', DenunciaController.store);
routes.put('/noticias/:id', DenunciaController.update);
routes.delete('/noticias/:id', DenunciaController.destroy);
module.exports = routes;