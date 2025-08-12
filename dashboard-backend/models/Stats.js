const mongoose = require("mongoose")

const statsSchema = new mongoose.Schema({
  label: String,
  value: Number,
  type: String,
  date: { type: Date, default: Date.now },
})

module.exports = mongoose.model("Stats", statsSchema)
