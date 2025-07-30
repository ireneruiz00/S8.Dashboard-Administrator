// GET /api/roadmaps
// El dashboard lo usa para mostrar todos los roadmaps existentes.
// La vista pública puede buscar roadmaps por temática.

// GET /api/roadmaps/:id
// Cuando alguien hace clic en un roadmap, se ve el detalle completo con todos los subtemas.

// POST /api/roadmaps
// Se usa cuando el usuario genera un roadmap nuevo desde el formulario.

// PUT /api/roadmaps/:id
// Para actualizar el contenido de un roadmap (cambiar un subtema, añadir tiempo, etc.).

// DELETE /api/roadmaps/:id
// Si un roadmap es obsoleto o incorrecto, el admin puede eliminarlo.

const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/roadmap.controller");

router.get("/", ctrl.getAllRoadmaps) 
router.get("/:id", ctrl.getRoadmapById)
router.post("/", ctrl.createRoadmap) 
router.put("/:id", ctrl.updateRoadmap) 
router.delete("/:id", ctrl.deleteRoadmap) 

module.exports = router