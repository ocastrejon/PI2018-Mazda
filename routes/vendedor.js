var express = require('express');
var router = express.Router();
let passport = require('passport');



router
// VENDEDOR  ===================================================================================================================================
        // INICIO DE USUARIO VENDEDOR 
            .get('/', (req, res)=>{
                if (req.user == undefined || req.user.tipo != 'Vendedor') {
                    res.render('index');
                } else {
                    const db = require('../database/config');
                    let email = req.user.email;
                    db.query(`select u.id_usuario, v.nombre, v.telefono, v.email, v.domicilio, v.salario, v.id_gerente_agencia from usuario as u 
                                INNER join vendedor as v on v.id_usuario = u.id_usuario
                                where u.email = ? `, email, (err, rows, fields)=>{
                        if(err) throw err;
                        vendedor = rows;
                        res.render('2vendedor/inicioV', {vendedor: vendedor});
                    })
                }
            })
  


// GERENTE DE AGENCIA  ===================================================================================================================================
        // VISTA DE LOS VENDEDORES 
            .get('/vendedores', (req, res)=>{
                if (req.user == undefined) {
                    // console.log(req.user.tipo);
                    res.render('index');
                } else {
                    const db = require('../database/config');
                    db.query('SELECT * FROM vendedor', (err, rows, fields)=>{
                        if(err) throw err;
                        vendedores = rows;
                        res.render('3gerenteAgencia/vendedores', {vendedores: vendedores});
                    })
                }
            })



        // ====================================================================================
        // FORMULARIO PARA DAR DE ALTA UN VENDEDOR 
            .get('/vendedores/altaVendedor', (req, res)=>{
                if (req.user == undefined || req.user.tipo != 'Gerente de Agencia') {
                    res.render('index');
                } else {
                    const db = require('../database/config');
                    db.query('select id_usuario from gerente_agencia', (err, rows, fields) =>{
                        if (err) throw err;
                        let idGA = rows;
                        res.render('3gerenteAgencia/altaVendedor', {idGA : idGA});
                    });
                }
            })

        // GUARDADO DE DATOS DE UN VENDEDOR 
            .post('/vendedores/altaVendedor', passport.authenticate('local-signup', { failureFlash: true }) , (req, res)=>{
                if (req.user == undefined) {
                    res.render('index');
                } else {
                    const db = require('../database/config');
                    db.query('select id_usuario from usuario order by id_usuario desc limit 1', (err, rows, fields) => {
                        let userID = rows[0].id_usuario;

                        let vendedor = {
                            id_usuario: userID,
                            nombre: req.body.nombre,
                            telefono: req.body.telefono,
                            email: req.body.email,
                            domicilio: req.body.domicilio,
                            salario: req.body.salario,
                            id_gerente_agencia: req.body.id_gerente_agencia
                        }
        
                        db.query('INSERT INTO vendedor SET ?', vendedor, (err, rows, fields)=>{
                            if (err) throw err;
                            res.redirect('/inicioV/vendedores');
                        });
                    })
                }
            })


            
        // ====================================================================================
        // ELIMINAR UN VENDEDOR 
            .delete('/vendedores/eliminarVendedor', (req, res)=>{
                if (req.user == undefined || req.user.tipo != 'Gerente de Agencia') {
                    res.render('index');
                } else {
                    const db = require('.././database/config');
                    let respuesta = {res: false};
                    let id = req.body.id;
                    db.query('DELETE FROM vendedor WHERE id_usuario = ?', id, function(err, rows, fields){
                        if(err) {
                            res.json({message:'Error'})
                        } else {
                            respuesta.res = true;
                            res.json(respuesta);
                        }
                    });
                }    
            })



        // ====================================================================================
        // MODIFICAR UN VENDEDOR 
            .get('/vendedores/modificarVendedor/:id', (req, res)=>{
                if (req.user == undefined || req.user.tipo != 'Gerente de Agencia') {
                    res.render('index');
                } else {
                    let id = req.params.id;
                    console.log(id);
                    const db = require('.././database/config');  
                    let vendedor = null;
                    db.query('SELECT * FROM vendedor WHERE id_usuario = ?' , id, (err, rows, fields)=>{
                        if(err) throw err;
                        vendedor = rows;
                        res.render('3gerenteAgencia/modificarVendedor', {vendedor: vendedor});
                    });
                }
            })
        
            .post('/vendedores/editarVendedor', (req, res)=>{
                if (req.user == undefined) {
                    res.render('index');
                } else {
                    const db = require('.././database/config');  
                    let vendedor = {
                        id_usuario: req.body.id_usuario,
                        nombre: req.body.nombre,
                        telefono: req.body.telefono,
                        domicilio: req.body.domicilio,
                        email: req.body.email,
                        id_gerente_agencia: req.body.id_gerente_agencia
                    };
                    console.log(req.body);
            
                    db.query('UPDATE vendedor SET ? WHERE ?', [vendedor, {id_usuario: req.body.id_usuario}], (err, rows, fields)=> {
                        if(err) throw err;
                        res.redirect('/inicioV/vendedores');
                    });
                }
            });


  module.exports = router;