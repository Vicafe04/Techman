const express = require('express');
const router = express.Router();

const Equipamentos = require('../controllers/equipamento');
const Usuario = require('../controllers/usuario');
const Comentario = require('../controllers/comentario')

router.post("/Usuario/login", Usuario.login)
router.get("/Usuario", Usuario.readAll)

router.post("/Comentario", Comentario.create)
router.get("/Comentario", Comentario.readAll)
router.delete("/Comentario/:id", Comentario.del)

router.post("/Equipamentos", Equipamentos.create)
router.get("/Equipamentos", Equipamentos.readAll)
router.get("/Equipamentos/:id", Equipamentos.read)
router.delete("/Equipamentos/:id", Equipamentos.del)

module.exports = router;