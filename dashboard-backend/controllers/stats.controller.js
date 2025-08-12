const Roadmap = require("../models/Roadmap")

const getRealStats = async (req, res) => {
  try {
    const statusStats = await Roadmap.aggregate([
      { $group: { _id: "$status", count: { $sum: 1 } } }
    ])

    const categoryStats = await Roadmap.aggregate([
      { $group: { _id: "$category", count: { $sum: 1 } } }
    ])

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