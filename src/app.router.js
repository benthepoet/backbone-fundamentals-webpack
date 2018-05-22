// Import the Backbone module and its dependencies
var Backbone = require('backbone');

// Import our view
var AppView = require('./app.view');

var routerOptions = {
  routes: {
    '*path': function () {
      new AppView();
    }
  }
};

module.exports = Backbone.Router.extend(routerOptions);