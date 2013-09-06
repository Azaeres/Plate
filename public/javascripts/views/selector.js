define([
	'jquery',
	"underscore",
	"backbone",
	"text!javascripts/views/templates/selector.ejs",
	"ejs",
	"javascripts/models/plates"
], function($, _, Backbone, template, EJS, Plates) {

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
				},
				error: function() {
					console.log('error fetching plates');
				}
			});
		},
		select: function(e) {
			console.log('select', $(e.target).val());
		}
	});

	return Selector;
});
