const express = require("express")
const router = express.Router()
const ctrl = require("../controllers/stats.controller")

router.get("/", ctrl.getRealStats)

module.exports = router