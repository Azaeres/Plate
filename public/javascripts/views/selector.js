define([
  'jquery',
  "underscore",
  "text!javascripts/views/templates/selector.ejs",
  "javascripts/views/plate",
  "javascripts/views/nested-view",
  "javascripts/models/app",
  "javascripts/models/plates"
], function($, _, template, PlateView, NestedView, App, Plates) {

	var plates = App.getModule(Plates);
	plates.fetch();

	var SelectorView = NestedView.extend({
		model: plates,
		context: NestedView.context,
		template: template,
		// initialize: function(options) {
		// 	this.superInit.apply(this, arguments);
		// },
		events: {
			"change select.js-selector-view": "selectPlate"
		},
		modelEvents: {
			"sync": "renderOptionsList"
		},

		// Event handlers
		renderOptionsList: function(e) {
			// re-renders the <options> list
			// console.log('renderOptionsList', this.$el.data());
			this.context = plates;
			this.render();
		},
		selectPlate: function(e) {
			var optionId = this.$el.find('.js-selector-view').val();
			var plate = App.plates.get(optionId);

			// console.log('select plate', e, optionId, plate);
			this.model.changePlate(optionId);
			
			// new PlateView({ el:".plate-view", model:plate }).render();
		}
	});

	return SelectorView;
});
