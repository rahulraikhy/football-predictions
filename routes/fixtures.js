const express = require('express');
const router = express.Router();

const fixturesCtrl = require('../controllers/fixtures');

router.get('/', fixturesCtrl.index);

router.get('/new', fixturesCtrl.new);

router.get('/:id', fixturesCtrl.show);

router.post('/', fixturesCtrl.create);

module.exports = router;