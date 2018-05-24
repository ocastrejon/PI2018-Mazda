var express = require('express');
var router = express.Router();

// rutas para gerente global ---------------------------------------------------
router.get('/', (req, res)=>{
    res.render('4gerenteGlobal/inicioGG');
  });
// rutas para gerente global ---------------------------------------------------

  module.exports = router;