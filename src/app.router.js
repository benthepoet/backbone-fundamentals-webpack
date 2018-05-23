// Import Backbone and its dependencies
var Backbone = require('backbone');

// Import our view
var AppView = require('./app.view');

// Declare our options we'll use to extend the base router
var routerOptions = {
  routes: {
    '*path': function () {
      new AppView();
    }
  }
};

// Export our extended router
module.exports = Backbone.Router.extend(routerOptions);