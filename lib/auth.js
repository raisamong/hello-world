var crypto = require('crypto');

var pwHash = function(passwd, enc) {
  var hash = crypto.createHash('sha1');
  return !!passwd ? hash.update(passwd).digest(enc ? enc : 'hex') : passwd;
};

module.exports.pwHash = pwHash;