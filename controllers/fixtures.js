const Fixture = require('../models/fixture');

async function index(req, res) {
    try {
        const fixtures = await Fixture.find({});
        res.render('fixtures/index', { fixtures });
    } catch (err) {
        console.log(err);
        res.redirect('/');
    }
}

async function show(req, res) {
    try {
        const fixture = await Fixture.findById(req.params.id);
        const userPredictions = fixture.predictions.filter((p) => p.owner.toString() == req.user._id);
        res.render('fixtures/show', { fixture, userPredictions });
    } catch (err) {
        console.log(err);
        res.rediect('/fixtures');
    }
}

function newFixture(req, res) {
    res.render('fixtures/new', { errorMsg: '' });
}

async function create(req, res) {

    try {
        await Fixture.create(req.body);
        res.redirect('/fixtures');
    } catch (err) {
        console.log(err);
        res.render('fixtures/new', { errorMsg: err.message });
    }
}

module.exports = {
    index,
    create,
    new: newFixture,
    show
};