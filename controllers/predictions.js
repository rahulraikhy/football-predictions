const Fixture = require('../models/fixture');

async function create(req, res) {

    try {
        const fixture = await Fixture.findById(req.params.id);
        req.body.owner = req.user._id;

        fixture.predictions.push(req.body);
        await fixture.save();
        res.redirect(`/fixtures/${fixture._id}`)
    } catch (err) {
        console.log(err);
    }

}

async function deletePrediction(req, res) {
    try {
        const fixture = await Fixture.findById(req.params.fixtureId);
        const filterPredictions = fixture.predictions.filter((p) => p._id != req.params.predictionId);
        fixture.predictions = filterPredictions;
        fixture.save();
        res.redirect(`/fixtures/${fixture._id}`);
    } catch (err) {
        console.log(err);
    }
}

async function edit(req, res) {
    try {
        const fixture = await Fixture.findById(req.params.fixtureId);
        const prediction = fixture.predictions.id(req.params.predictionId);
        res.render('fixtures/edit', { prediction, fixture });
    } catch (err) {
        console.log(err);
    }
}

async function update(req, res) {
    try {
        const fixture = await Fixture.findById(req.params.fixtureId);
        let prediction = fixture.predictions.id(req.params.predictionId);
        prediction.homeScore = req.body.homeScore;
        prediction.awayScore = req.body.awayScore;
        fixture.save();
        res.redirect(`/fixtures/${fixture._id}`);
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    create,
    delete: deletePrediction,
    edit,
    update
};