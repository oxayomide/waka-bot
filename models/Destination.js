const mongoose = require('mongoose');

const DestinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  activities: { type: [String], required: true },
  tips: { type: String, required: true },
});

const Destination = mongoose.model('Destination', DestinationSchema);

module.exports = Destination;
