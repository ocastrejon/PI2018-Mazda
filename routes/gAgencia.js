var express = require('express');
var router = express.Router();

// GERENTE DE AGENCIA ---------------------------------------------------

router
        // INICIO DE UN GERENTE DE AGENCIA
        .get('/', (req, res)=>{
            res.render('3gerenteAgencia/inicioGA');
        })

        
        // VISTA DE GERENTES DE AGENCIA DE USUARIO GERENTE GLOBAL
        .get('/gerentesAgencia', (req, res)=>{
            const db = require('../database/config');
            db.query('SELECT * FROM gerente_agencia', (err, rows, fields)=>{
                if(err) throw err;
                gerente_agencia = rows;
                res.render('4gerenteGlobal/gerentesAgencia', {gerente_agencia: gerente_agencia});
            })
        })


        // ALTA DE UN GERENTE DE AGENCIA -----------------------------
        .get('/gerentesAgencia/altaGerenteAgencia', (req, res)=>{
            res.render('4gerenteGlobal/altaGerente');
        })


        // GUARDADO DE DATOS DE UN GERENTE DE AGENCIA DE USUARIO GERENTE GLOBAL
        .post('/gerentesAgencia/altaGerenteAgencia', (req, res)=>{
            
            let gerenteAgencia={
                id_gerente_agencia: req.body.id_gerente_agencia,
                nombre: req.body.nombre,
                telefono: req.body.telefono,
                email: req.body.email,
                domicilio: req.body.domicilio,
                salario: req.body.salario,
                id_gerente_global: req.body.id_gerente_global,
                id_sucursal: req.body.id_sucursal
            }
            
            const db = require('../database/config');
            db.query('INSERT INTO gerente_agencia SET ?', gerenteAgencia, (err, rows, fields)=>{
                if(err) {
                    console.log('hubo error en la insercion ----------------------------------')
                    throw err;
                    }
                        res.redirect('/inicioGA/gerentesAgencia');
                });
        });

  // rutas para gerente agencia ---------------------------------------------------
  
  module.exports = router;