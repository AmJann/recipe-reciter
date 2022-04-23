const express = require('express');
const router = express.Router();

const Recipe = require('../models/recipe-model.js')

router.get('/',(req,res)=>{
    Recipe.find({})
    .then((data) => {
        console.log(data)
        res.render('index',{Recipe:data})
    })
});

router.get('/new', (req, res) => {
    res.render('new');
  });

  router.post('/new', (req,res)=>{
    Recipe.create(req.body)
    .then(
        ()=>res.redirect('/')
        )
}); 

module.exports = router