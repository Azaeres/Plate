define([
	"jquery",
	"underscore",
	"backbone",
	"text!javascripts/views/templates/problems.ejs",
	"ejs",
	"javascripts/models/problem"
], function($, _, Backbone, template, EJS, problem) {

	var ProblemsView = Backbone.View.extend({
		render: function() {
			var html = EJS.render(template, this.model);
			this.$el.html(html);
			return this;
		}
	});

	return ProblemsView;
});