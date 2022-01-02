const mongoose = require('mongoose');

module.exports = {
  // Connect to mongo
  connect: (mongoUrl) => {
    mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true});
    mongoose.model('Record', new mongoose.Schema({
      key: String,
      createdAt: Date,
      counts: [Number],
      value: String,
    }));
  },
  // Close connection
  close: async () => {
    await mongoose.connection.close();
  },
};