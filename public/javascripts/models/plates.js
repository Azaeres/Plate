define([
	'backbone',
], function(Backbone) {
	var Plates = Backbone.Collection.extend({
		url: '/plates',
		initialize: function() {
			console.log('init plate collection', arguments);
		}
	});

	return Plates;
});
