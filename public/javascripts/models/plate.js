define([
	"underscore",
	'backbone',
], function(_, Backbone) {
	console.log('model', arguments);

	var Plate = Backbone.Model.extend({
		url: '/plates',
		initialize: function() {
			console.log('init plate model', arguments);
		}
	});

	var plate = new Plate();

	return plate;
});
