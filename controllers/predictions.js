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

module.exports = {
    create
};