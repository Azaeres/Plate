define([
	'jquery',
	"underscore",
	'backbone',
	"bootstrap",
	"text!javascripts/views/templates/app.ejs",
	"ejs",
	"javascripts/models/plates",
	"javascripts/views/selector"
], function($, _, Backbone, Bootstrap, template, EJS, Plates, Selector) {

	var plates = new Plates();

	var App = Backbone.View.extend({
		el: 'body',
		initialize: function() {
			this.$el = $(this.el);
			this.render();
		},
		events: {
			"click div.app": "handleClick"
		},
		handleClick: function() {
			console.log('fetching...');
			plates.fetch({
				success: function(collection, response, options) {
					console.log('fetched', plates.toJSON());
				},
				error: function(collection, response, options) {
					console.log('fetched', arguments);
				}
			});
		},
		render: function() {
			var html = EJS.render(template, { title:'Plate' });
			this.$el.html(html);

			var selector = new Selector({ el:".selector" });

			return this;
		}
	});

	return App;
});
