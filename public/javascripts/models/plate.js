define([
	'backbone',
], function(Backbone) {
	var Plate = Backbone.Model.extend({
		url: '/plates',
		initialize: function() {
			console.log('init plate model', arguments);
		}
	});

	return Plate;
});
