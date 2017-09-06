/////////////////////////////////////////////////////
// IMPORTING MODULES AND DEPENDENCIES
/////////////////////////////////////////////////////

var express     = require('express');
var app         = express();
var port        = process.env.PORT || 8081;

var path        = require('path');
var http        = require('http');
var router      = express.Router();
//var data        = require('./routes/data');

/////////////////////////////////////////////////////
// SETTING UP ENVIRONMENT
/////////////////////////////////////////////////////

// Setting the view engine and defining paths
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

/////////////////////////////////////////////////////
// DEFINING ROUTES
/////////////////////////////////////////////////////

require('./routes/routes')(app);

/////////////////////////////////////////////////////
// LAUNCHING CLIENT
/////////////////////////////////////////////////////

app.listen(port, function () {
    console.log('server running on port ' + port);
});

module.exports = app;