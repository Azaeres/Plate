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

	console.log('selector view', plates);

	var Selector = Backbone.View.extend({
		initialize: function() {
			_.bindAll(this, 'select');
			this.$el = $(this.el);
			this.render();
			console.log('rendered selector');
		},
		events: {
			"change select.js-selector": "select"
		},
		render: function() {
			var that = this;
			plates.fetch({
				success: function() {
					console.log('plates json:', plates);
					var html = EJS.render(template, plates);
					that.$el.html(html);
					// that.$el.find('option').each(function(i, val) {
					// 	$(val).data(plates.models[i].toJSON());
					// });
				},
				error: function() {
					console.log('error fetching plates');
				}
			});
		},
		select: function(e) {
			// var $select = $(e.target).parent();
			var optionId = $(e.target).val();
			// var $option = $select.find('option[value="'+optionId+'"]');
			// var data = $option.data();

			var m = plates.get(optionId);
			console.log(optionId, plates, m);
			var plateView = new PlateView({ el:".plate-view", model:m });
		}
	});

	return Selector;
});
