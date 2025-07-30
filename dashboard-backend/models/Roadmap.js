const mongoose = require('mongoose')

const roadmapSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    topics: {type: [String], required: true},
    durationWeeks: Number,
    createdAt: {type: Date, default: Date.now},
    owner: String,
})

module.exports = mongoose.model('Roadmap', roadmapSchema)