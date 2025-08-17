const express = require("express")
const router = express.Router()
const ctrl = require("../controllers/location.controller")

router.get("/", ctrl.getAllLocations)
router.post("/", ctrl.createLocation)

module.exports = router