require.config({
  paths: {
    jquery: 'lib/jquery-2.0.3',
    underscore: 'lib/underscore',
    backbone: 'lib/backbone',
    text: 'lib/text',
    domready: 'lib/domReady',
    i18n: 'lib/i18n',
    skrollr: 'lib/skrollr'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    skrollr: {
      exports: 'skrollr'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

require([
  'domready',
  'app'
  ], function(Domready, app){
    Domready(
      function() {
        app.init();
      }
    );
});
