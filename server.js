const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const port = 8080;
require('./app/routes')(app, {});app.listen(port, () => {  console.log('We are live on ' + port);});