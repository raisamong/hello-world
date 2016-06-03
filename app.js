var express = require('express');
var mysql = require('mysql');
var app = express();
var db = require('./db.js');
var connection_object= new db();
var connection=connection_object.connection;

connection.connect();

connection.query('SELECT * FROM user', function(err, rows, fields) {
  console.log(rows)
});

connection.end();

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/resources', express.static(__dirname + '/resources'));

app.get('/', function (req, res) {
    res.sendFile('resources/html/index.html', { root: __dirname });
});
app.use('/about', function (req, res) {
  console.log('Request Type:', req.method);
  res.json({ result: 1 });
});
//app.get('/about', function (req, res) {
//    console.log('eiei');
//    res.json({ result: 1 });
//});

app.get('/index', function (req, res) {
    res.send('Hello World!');
});

//app.listen(4000, function () {
//    console.log('Example app listening on port 4000!');
//});

module.exports = app;