define([
	"jquery",
	"underscore",
	"backbone",
	"text!javascripts/views/templates/plate.ejs",
	"ejs",
	"javascripts/models/plate"
], function($, _, Backbone, template, EJS, Plate) {

	var PlateView = Backbone.View.extend({
		initialize: function() {
			this.render();
		},
		render: function() {
			var html = EJS.render(template, this.model.toJSON());
			this.$el.html(html);
		}
	});

	return PlateView;
});