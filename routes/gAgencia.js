var express = require('express');
var router = express.Router();
let passport = require('passport');

router
// GERENTE DE AGENCIA ==========================================================================================================================
        // INICIO DE UN GERENTE DE AGENCIA  
        .get('/', (req, res) => {
            if (req.user == undefined || req.user.tipo != 'Gerente de Agencia') {
                res.render('index');
            } else {
                const db = require('../database/config');
                let email = req.user.email;
                db.query(`select u.id_usuario, g.nombre, g.telefono, u.email, g.domicilio, g.salario, g.id_gerente_global, g.id_sucursal from usuario as u 
                            INNER join gerente_agencia as g on g.id_usuario = u.id_usuario
                            where u.email = ? `, email, (err, rows, fields)=>{
                    if(err) throw err;
                    gerenteAgencia = rows;
                    res.render('3gerenteAgencia/inicioGA', {gerenteAgencia: gerenteAgencia});
                })
            }
        })



        // =============================================================================================
        // VISTA DE RESCIBIR STOCK 
        .get('/recibirStock', (req, res) => {
            if (req.user == undefined || req.user.tipo != 'Gerente de Agencia') {
                res.render('index');
            } else {
                res.render('3gerenteAgencia/recibirStock');
            }
        })



        // =============================================================================================
        // VISTA DE SOLICITUD DE AUTOS 
        .get('/solicitudesAutos', (req, res) => {
            if (req.user == undefined || req.user.tipo != 'Gerente de Agencia') {
                res.render('index');
            } else {
                res.render('3gerenteAgencia/solicitudesAutos');
            }
        })



        // =============================================================================================
        // VISTA DE REPORTES 
        .get('/reportes', (req, res) => {
            if (req.user == undefined || req.user.tipo != 'Gerente de Agencia') {
                res.render('index');
            } else {
                res.render('3gerenteAgencia/reportes');
            }
        })




// GERENTE GLOBAL ==============================================================================================================================
        // VISTA DE GERENTES DE AGENCIA 
        .get('/gerentesAgencia', (req, res) => {
            if (req.user == undefined) {
                res.render('index');
            } else {
                const db = require('../database/config');
                db.query('SELECT * FROM gerente_agencia', (err, rows, fields) => {
                    if (err) throw err;
                    gerente_agencia = rows;
                    res.render('4gerenteGlobal/gerentesAgencia', { gerente_agencia: gerente_agencia });
                })
            }
        })



        // =============================================================================================
        // ALTA DE UN GERENTE DE AGENCIA 
        .get('/gerentesAgencia/altaGerenteAgencia', (req, res) => {
            if (req.user == undefined || req.user.tipo != 'Gerente Global') {
                res.render('index');
            } else {
                const db = require('../database/config');
                db.query('select id_usuario from gerente_global', (err, rows, fields) =>{
                    if (err) throw err;
                    let idGG = rows;
                    db.query('select id_sucursal from sucursal', (err, rows2, fields)=>{
                        if (err) throw err;
                        let idS = rows2;
                        
                        res.render('4gerenteGlobal/altaGerente', {idGG: idGG}, {idS: idS});
                    })
                });
            }
        })

        // GUARDADO DE DATOS DE UN GERENTE DE AGENCIA 
        .post('/gerentesAgencia/altaGerenteAgencia', passport.authenticate('local-signup', { failureFlash: true }), (req, res) => {
            if (req.user == undefined || req.user.tipo != 'Gerente Global') {
                res.render('index');
            } else {
                const db = require('../database/config');
                db.query('select id_usuario from usuario order by id_usuario desc limit 1', (err, rows, fields) => {
                    let userID = rows[0].id_usuario;

                    let gerenteAgencia = {
                        id_usuario: userID,
                        nombre: req.body.nombre,
                        telefono: req.body.telefono,
                        email: req.body.email,
                        domicilio: req.body.domicilio,
                        salario: req.body.salario,
                        id_gerente_global: req.body.id_gerente_global,
                        id_sucursal: req.body.id_sucursal
                    }

                    db.query('INSERT INTO gerente_agencia SET ?', gerenteAgencia, (err, rows, fields) => {
                        if (err) throw err;
                        res.redirect('/inicioGA/gerentesAgencia');
                    });
                })
            }
        })



        // =============================================================================================
        // ELIMINAR UN GERENTE DE AGENCIA 
        .delete('/gerentesAgencia/eliminarGerenteAgencia', (req, res) => {
            if (req.user == undefined || req.user.tipo != 'Gerente Global') {
                res.render('index');
            } else {
                const db = require('.././database/config');
                let respuesta = { res: false };
                let id = req.body.id;
                db.query('DELETE FROM gerente_agencia WHERE id_usuario = ?', id, function (err, rows, fields) {
                    if (err) {
                        res.json({ message: 'Error' });
                    } else {
                        respuesta.res = true;
                        res.json(respuesta);
                    }
                });
            }
        })



        // =============================================================================================
        // MODIFICAR UN GERENTE DE AGENCIA 
        .get('/gerentesAgencia/modificarGerenteAgencia/:id', (req, res) => {
            if (req.user == undefined || req.user.tipo != 'Gerente Global') {
                res.render('index');
            } else {
                let id = req.params.id;
                const db = require('.././database/config');
                let gerenteAgencia = null;
                db.query('SELECT * FROM gerente_agencia WHERE id_usuario = ?', id, (err, rows, fields) => {
                    if (err) throw err;
                    gerenteAgencia = rows;
                    res.render('4gerenteGlobal/modificarGerenteAgencia', { gerenteAgencia: gerenteAgencia });
                });
            }
        })

        // /inicioGA/gerentesAgencia/modificarGerenteAgencia
        .post('/gerentesAgencia/editarGerenteAgencia', (req, res) => {
            if (req.user == undefined) {
                res.render('index');
            } else {
                const db = require('.././database/config');
                let gerenteAgencia = {
                    id_gerente_agencia: req.body.id_gerente_agencia,
                    nombre: req.body.nombre,
                    telefono: req.body.telefono,
                    domicilio: req.body.domicilio,
                    email: req.body.email,
                    salario: req.body.salario,
                    id_gerente_global: req.body.id_gerente_global,
                    id_sucursal: req.body.id_sucursal
                };
                // console.log(req.body);

                db.query('UPDATE gerente_agencia SET ? WHERE ?', [gerenteAgencia, { id_gerente_agencia: req.body.id_gerente_agencia }], (err, rows, fields) => {
                    if (err) throw err;
                    res.redirect('/inicioGA/gerentesAgencia');
                });
            }
        })


module.exports = router;