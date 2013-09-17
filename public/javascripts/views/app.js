define([
	'jquery',
	"underscore",
	'backbone',
	"bootstrap",
	"text!javascripts/views/templates/app.ejs",
	"javascripts/views/selector",
	"javascripts/views/problems",
	"javascripts/views/nested-view.js",
  "javascripts/models/app"
], function($, _, Backbone, Bootstrap, template, SelectorView, ProblemsView, NestedView, App) {

	var AppView = NestedView.extend({
		context: NestedView.context,
		template: template
	});

	// var AppView = Backbone.View.extend({
	// 	el: 'body',
	// 	render: function() {
	// 		// var html = EJS.render(template, {
	// 		// 	title: 'Plate',
	// 		// 	selectorView: new SelectorView({ el:".selector-view" })
	// 		// });

	// 		var html = _.template(template, { title:'Plate', f:function() {
	// 			console.log('yey');
	// 		}});
	// 		this.$el.html(html);

	// 		// new SelectorView({ el:".selector-view" }).render();

	// 		// App.problems.on('sync', function() {
	// 		// 	new ProblemsView({ el:".problems-view", model:App.problems }).render();
	// 		// }).fetch();

	// 		return this;
	// 	}
	// });

	return AppView;
});
