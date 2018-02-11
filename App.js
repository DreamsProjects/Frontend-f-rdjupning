
const express = require('express')
const app = express()
const fs = require('fs')

app.use(express.static('public'))

const bodyParser = require('body-parser')

var fire = require('./Firebase.js')

app.use(bodyParser.urlencoded({ extended: false }))

app.post("/form", function (req, res) {
  fire.sendpost(req.body, res)
  return false;
})

app.get('/route', function (req, res) {
  fire.getData(req.body, res)
})


app.get('/Index', function (req, res, next) {
  res.sendFile(__dirname + 'public/Index.html')
})

module.exports = app;

app.listen(8000)



