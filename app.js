var express = require('express');
var app = express();

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/resources', express.static(__dirname + '/resources'));

app.get('/', function (req, res) {
    res.sendFile('resources/html/index.html', { root: __dirname });
});

app.get('/about', function (req, res) {
    res.send('about');
});

app.get('/index', function (req, res) {
    res.send('Hello World!');
});

app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});