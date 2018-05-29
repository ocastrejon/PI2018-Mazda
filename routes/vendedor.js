var express = require('express');
var router = express.Router();

// VENDEDOR  ---------------------------------------------------

router
        // INICIO DE USUARIO VENDEDOR 
        .get('/', (req, res)=>{
            res.render('2vendedor/inicioV');
        })
  

        // VISTA DE LOS VENDEDORES DE USUARIO GERENTE DE AGENCIA
        .get('/vendedores', (req, res)=>{
            const db = require('../database/config');
            db.query('SELECT * FROM vendedor', (err, rows, fields)=>{
                if(err) throw err;
                vendedores = rows;
                res.render('3gerenteAgencia/vendedores', {vendedores: vendedores});
            })
        })


        // FORMULARIO PARA DAR DE ALTA UN VENDEDOR DE USUARIO GERENTE DE AGENCIA
        .get('/vendedores/altaVendedor', (req, res)=>{
            res.render('3gerenteAgencia/altaVendedor');
        })

   
        // GUARDADO DE DATOS DE UN VENDEDOR DE USUARIO GERENTE DE AGENCIA
        .post('/vendedores/altaVendedor', (req, res)=>{

            let vendedor = {
                id_vendedor: req.body.id_vendedor,
                nombre: req.body.nombre,
                telefono: req.body.telefono,
                email: req.body.email,
                domicilio: req.body.domicilio,
                salario: req.body.salario,
                id_gerente_agencia: req.body.id_gerente_agencia
            }
   
            const db = require('../database/config');
                db.query('INSERT INTO vendedor SET ?', vendedor, (err, rows, fields)=>{
                    if (err) throw err;
                    res.redirect('/inicioV/vendedores');
                });
        });

// RUTAS DE UN VENDEDOR ---------------------------------------------------


  module.exports = router;