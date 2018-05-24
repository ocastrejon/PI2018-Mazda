var express = require('express');
var router = express.Router();

// rutas para gerente agencia ---------------------------------------------------
router.get('/', (req, res)=>{
    res.render('3gerenteAgencia/inicioGA');
  });
  // rutas para gerente agencia ---------------------------------------------------
  
  module.exports = router;