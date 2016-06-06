var crypto = require('crypto');

var pwHash = function(passwd, enc) {
  var hash = crypto.createHash('sha1');
  return !!passwd ? hash.update(passwd).digest(enc ? enc : 'hex') : passwd;
};

var escape = function(data) {
  var info = {};
  _.forEach(data ,function(value, key) {
    info[key] = global.connection.escape(value);
  });
  return info;
};

module.exports.pwHash = pwHash;
module.exports.escape = escape;