define([
	'backbone',
], function(Backbone) {
	var Problem = Backbone.Model.extend({
		initialize: function() {
			console.log('> init problem model');
		}
	});

	return Problem;
});
