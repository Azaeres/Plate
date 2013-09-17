define([
	'backbone',
], function(Backbone) {
	var Plates = Backbone.Collection.extend({
		url: '/plates',
    changePlate: function(plateId) {
      this.trigger("plate-change", plateId);
    }

	});

	return Plates;
});
