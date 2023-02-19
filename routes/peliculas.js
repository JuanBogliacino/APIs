var express = require('express');
var router = express.Router();
var peliculasController = require("../controllers/peliculasController");

router.get('/', peliculasController.list);
router.get('/search', peliculasController.search);
router.get('/:id', peliculasController.show);
router.post('/', peliculasController.store);
router.delete('/:id', peliculasController.delete);

module.exports = router;
