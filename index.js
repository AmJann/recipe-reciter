require('dotenv').config()
const express = require("express")
const methodOverride = require('method-override')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))


const port = process.env.PORT || 4002

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})