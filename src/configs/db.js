const mongoose = require('mongoose');

module.exports = () => {
  return mongoose.connect('mongodb://localhost:27017/web7-pagination');
}
