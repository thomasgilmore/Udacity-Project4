const dotenv = require('dotenv');
dotenv.config();
var aylien = require("aylien_textapi");
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var cors = require('cors')
const app = express();

/*var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});
*/

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

app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})