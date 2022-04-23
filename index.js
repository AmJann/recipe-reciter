require('dotenv').config()
const express = require('express')
const RecipeControllers = require('./controllers/recipe')
const methodOverride = require('method-override')
const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/' + 'public'));
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use( RecipeControllers)
app.set("view engine","ejs")




const port = process.env.PORT || 4002

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})