define([
	'backbone',
], function(Backbone) {
	var Plate = Backbone.Model.extend({
		initialize: function() {
			console.log('init plate model', arguments);
		}
	});

	return Plate;
});
