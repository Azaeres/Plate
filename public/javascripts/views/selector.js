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

	var SelectorView = Backbone.View.extend({
		events: {
			"change select.js-selector": "selectPlate"
		},
		render: function() {
			var that = this;
			plates.fetch({
				success: function() {
					var html = EJS.render(template, plates);
					that.$el.html(html);
					that.selectPlate();
				},
				error: function() {
					console.log('error fetching plates', arguments);
				}
			});

			return this;
		},
		selectPlate: function(e) {
			var optionId = this.$el.find('.js-selector').val();
			var m = plates.get(optionId);
			var plateView = new PlateView({ el:".plate-view", model:m }).render();
		}
	});

	return SelectorView;
});
