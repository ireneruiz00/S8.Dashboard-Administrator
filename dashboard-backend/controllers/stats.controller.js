const Stats = require('../models/Stats')

const getAllStats = async (req, res) => {
  try {
    const stats = await Stats.find()
    res.status(200).json(stats)
  } catch (error) {
    res.status(500).json({ error: "Error getting stats" })
  }
}

const createStat = async (req, res) => {
  try {
    const newStat = new Stats(req.body)
    await newStat.save()
    res.status(201).json(newStat)
  } catch (error) {
    res.status(400).json({ error: "Error creating stat" })
  }
}

module.exports = {
  getAllStats,
  createStat,
}