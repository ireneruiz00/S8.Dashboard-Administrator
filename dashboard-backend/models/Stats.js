const mongoose = require("mongoose")

const statsSchema = new mongoose.Schema({
  label: String,
  value: Number,
  type: {
    type: String, // "bar" o "line"
  }
});

module.exports = mongoose.model("Stats", statsSchema)

//qué datos quiero mostrar en los charts