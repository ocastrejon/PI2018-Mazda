var express = require('express');
var router = express.Router();


router
// VENDEDOR  ===================================================================================================================================
        // INICIO DE USUARIO VENDEDOR 
            .get('/', (req, res)=>{
                const db = require('../database/config');
                db.query('SELECT * FROM vendedor WHERE id_vendedor = 10', (err, rows, fields)=>{
                    if(err) throw err;
                    vendedor = rows;
                    console.log(rows);
                    res.render('2vendedor/inicioV', {vendedor: vendedor});
                })
            })
  


// GERENTE DE AGENCIA  ===================================================================================================================================
        // VISTA DE LOS VENDEDORES 
            .get('/vendedores', (req, res)=>{
                const db = require('../database/config');
                db.query('SELECT * FROM vendedor', (err, rows, fields)=>{
                    if(err) throw err;
                    vendedores = rows;
                    res.render('3gerenteAgencia/vendedores', {vendedores: vendedores});
                })
            })



        // ====================================================================================
        // FORMULARIO PARA DAR DE ALTA UN VENDEDOR 
            .get('/vendedores/altaVendedor', (req, res)=>{
                res.render('3gerenteAgencia/altaVendedor');
            })



        // ====================================================================================
        // GUARDADO DE DATOS DE UN VENDEDOR 
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
            })


            
        // ====================================================================================
        // ELIMINAR UN VENDEDOR 
            .delete('/vendedores/eliminarVendedor', (req, res)=>{
                const db = require('.././database/config');
                let respuesta = {res: false};
                let id = req.body.id;
                db.query('DELETE FROM vendedor WHERE id_vendedor = ?', id, function(err, rows, fields){
                    if(err) throw err;
                    respuesta.res = true;
                    res.json(respuesta);
                });
        })

        // ====================================================================================
        // MODIFICAR UN VENDEDOR 
            .get('/vendedores/modificarVendedor/:id', (req, res)=>{
                let id = req.params.id;
                const db = require('.././database/config');  
                let vendedor = null;
                db.query('SELECT * FROM vendedor WHERE id_vendedor = ?' , id, (err, rows, fields)=>{
                    if(err) throw err;
                    vendedor = rows;
                    res.render('3gerenteAgencia/modificarVendedor', {vendedor: vendedor});
                });
            })
        
            .post('/vendedores/editarVendedor', (req, res)=>{
                const db = require('.././database/config');  
                let vendedor = {
                    id_vendedor: req.body.id_vendedor,
                    nombre: req.body.nombre,
                    telefono: req.body.telefono,
                    domicilio: req.body.domicilio,
                    email: req.body.email,
                    id_gerente_agencia: req.body.id_gerente_agencia
                };
                console.log(req.body);
        
                db.query('UPDATE vendedor SET ? WHERE ?', [vendedor, {id_vendedor: req.body.id_vendedor}], (err, rows, fields)=> {
                    if(err) throw err;
                });
                res.redirect('/inicioV/vendedores');
            });


  module.exports = router;