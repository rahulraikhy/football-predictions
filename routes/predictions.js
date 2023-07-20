const express = require('express');
const router = express.Router();
const ensureloggedin = require('../config/ensureLoggedIn');

const predictionsCtrl = require('../controllers/predictions');

router.post("/fixtures/:id/predictions", ensureloggedin, predictionsCtrl.create);

module.exports = router;