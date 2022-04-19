const Recipe = require('../models/recipe-model');

const seedData = require('./recipe-seeds.json')

Recipe.deleteMany({})
.then(() =>{
    return Recipe.insertMany(seedData);
})
 .finally(()=> process.exit());