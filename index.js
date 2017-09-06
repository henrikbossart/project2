const express = require('express');
const app = express();

var $ = require('jQuery');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(8081, function () {
  console.log('Magic is happening on port 8081!');
});