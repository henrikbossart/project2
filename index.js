const express = require('express');
const app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/views/home.html');
});

app.listen(8081, function () {
  console.log('Magic is happening on port 8081!');
});