
/*
 * GET plates listing.
 */

var request = require('request');
exports.list = function(req, res){
	request('http://localhost:3001/plates', function(error, response, body) {
	  res.send(body);
	});
};