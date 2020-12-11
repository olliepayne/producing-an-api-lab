const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chess', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});