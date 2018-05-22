// Import the Backbone module and its dependencies
var Backbone = require('backbone');

var viewOptions = {
  el: 'body',
  
  initialize: function () {
    this.render();
  },
  
  render: function () {
    this.$el.text('App Ready');
  }
};

module.exports = Backbone.View.extend(viewOptions);