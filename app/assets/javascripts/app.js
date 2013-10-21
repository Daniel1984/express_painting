define([
  'jquery',
  'backbone',
  'router',
  'views/navbar/index_view',
	'views/about_us/index_view',
  'skrollr'
  ], function($, Backbone, Router, NavbarView, AboutView) {
    return {
      init: function() {
				var content = $('div.content');
        content.append(new NavbarView().render().el);
				content.append(new AboutView().render().el);
        router = new Router();
        Backbone.history.start({pushState: true});
        skrollr.init()
      }
    }
});
