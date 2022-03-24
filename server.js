const express = require('express')



// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
  // MIDDLEWARE
  app.set('views', __dirname + '/views')
  // MIDDLEWARE
  app.use(express.static('public'))
  app.set('view engine', 'jsx')
  app.engine('jsx', require('express-react-views').createEngine())

//listen 
app.listen(PORT, () => {
    console.log('nomming at port', PORT);
})

// Breads
  const breadsController = require('./controllers/breads_controller.js')
  app.use('/breads', breadsController)

// ROUTES
app.get("/", (req,res)=>{
  res.send("Welcome to an Awesome App about Breads!")
  
})
// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})