const Stats = require('../models/Stats')
const Roadmap = require("../models/Roadmap")

const getRealStats = async (req, res) => {
  try {
    // 1. Conteo por estado (activo vs completado)
    const statusStats = await Roadmap.aggregate([
      { $group: { _id: "$status", count: { $sum: 1 } } }
    ])

    // 2. Conteo por categoría
    const categoryStats = await Roadmap.aggregate([
      { $group: { _id: "$category", count: { $sum: 1 } } }
    ])

    // 3. Transformamos a un formato fácil para Chart.js
    res.json({
      status: statusStats.map(s => ({
        label: s._id,
        value: s.count
      })),
      categories: categoryStats.map(c => ({
        label: c._id,
        value: c.count
      }))
    })

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error getting stats" })
  }
}

module.exports = {
  getRealStats
}