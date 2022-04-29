require('dotenv').config()
require('ejs')
const express = require('express')
const RecipeControllers = require('./controllers/recipe')
const methodOverride = require('method-override')
const ejsLayouts = require('express-ejs-layouts');
const app = express()



app.set("view engine","ejs")
app.use(express.json())
app.use(ejsLayouts);
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(express.static(__dirname + '/' + 'public'));
app.use( RecipeControllers)




const port = process.env.PORT || 4002

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})