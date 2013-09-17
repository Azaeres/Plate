define([
	"jquery",
	"underscore",
  "javascripts/views/nested-view",
	"text!javascripts/views/templates/plate.ejs",
	"ejs",
	"javascripts/models/plates",
  "javascripts/models/app"
], function($, _, NestedView, template, EJS, Plates, App) {

	var plates = App.getModule(Plates);
	plates.fetch();

	var PlateView = NestedView.extend({
		plateId: plates.first().id,
		model: plates,
		context: NestedView.context,
		template: template,

		events: {
			"change select.js-selector-view": "selectPlate"
		},
		modelEvents: {
			"sync": "renderPlate",
			"plate-change": "selectPlate"
		},

		selectPlate: function(plateId) {
			var plate = this.model.get(plateId);

			this.context = _.extend(plate.attributes, NestedView.context);
			console.log('selectPlate', this.context);
			this.render();
		},
		renderPlate: function(e) {
			console.log('render', e, this.model.get(this.plateId));
		}

	});

	return PlateView;
});