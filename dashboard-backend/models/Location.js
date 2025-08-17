const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  type: String, //empresa, curso, evento...
  roadmapId: { type: mongoose.Schema.Types.ObjectId, ref: "Roadmap" },
})

module.exports = mongoose.model('Location', locationSchema)