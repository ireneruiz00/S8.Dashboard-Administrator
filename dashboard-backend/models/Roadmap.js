const mongoose = require('mongoose')

const roadmapSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    tags: {type: [String], required: true},
    category: { type: String, required: true },
    durationWeeks: Number,
    status: { type: String, enum: ["activo", "completado"], required: true },
    createdAt: {type: Date, default: Date.now},
    owner: {type: String, required: true},
})

module.exports = mongoose.model('Roadmap', roadmapSchema)