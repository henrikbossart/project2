var ajax = require('./ajax.js');
var $ = require('jquery');

$(document).ready(function() {
    $('#basketball').click(function() {
        ajax.loadHTML('../prosjekt 1/Prosjekt1_Morten/home.html');
    });
});