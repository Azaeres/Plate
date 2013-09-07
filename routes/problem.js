
/*
 * GET problem listing.
 */

var request = require('request');
exports.list = function(req, res) {
	request('http://localhost:3001/problems', function(error, response, body) {
	  res.send(body);
	});
};