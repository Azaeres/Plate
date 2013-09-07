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
		render: function() {
			var html = EJS.render(template, { title:'Plate' });
			this.$el.html(html);

			var selector = new Selector({ el:".selector" }).render();

			return this;
		}
	});

	return App;
});
