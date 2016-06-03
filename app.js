var express = require('express');
var app = express();
var mysql = require('mysql');
var db = require('./db.js');
var bodyParser = require('body-parser');

var login = require('./middleware/login.js');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded body
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/resources', express.static(__dirname + '/resources'));
app.use('/', login);

app.get('/', function (req, res) {
    res.sendFile('resources/html/index.html', { root: __dirname });
});

app.get('/index', function (req, res) {
    res.send('Hello World!');
});

var setupMysql = function () {
    var connection_object= new db();
    var connection = connection_object.connection;
    return connection;
};

global.connection = setupMysql();

module.exports = app;