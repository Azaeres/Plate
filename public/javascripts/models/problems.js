define([
	'backbone',
], function(Backbone) {
	var Problems = Backbone.Collection.extend({
		url: '/problems'
	});

	return Problems;
});
