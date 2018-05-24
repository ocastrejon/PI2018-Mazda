var express = require('express');
var router = express.Router();


// rutas para clientes ---------------------------------------------------
router.get('/', (req, res)=>{
    const db = require('../database/config')
    db.query('SELECT * FROM cliente', (err, rows, fields)=>{
      if(err) throw err;
      clientes = rows;
    //   console.log(clientes);
      res.render('2vendedor/clientes', {clientes: clientes});
    });
});
// rutas para clientes ---------------------------------------------------


  module.exports = router;