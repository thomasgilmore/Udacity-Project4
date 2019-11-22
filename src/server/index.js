/* Empty JS object to act as endpoint for all routes */
projectData = {};

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('website'));

//const port = 3000;
/* Spin up the server*/
/*
const server = app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };
*/
// GET route
app.get('/all2', sendData);

function sendData (req, res) {
  res.send(data);
};

// POST route
app.post('/add', callBack);

function callBack(req,res){
  res.send('POST received');
}

// POST Zip
const data = [];

app.post('/wheather', addZip);

function addZip (req,res){
    data.push(req.body);
    //console.log(data);
    mostRecentEntry = {
      temperature: req.body.temperature,
      date: req.body.date,
      userResponse: req.body.userResponse,
    };

    data.push(mostRecentEntry);
    res.send(data);
    console.log(data);
}

app.post("/save", (req, res) => {
  projectData.temp = req.body.temp;
  projectData.date = req.body.date;
  projectData.content = req.body.content;
  res.end();
});





//****** Test ****************************

const dotenv = require('dotenv');
dotenv.config();
var aylien = require("aylien_textapi");
var path = require('path')
//const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

//const app = express()

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})