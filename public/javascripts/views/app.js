define([
	'jquery',
	'backbone',
	"text!javascripts/views/templates/app.ejs",
	"ejs"
], function($, Backbone, template, EJS) {

	var App = Backbone.View.extend({
		el: 'body',
		initialize: function() {
			this.$el = $(this.el);
			this.render();
		},
		events: {
			"click div": "handleClick"
		},
		handleClick: function() {
			console.log('click');
		},
		render: function() {
			console.log('rendering...');

			var html = EJS.render(template, { title:'Foo' });
			this.$el.html(html);

			return this;
		}
	});

	return App;
});
