 const User = require('../models/User')

 const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body)
    await newUser.save()
    res.status(201).json(newUser)
  } catch (error) {
    res.status(400).json({ error: "Error creating user" })
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error: "Error getting users" })
  }
}

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" })
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ error: "Error getting user" })
  }
}

const updateUser = async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!updated) return res.status(404).json({ error: "User not found" })
    res.status(200).json(updated)
  } catch (error) {
    res.status(400).json({ error: "Error updating user" })
  }
}

const deleteUser = async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id)
    if (!deleted) return res.status(404).json({ error: "User not found" })
    res.status(200).json({ message: "User deleted" })
  } catch (error) {
    res.status(500).json({ error: "Error deleting user" })
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}