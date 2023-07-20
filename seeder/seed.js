const mongoose = require('mongoose');
const Fixture = require('../models/fixture');
require('dotenv').config();

const fixtureData = [
    {
        homeTeam: "Liverpool",
        awayTeam: "Chelsea",
        predictions: []
    },
    {
        homeTeam: "Liverpool",
        awayTeam: "Bournemouth",
        predictions: []
    },
    {
        homeTeam: "Newcastle",
        awayTeam: "Liverpool",
        predictions: []
    },
    {
        homeTeam: "Liverpool",
        awayTeam: "Aston Villa",
        predictions: []
    },
    {
        homeTeam: "Wolves",
        awayTeam: "Liverpool",
        predictions: []
    },
    {
        homeTeam: "Liverpool",
        awayTeam: "West Ham",
        predictions: []
    },
    {
        homeTeam: "Tottenham",
        awayTeam: "Liverpool",
        predictions: []
    },
    {
        homeTeam: "Brighton",
        awayTeam: "Liverpool",
        predictions: []
    },
    {
        homeTeam: "Liverpool",
        awayTeam: "Everton",
        predictions: []
    },
    {
        homeTeam: "Liverpool",
        awayTeam: "Nottm Forest",
        predictions: []
    },
    {
        homeTeam: "Luton",
        awayTeam: "Liverpool",
        predictions: []
    },
    {
        homeTeam: "Liverpool",
        awayTeam: "Brentford",
        predictions: []
    },
    {
        homeTeam: "Man City",
        awayTeam: "Liverpool",
        predictions: []
    },
    {
        homeTeam: "Liverpool",
        awayTeam: "Fulham",
        predictions: []
    },
    {
        homeTeam: "Sheffield United",
        awayTeam: "Liverpool",
        predictions: []
    },
    {
        homeTeam: "Crystal Palace",
        awayTeam: "Liverpool",
        predictions: []
    },
    {
        homeTeam: "Liverpool",
        awayTeam: "Man United",
        predictions: []
    },
    {
        homeTeam: "Liverpool",
        awayTeam: "Arsenal",
        predictions: []
    },
    {
        homeTeam: "Burnley",
        awayTeam: "Liverpool",
        predictions: []
    },
    {
        homeTeam: "Liverpool",
        awayTeam: "Newcastle",
        predictions: []
    },
    {
        homeTeam: 'Bournemouth',
        awayTeam: 'Liverpool',
        predictions: []
    },
    {
        homeTeam: 'Liverpool',
        awayTeam: 'Chelsea',
        predictions: []
    },
    {
        homeTeam: 'Arsenal',
        awayTeam: 'Liverpool',
        predictions: []
    },
    {
        homeTeam: 'Liverpool',
        awayTeam: 'Burnley',
        predictions: []
    },
    {
        homeTeam: 'Brentford',
        awayTeam: 'Liverpool',
        predictions: []
    },
    {
        homeTeam: 'Liverpool',
        awayTeam: 'Luton Town',
        predictions: []
    },
    {
        homeTeam: 'Nottm Forest',
        awayTeam: 'Liverpool',
        predictions: []
    },
    {
        homeTeam: 'Liverpool',
        awayTeam: 'Man City',
        predictions: []
    },
    {
        homeTeam: 'Everton',
        awayTeam: 'Liverpool',
        predictions: []
    },
    {
        homeTeam: 'Liverpool',
        awayTeam: 'Brighton',
        predictions: []
    },
    {
        homeTeam: 'Liverpool',
        awayTeam: 'Sheffield United',
        predictions: []
    },
    {
        homeTeam: 'Man United',
        awayTeam: 'Liverpool',
        predictions: []
    },
    {
        homeTeam: 'Liverpool',
        awayTeam: 'Crystal Palace',
        predictions: []
    },
    {
        homeTeam: 'Fulham',
        awayTeam: 'Liverpool',
        predictions: []
    },
    {
        homeTeam: 'West Ham',
        awayTeam: 'Liverpool',
        predictions: []
    },
    {
        homeTeam: 'Liverpool',
        awayTeam: 'Tottenham',
        predictions: []
    },
    {
        homeTeam: 'Aston Villa',
        awayTeam: 'Liverpool',
        predictions: []
    },
    {
        homeTeam: 'Liverpool',
        awayTeam: 'Wolves',
        predictions: []
    },
];

const seedDatabase = async () => {
    try {

        await mongoose.connect(process.env.DATABASE_URL)

        console.log('connected to the database successfully')
        await Fixture.deleteMany({});

        const fixtures = await Fixture.create(fixtureData)
        console.log('fixtures created')

        await mongoose.connection.close()
        console.log('connection to the database closed')

    } catch (err) {
        console.log('error has occured while trying to connect to the database')
        console.log(err)
        await mongoose.connection.close()
        console.log('connection to database closed')
    }
}

seedDatabase()
