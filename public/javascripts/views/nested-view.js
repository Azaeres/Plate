define([
  'jquery',
  "underscore",
  'backbone'
], function($, _, Backbone) {

  var NestedView = Backbone.View.extend({
    initialize: function() {
      // Wires up the model events hash
      var that = this;
      _(this.modelEvents).map(function(methodName, eventType) {
        if(!_.isUndefined(that.model)) {
          console.log('wiring up', eventType, that);
          that.model.on(eventType, function(e) {
            that[methodName](e, that.model);
          }, that);
        }
      });
    },
    context: {},
    template: '<div></div>',
    markup: function() {
      return _.template(this.template, this.context);
    },
    render: function() {
      this.$el.html(this.markup());
      if (!_.isUndefined(this.attributes)) {
        this.$el.attr(this.attributes);
      }
      
      return this;
    },

    // Convenience methods
    superInit: function() {
      this.constructor.__super__.initialize.apply(this, arguments);
    },
  });

  NestedView.context = {
    view: function(viewClass, options) {
      var viewId = _.uniqueId('view-id-') ;
      require([viewClass], function(ViewClass) {
        var sel = '#'+viewId;
        options = _.extend({ "data-view":viewClass }, options);
        new ViewClass({ el:sel, attributes:options }).render();
      });
      return '<div id="'+viewId+'"></div>';
    }
  };

  return NestedView;
});
