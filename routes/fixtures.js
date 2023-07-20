const express = require('express');
const router = express.Router();
const ensureloggedin = require('../config/ensureLoggedIn');

const fixturesCtrl = require('../controllers/fixtures');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', fixturesCtrl.index);

router.get('/new', fixturesCtrl.new);

router.get('/:id', ensureLoggedIn, fixturesCtrl.show);

router.post('/', fixturesCtrl.create);

module.exports = router;