const express = require('express');

const OngController = require('./controllers/OngController')
const OngValidator = require('./validators/Ong');
const ProfileController = require('./controllers/ProfileController')
const {ProfileHeaderValidator} = require('./validators/Profile');
const IncidentController = require('./controllers/IncidentController')
const {IncidentPageValidator, IncidentDeleteValidator} = require('./validators/Incidents');

const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs',OngValidator, OngController.create);

routes.get('/incidents',IncidentPageValidator, IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id',IncidentDeleteValidator, IncidentController.delete)

routes.get('/profile',ProfileHeaderValidator, ProfileController.index)


module.exports = routes;