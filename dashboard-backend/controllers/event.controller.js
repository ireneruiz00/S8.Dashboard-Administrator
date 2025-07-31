const Event = require('../models/Event')

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find()
    res.status(200).json(events)
  } catch (error) {
    res.status(500).json({ error: "Error getting events" })
  }
}

const createEvent = async (req, res) => {
  try {
    const newEvent = new Event(req.body)
    await newEvent.save()
    res.status(201).json(newEvent)
  } catch (error) {
    res.status(400).json({ error: "Error creating event" })
  }
}

const deleteEvent = async (req, res) => {
  try {
    const deleted = await Event.findByIdAndDelete(req.params.id)
    if (!deleted) return res.status(404).json({ error: "Event not found" })
    res.status(200).json({ message: "Event deleted" })
  } catch (error) {
    res.status(500).json({ error: "Error deleting event" })
  }
}

module.exports = {
  getAllEvents,
  createEvent,
  deleteEvent,
}