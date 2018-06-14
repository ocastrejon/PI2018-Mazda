let express = require('express');
let router = express.Router();


router 
//  GERENTE GLOBAL ==========================================================================================================================
		// VISTA DE SUCURSALES
            .get('/', (req, res)=>{
                if(req.user == undefined || req.user.tipo != 'Gerente Global'){
					res.render('index');
				} else {
                    const db = require('../database/config');
                    db.query('SELECT * FROM sucursal', (err, rows, fields)=>{
                        if(err) throw err;
                        sucursales = rows;
                        res.render('4gerenteGlobal/sucursales', {sucursales: sucursales});
                    });
                }
            })



        // =============================================================================================
        // VISTA DE SUCURSALES
            .get('/altaSucursal', (req, res)=>{
                if(req.user == undefined || req.user.tipo != 'Gerente Global'){
					res.render('index');
				} else {
                    res.render('4gerenteGlobal/altaSucursal');
                }
            })



        // =============================================================================================
        // DAR ALTA UNA SUCURSAL 
            .post('/altaSucursal', (req, res)=>{
                if(req.user == undefined || req.user.tipo != 'Gerente Global'){
					res.render('index');
				} else {
                    sucursal= {
                        id_sucursal: req.body.id_sucursal,
                        direccion: req.body.direccion,
                        municipio: req.body.municipio,
                        estado: req.body.estado,
                        codigo_postal: req.body.codigo_postal,
                        region: req.body.region
                    }
                    
                    const db = require('../database/config');
                    db.query('INSERT INTO sucursal SET ?', sucursal, (err, rows, fields)=>{
                        if(err) throw err;
                        res.redirect('/sucursales');
                    });
                }
            })

            

        // =============================================================================================
        // ELIMINAR SUCURSAL
            .delete('/eliminarSucursal', (req, res)=>{
                if(req.user == undefined || req.user.tipo != 'Gerente Global'){
					res.render('index');
				} else {
                    const db = require('.././database/config');
                    let respuesta = {res: false};
                    let id = req.body.id;
                    db.query('DELETE FROM sucursal WHERE id_sucursal = ?', id, function(err, rows, fields){
                        if(err) {
                            console.log('Error //////////////////////////////////////////////////////////////////////////7');
                            res.json({message:'Error'});      
                        } else {
                            respuesta.res = true;
                            res.json(respuesta);
                        }
                    });
                }
            })



        // =============================================================================================
        // EDITAR SUCURSAL
            .get('/modificarSucursal/:id', (req, res)=>{
                if(req.user == undefined || req.user.tipo != 'Gerente Global'){
					res.render('index');
				} else {
                    let id = req.params.id;
                    const db = require('../database/config');
                    let sucursal = null;
                    db.query('SELECT * FROM sucursal WHERE id_sucursal = ?', id, (err, rows, fields)=>{
                        if (err) throw err;
                        sucursal = rows;
                        res.render('4gerenteGlobal/modificarSucursal', {sucursal: sucursal});
                    });
                }
            })

            .post('/editarSucursal', (req, res)=>{
                const db = require('.././database/config');  
                sucursal={
                    id_sucursal: req.body.id_sucursal,
                    direccion: req.body.direccion,
                    municipio: req.body.municipio,
                    estado: req.body.estado,
                    codigo_postal: req.body.codigo_postal,
                    region: req.body.region
                }

                db.query('UPDATE sucursal SET ? WHERE ?', [sucursal, {id_sucursal: req.body.id_sucursal}], (err, rows, fields)=> {
                    if(err) throw err;
                });
                res.redirect('/sucursales');
            });

module.exports = router;