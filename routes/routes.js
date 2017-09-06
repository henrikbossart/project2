// routes/routes.js
module.exports = function(app){

    /////////////////////////////////////////////////////
    // HOME PAGE
    /////////////////////////////////////////////////////

    app.get('/', function (req, res) {
        res.render('home.html');
    });

    app.get('/test', function (req, res) {
        res.render('test.html');
    });

    app.get('/home', function (req, res) {
        res.redirect('/');
    })
}
