// Import the Backbone module and its dependencies
var Backbone = require('backbone');

// Import our router
var AppRouter = require('./app.router');

// Execute after the DOM has loaded
Backbone.$(function () {
  // Create the router
  new AppRouter();
  
  // Start listening for route changes
  Backbone.history.start();
});