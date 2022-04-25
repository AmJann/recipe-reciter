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
    
   req.body.ingredients = req.body.ingredients.split(",")
    Recipe.create(req.body)
    .then(
        ()=>res.redirect('/')
        )
});

router.get('/:id',(req,res) =>{
    const id = req.params.id
    Recipe.findById(id)
    .then((data)=>{
        res.render('view',{Recipe:data, id:id})
    })
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
     const ingredients = req.body.ingredients.split(",")
     console.log(ingredients)

      Recipe.findByIdAndUpdate((id),{
        title:req.body.title,
        img: req.body.img,
        url: req.body.url,
        description: req.body.description,
        ingredients:ingredients,
        instructions: req.body.instructions,
        totalTime: req.body.totalTime
      })
      .then((data) => {
          res.redirect('/')
      })
      .catch(console.error)
  })

  router.delete('/:id', (req,res)=>{
    Recipe.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.redirect('/')
    })
    .catch(console.error)
})
  




module.exports = router