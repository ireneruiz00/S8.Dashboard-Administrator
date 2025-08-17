const Location = require('../models/Location')

const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find()
    res.status(200).json(locations)
  } catch (error) {
    res.status(500).json({ error: "Error getting locations" })
  }
}

const createLocation = async (req, res) => {
  try {
    const newLocation = new Location(req.body)
    await newLocation.save()
    res.status(201).json(newLocation)
  } catch (error) {
    res.status(400).json({ error: "Error creating location" })
  }
}

module.exports = {
  getAllLocations,
  createLocation,
}