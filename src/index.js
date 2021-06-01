'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();
app.use(bodyParser.json());

/*


app.post('/hello', (req, res) => {  
  res.json('Hello back from Bogsynth');
});

module.exports = app;
*/


router.post('/hello', (req, res) => {  
  res.json('Hello back from Bogsynth');
});

app.use('/.netlify/functions/api', router)

module.exports = app;
module.exports.handler = serverless(app);
