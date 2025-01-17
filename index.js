// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/api/whoami', function (req, res) {
  const response = {
    ipaddress: '',
    language: '',
    software: '',
  };
  response.ipaddress = req.ip;
  response.software = req.headers['user-agent'];
  response.language = req.headers['accept-language'];
  //{"ipaddress":"162.158.158.209","language":"es-SV,es;q=0.9,de-DE;q=0.8,de;q=0.7,it-IT;q=0.6,it;q=0.5,en-US;q=0.4,en;q=0.3,es-419;q=0.2","software":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"}
  res.json({
    ipaddress: response.ipaddress,
    language: response.language,
    software: response.software
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
