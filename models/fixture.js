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
        type: String
    }
})

const fixtureSchema = new Schema({
    fixture: String,
    homeScore: Number,
    awayScore: Number,
    goalScorer: String,
    predictions: [predictionSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Fixture', fixtureSchema);