var express = require('express');
var router = express.Router();
router.use('/login', function (req, res) {
    console.log(req.body);
    global.connection.query('SELECT * FROM user', function(err, rows, fields) {
        if (rows != null) {
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