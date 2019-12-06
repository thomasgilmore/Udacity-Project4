const dotenv = require('dotenv');
dotenv.config();
var aylien = require("aylien_textapi");
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors')
const app = express();

var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

app.use(cors())

app.use(express.static('dist'))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/apiCall', (req, res) => {

  textapi.sentiment({
    'url': req.body.text
   }, function(error, response) {
     if (error === null) {
       console.log(response);
       res.send(response);
     }
   });

});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

