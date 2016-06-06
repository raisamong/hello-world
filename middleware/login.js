var express = require('express');
var router = express.Router();
var sqlLogin =
['SElECT * FROM user WHERE email="','"AND password="'];
router.use('/login', function (req, res) {
    global.connection.query( sqlLogin[0] + req.body.email + sqlLogin[1]+ req.body.password +'"', function(err, rows, fields) {
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