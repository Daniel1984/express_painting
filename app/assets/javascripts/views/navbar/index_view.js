define([
  'backbone',
  'text!templates/navbar/index.html'
  ], function(Backbone, template) {
  
  var IndexView = Backbone.View.extend({
    className: 'navbar-container',
    
    initialize: function() {
      this.template = _.template(template);
    },

    render: function() {
      this.$el.html(this.template());
      return this;
    }
  });
  return IndexView;
});
