const express = require('express');
const router = express.Router();

// const Equipamentos = require('../controllers/equipamentos');
const Usuarios = require('../controllers/usuarios');

router.post("/login", Usuarios.login)

// router.post("/Equipamentos", Equipamentos.create)
// router.get("/Equipamentos", Equipamentos.readAll)
// router.get("/Equipamentos/:id", Equipamentos.read)
// router.put("/Equipamentos/:id", Equipamentos.update)
// router.delete("/Equipamentos/:id", Equipamentos.del)

module.exports = router;