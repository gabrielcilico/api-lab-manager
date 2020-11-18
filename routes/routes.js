var express = require("express")
var router = express.Router();
var PessoaController = require("../controllers/PessoaController");
var LaboratorioController = require("../controllers/LaboratorioController");


// Pessoa
router.post('/pessoa', PessoaController.create);
router.get('/pessoa/:id', PessoaController.getById);
router.get('/pessoas', PessoaController.getAll);

// Laboratorio
router.post('/laboratorio', LaboratorioController.create);
router.get('/laboratorio/:id', LaboratorioController.getById);
router.get('/laboratorios', LaboratorioController.getAll);
router.get('/laboratorio/getByNome/:nome', LaboratorioController.getByNome);
router.post('/laboratorio/getByData', LaboratorioController.getByData);
router.post('/laboratorio/getByHora', LaboratorioController.getByHora);
router.post('/laboratorio/getByDataHora', LaboratorioController.getByDataHora);

module.exports = router;