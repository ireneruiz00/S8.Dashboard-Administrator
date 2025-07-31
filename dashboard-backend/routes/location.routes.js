//map

//get /api/locations devuelve todas las ubis guardadas

//post /api/locations guarda una nueva ubicación (lat, lng, descripción…)

const express = require("express")
const router = express.Router()
const ctrl = require("../controllers/location.controller")

router.get("/", ctrl.getAllLocations)
router.post("/", ctrl.createLocation)

module.exports = router