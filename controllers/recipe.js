const express = require('express');
const { findByIdAndUpdate } = require('../models/recipe-model.js');
const router = express.Router();

const Recipe = require('../models/recipe-model.js')

router.get('/',(req,res)=>{
    const id = req.params.id
    Recipe.find({})
    .then((data) => {
        console.log(data)
        res.render('index',{Recipe:data,id:id})
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


  router.get('/:id/edit',(req,res) => {
      const id = req.params.id
    Recipe.findById(id)
    .then((data) => {
        res.render('edit',{Recipe:data, id:id})
    })
    .catch(console.error)
  })

  router.put('/:id',(req,res) =>{
    const id = req.params.id
      findByIdAndUpdate({
        title:{
            type:String,
            required: true 
        },
        img: String,
        url: String,
        description: String,
        ingredients:[String],
        instructions: String,
        totalTime: String
      })
      .then((data) => {
          res.redirect('/')
      })
  })
  




module.exports = router