define([
  'backbone',
  'text!templates/about_us/index.html'
  ], function(Backbone, template) {
  
  var IndexView = Backbone.View.extend({
    className: 'container aboutus-container',

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
