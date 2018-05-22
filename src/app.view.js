// Import the Backbone module and its dependencies
var Backbone = require('backbone');

// Declare our options we'll use to extend the base view
var viewOptions = {
  el: 'body',
  
  initialize: function () {
    this.render();
  },
  
  render: function () {
    this.$el.text('App Ready');
  }
};

// Export our extended view
module.exports = Backbone.View.extend(viewOptions);