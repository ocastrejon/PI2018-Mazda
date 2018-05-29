var express = require('express');
var router = express.Router();


// rutas para clientes ---------------------------------------------------
/* clientes/       */
router

      .get('/', (req, res)=>{
            const db = require('../database/config')
            db.query('SELECT * FROM cliente', (err, rows, fields)=>{
                  if(err) throw err;
                  clientes = rows;
                  res.render('2vendedor/clientes', {clientes: clientes});
            })
      })


/* clientes/altaCliente       */
      .get('/altaCliente', (req, res)=>{
            res.render('2vendedor/altaCliente')
      })


      .post('/altaCliente', (req, res)=>{   
            cliente = {
                id_cliente: req.body.id_cliente,
                nombre: req.body.nombre,
                telefono: req.body.telefono,
                email: req.body.email,
                domicilio: req.body.domicilio,
                id_vendedor: req.body.id_vendedor
            }
            
            const db = require('../database/config');
            db.query('INSERT INTO cliente SET ?', cliente, (err, rows, fields)=>{
                if(err) throw err;
                res.redirect('/clientes');   
            })
      })
      
      .delete('/eliminarCliente', (req, res)=>{
            // console.log('entró al delete -------------------------------------------------------------------------');
            // console.log(req.body);

            // console.log('-------------------------------------------------------------------------');

            const db = require('.././database/config');
            let respuesta = {res: false};
            let id = req.body.id;
            db.query('DELETE FROM cliente WHERE id_cliente = ?', id, function(err, rows, fields){
                  if(err) throw err;
                  respuesta.res = true;
                  res.json(respuesta);
                  // console.log(respuesta);
            });
      })

module.exports = router;