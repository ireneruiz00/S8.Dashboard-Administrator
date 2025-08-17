const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  color: { type: String },
  start: { type: Date, required: true },
  end: { type: Date },
  allDay: { type: Boolean, default: false },
  roadmapId: { type: mongoose.Schema.Types.ObjectId, ref: "Roadmap" },
  type: String, //tarea, recordatorio, deadline, estudio
})

module.exports = mongoose.model('Event', eventSchema)