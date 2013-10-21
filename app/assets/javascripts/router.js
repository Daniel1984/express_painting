define(['backbone'], function(Backbone) {
  var AppRouter = Backbone.Router.extend({
    currentView: null,
    
    routes: {
      '': 'showIndex'
    },

    showIndex: function() {
      console.log('showing index');
    }
  });
  return AppRouter;
});
