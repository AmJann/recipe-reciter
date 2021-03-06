require('../db/connections');
const mongoose = require("mongoose")

const RecipeSchema = new mongoose.Schema(
    {
        
title:{
    type:String,
    required: true 
},
img: String,
url: String,
description: String,
ingredients:[String],
instructions: String,
cookTime: String,
prepTime: String,
totalTime: String

    },
    {timestamps: true}
)
const Recipe = mongoose.model("Recipe", RecipeSchema)
module.exports = Recipe