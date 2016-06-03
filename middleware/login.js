var express = require('express');
var router = express.Router();
router.use('/login', function (req, res) {
    console.log(req.body);
    global.connection.query('SELECT * FROM potluck', function(err, rows, fields) {
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

module.exports = router;