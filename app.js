var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var db = require('./db.js');
var connection_object= new db();
var connection=connection_object.connection;
var app = express();
var login = require('./middleware/index.js');

global.connection = connection;

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

module.exports = app;