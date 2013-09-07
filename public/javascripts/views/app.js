define([
	'jquery',
	"underscore",
	'backbone',
	"bootstrap",
	"text!javascripts/views/templates/app.ejs",
	"ejs",
	"javascripts/models/plates",
	"javascripts/views/selector",
	"javascripts/models/problems",
	"javascripts/views/problems"
], function($, _, Backbone, Bootstrap, template, EJS, Plates, SelectorView, Problems, ProblemsView) {

	var plates = new Plates();

	var App = Backbone.View.extend({
		el: 'body',
		render: function() {
			var html = EJS.render(template, { title:'Plate' });
			this.$el.html(html);

			new SelectorView({ el:".selector-view" }).render();
			var m = new Problems();
			m.fetch({
				success: function() {
					new ProblemsView({ el:".problems-view", model:m }).render();
				},
				error: function() {

				}
			});

			return this;
		}
	});

	return App;
});
