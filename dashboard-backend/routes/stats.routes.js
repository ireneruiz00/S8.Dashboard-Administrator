//charts

// GET	/api/stats	Devuelve los datos agregados para los charts


// POST	/api/stats	(Opcional) Crear nuevos datos de prueba

const express = require("express")
const router = express.Router()
const ctrl = require("../controllers/stats.controller")

router.get("/", ctrl.getRealStats)

module.exports = router