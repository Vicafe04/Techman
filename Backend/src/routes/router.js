const express = require('express');
const router = express.Router();

// const Equipamentos = require('../controllers/equipamentos');
const Usuario = require('../controllers/usuario');
const Comentario = require('../controllers/comentario')

router.post("/login", Usuario.login)
router.get("/readAll", Usuario.readAll)

router.post("/readAll", Comentario.create)
router.get("/readAll", Comentario.readAll)

// router.post("/Equipamentos", Equipamentos.create)
// router.get("/Equipamentos", Equipamentos.readAll)
// router.get("/Equipamentos/:id", Equipamentos.read)
// router.put("/Equipamentos/:id", Equipamentos.update)
// router.delete("/Equipamentos/:id", Equipamentos.del)

module.exports = router;