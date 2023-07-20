const express = require('express');
const router = express.Router();
const ensureloggedin = require('../config/ensureLoggedIn');

const predictionsCtrl = require('../controllers/predictions');

router.post('/fixtures/:id/predictions', ensureloggedin, predictionsCtrl.create);

router.delete('/fixtures/:fixtureId/predictions/:predictionId', predictionsCtrl.delete);

router.get('/fixtures/:fixtureId/predictions/:predictionId/edit', predictionsCtrl.edit);

router.put('/fixtures/:fixtureId/predictions/:predictionId', predictionsCtrl.update);

module.exports = router;