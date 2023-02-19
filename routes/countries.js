var express = require('express');
var router = express.Router();
var countriesController = require("../controllers/countriesController");

router.get('/', countriesController.list);

module.exports = router;