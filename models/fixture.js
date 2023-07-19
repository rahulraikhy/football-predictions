const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const predictionSchema = new Schema({
    homeScore: {
        type: Number,
        min: 0,
        max: 99,
        default: 0
    },
    awayScore: {
        type: Number,
        min: 0,
        max: 99,
        default: 0
    },
    goalScorer: {
        type: [String]
    }
})

const fixtureSchema = new Schema({
    homeTeam: {
        type: String
    },
    awayTeam: {
        type: String
    },
    predictions: [predictionSchema]
});

module.exports = mongoose.model('Fixture', fixtureSchema);