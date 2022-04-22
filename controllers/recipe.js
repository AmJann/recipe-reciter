const express = require('express');
const router = express.Router();

const Recipe = require('../models/recipe-model.js')

router.get('/',(req,res)=>{
    Recipe.find({})
    .then((data) => {
        res.render('index',{Recipe:data})
    })
});

router.get('/new', (req, res) => {
    res.render('new');
  });

module.exports = router