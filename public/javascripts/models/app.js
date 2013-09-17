(function() {
  var _cache = {};
  var App = {};

  define([
    "json3/lib/json3"
  ], function(JSON) {
    App.getModule = function(Klass, options) {
      // Generating a key for the 'name' module, instantiated with 'options'.

      var values = [];
      var key = name;
      options = _.extend({}, options);

      var keys = _(options).chain().keys().sort().value();
      _(keys).each(function(key) { 
        values.push(options[key]);
      });

      key += JSON.stringify(keys);
      key += JSON.stringify(values);

      // Cache a new instance if one isn't already cached.
      if (_.isUndefined(_cache[key])) {
        _cache[key] = new Klass(options);
      }

      return _cache[key];
    };

    return App;
  });
})();

/*

var cache = {}

module.exports = function getModule(name, opts) {
  var key = name + opts.toString()

  if (!cache[key]) {
    Klass = require(name)
    cache[key] = new Klass(opts)
  }

  return cache[key]
}

*/