define([
  'jquery',
  'backbone',
  'router',
  'views/navbar/index_view',
  'skrollr'
  ], function($, Backbone, Router, NavbarView) {
    return {
      init: function() {
        $('div.content').append(new NavbarView().render().el);
        router = new Router();
        Backbone.history.start({pushState: true});
        skrollr.init()
      }
    }
});
