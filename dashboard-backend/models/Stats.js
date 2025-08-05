const mongoose = require("mongoose")

const statsSchema = new mongoose.Schema({
  label: String,
  value: Number,
  type: String,
  date: { type: Date, default: Date.now },
})

module.exports = mongoose.model("Stats", statsSchema)

//qué datos estadísticos quiero mostrar en los charts

//CATEGORY (PORCENTAJE DE CADA UNA), ROADMAPS ACTIVOS, ROADMPAS COMPLETADOS 