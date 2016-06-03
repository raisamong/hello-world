var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var db = require('./db.js');
var connection_object= new db();
var connection=connection_object.connection;
var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded body
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/resources', express.static(__dirname + '/resources'));

app.get('/', function (req, res) {
    res.sendFile('resources/html/index.html', { root: __dirname });
});
app.use('/about', function (req, res) {
    console.log(req.body);
    connection.query('SELECT * FROM potluck', function(err, rows, fields) {
        if (rows.length) {
            res.json({
                result: 0,
                data: rows
            });
        }
        else{
            res.json({
                result: 1,
            });
        }
    });
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