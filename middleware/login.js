var express = require('express');
var router = express.Router();
var libAuth = require('../lib/auth.js')

router.route('/login')
    .get(function(req, res) {
        res.send('Get a random book');
    })
    .post(function(req, res) {
        //setup info
        console.log('hash',libAuth.pwHash(req.body.password));
        var info = libAuth.escape(req.body);
        var sql = "SELECT * FROM ?? WHERE ?? = ? AND ?? = ?";
        var inserts = ['user', 'username', info.username, 'password', info.password];
        sql = global.mysql.format(sql, inserts);

        //query
        global.connection.query(sql, function(err, rows, fields) {
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