  var mongoose = require('mongoose');

  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://ankur33:aankur13047G@ds257858.mlab.com:57858/todoapp' || 'mongodb://localhost:27017/TodoApp');

  module.exports = {mongoose};
