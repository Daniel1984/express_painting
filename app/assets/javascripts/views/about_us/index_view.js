define([
  'backbone',
  'text!temptales/about_us/index.html'
  ], function(Backbone, template) {
  
  var IndexView = Backbone.View.extend({
    className: 'container aboutus-container',

    initializer: function() {
      this.template = _.template(template);
    },
    
    render: function() {
      this.$el.html(this.template());
      return this;
    }
  });
  return IndexView;
});
