var mysql = require("mysql");

var method = db.prototype;

function db() {
    /*
    	creating MySql database connection
	*/
    var con = mysql.createConnection({
        host     : 'localhost',
        user     : 'raisamong',
        password : 'loveyuri55',
        database : 'ptn'
    });
	this.connection=con;
}
method.getcon = function() {
	return this;
};

module.exports = db;
