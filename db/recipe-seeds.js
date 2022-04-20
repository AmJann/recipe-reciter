// require('dotenv').config()
const Recipe = require('../models/recipe-model');


const seedData = require('./recipe-seeds.json')

Recipe.deleteMany({})
  .then(() => {
      console.log("inserting data")
    return Recipe.insertMany(seedData);
  })
  
//   .catch(function(error){
//     console.log(error); // Failure
// })
  .finally(() => {
    process.exit();
  });