var express = require('express');
var router = express.Router();

// rutas para vendedor ---------------------------------------------------
router.get('/', (req, res)=>{
    res.render('2vendedor/inicioV');
  });
// rutas para vendedor ---------------------------------------------------


  module.exports = router;