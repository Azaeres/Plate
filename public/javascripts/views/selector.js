define([
	'jquery',
	"underscore",
	"backbone",
	"text!javascripts/views/templates/selector.ejs",
	"ejs",
	"javascripts/models/plates",
	"javascripts/views/plate"
], function($, _, Backbone, template, EJS, Plates, PlateView) {

	var plates = new Plates();

	var Selector = Backbone.View.extend({
		events: {
			"change select.js-selector": "select"
		},
		render: function() {
			var that = this;
			plates.fetch({
				success: function() {
					console.log('> plates', plates.toJSON());
					var html = EJS.render(template, plates);
					that.$el.html(html);
					that.select();
				},
				error: function() {
					console.log('error fetching plates', arguments);
				}
			});

			return this;
		},
		select: function(e) {
			var optionId = this.$el.find('.js-selector').val();
			var m = plates.get(optionId);
			var plateView = new PlateView({ el:".plate-view", model:m }).render();
		}
	});

	return Selector;
});
