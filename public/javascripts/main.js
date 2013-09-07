
require.config({
  "baseUrl": "/",
	paths: {
		"jquery": "jquery/jquery",
		"underscore": "underscore-amd/underscore",
		"backbone": "backbone-amd/backbone",
		"text": "requirejs-text/text",
		"ejs": "ejs/ejs",
		"bootstrap": "bootstrap/dist/js/bootstrap.min"
	},
	shim: {
		"ejs": {
			exports: "ejs"
		},
		"bootstrap": {
			deps: ['jquery']
		}
	}
});

require([
	"javascripts/views/app"
], function(AppView) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
    new AppView({ el:'body' });
});
