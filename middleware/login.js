var express = require('express');
var router = express.Router();
var libAuth = require('../lib/auth.js')
var sqlLogin =
['SElECT * FROM user WHERE email="','"AND password="'];

router.route('/login')
    .get(function(req, res) {
        res.send('Get a random book');
    })
    .post(function(req, res) {
        console.log('hash',libAuth.pwHash(req.body.password));
        global.connection.query( sqlLogin[0] + req.body.username + sqlLogin[1]+ req.body.password +'"', function(err, rows, fields) {
            if (rows.length) {
                res.json({
                    result: 0,
                    data: rows
                });
            }
            else{
                res.json({
                    result: 1,
                    msg: 'data not exist'
                });
            }
        });
    })
    .put(function(req, res) {
        res.send('Update the book');
    });

router.use('/register', function (req, res) {
    global.connection.query( sqlLogin[0] + req.body.username + sqlLogin[1]+ req.body.password +'"', function(err, rows, fields) {
        if (rows.length) {
            res.json({
                result: 0,
                data: rows
            });
        }
        else{
            res.json({
                result: 1,
                msg: 'data not exist'
            });
        }
    });
});

module.exports = router;