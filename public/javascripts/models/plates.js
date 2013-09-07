define([
	'backbone',
], function(Backbone) {
	var Plates = Backbone.Collection.extend({
		url: '/plates'
	});

	return Plates;
});
