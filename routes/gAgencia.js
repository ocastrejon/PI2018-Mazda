var express = require('express');
var router = express.Router();

router
// GERENTE DE AGENCIA ==========================================================================================================================
        // INICIO DE UN GERENTE DE AGENCIA  
        .get('/', (req, res)=>{
            const db = require('../database/config');
            db.query('SELECT * FROM gerente_agencia WHERE id_gerente_agencia = 1', (err, rows, fields)=>{
                if(err) throw err;
                gerenteAgencia = rows;
                console.log(rows);
                res.render('3gerenteAgencia/inicioGA', {gerenteAgencia: gerenteAgencia});
            })
        })



// GERENTE GLOBAL ==============================================================================================================================
        // VISTA DE GERENTES DE AGENCIA 
            .get('/gerentesAgencia', (req, res)=>{
                const db = require('../database/config');
                db.query('SELECT * FROM gerente_agencia', (err, rows, fields)=>{
                    if(err) throw err;
                    gerente_agencia = rows;
                    res.render('4gerenteGlobal/gerentesAgencia', {gerente_agencia: gerente_agencia});
                })
            })



        // =============================================================================================
        // ALTA DE UN GERENTE DE AGENCIA 
            .get('/gerentesAgencia/altaGerenteAgencia', (req, res)=>{
                res.render('4gerenteGlobal/altaGerente');
            })
        
        // GUARDADO DE DATOS DE UN GERENTE DE AGENCIA 
            .post('/gerentesAgencia/altaGerenteAgencia', (req, res)=>{
                
                let gerenteAgencia = {
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
                        // console.log('hubo error en la insercion ----------------------------------')
                        throw err;
                        }
                            res.redirect('/inicioGA/gerentesAgencia');
                    });
            })



        // =============================================================================================
        // ELIMINAR UN GERENTE DE AGENCIA 
            .delete('/gerentesAgencia/eliminarGerenteAgencia', (req, res)=>{
                const db = require('.././database/config');
                let respuesta = {res: false};
                let id = req.body.id;
                db.query('DELETE FROM gerente_agencia WHERE id_gerente_agencia = ?', id, function(err, rows, fields){
                    if(err) {
                        console.log('Error //////////////////////////////////////////////////////////////////////////7');
                        res.json({message:'Error'});      
                    } else {
                        respuesta.res = true;
                        res.json(respuesta);
                    }
                });
            })



        // =============================================================================================
        // MODIFICAR UN GERENTE DE AGENCIA 
            .get('/gerentesAgencia/modificarGerenteAgencia/:id', (req, res)=>{
                let id = req.params.id;
				const db = require('.././database/config');  
				let gerenteAgencia = null;
				db.query('SELECT * FROM gerente_agencia WHERE id_gerente_agencia = ?' , id, (err, rows, fields)=>{
					if(err) throw err;
					gerenteAgencia = rows;
                    res.render('4gerenteGlobal/modificarGerenteAgencia', {gerenteAgencia: gerenteAgencia});
				});
            })
            // /inicioGA/gerentesAgencia/modificarGerenteAgencia
            .post('/gerentesAgencia/editarGerenteAgencia', (req, res)=>{
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
		
				db.query('UPDATE cliente SET ? WHERE ?', [gerenteAgencia, {id_gerente_agencia: req.body.id_gerente_agencia}], (err, rows, fields)=> {
					if(err) throw err;
					res.redirect('/clientes/');
				});
            })



        // =============================================================================================
        // VISTA DE RESCIBIR STOCK 
            .get('/recibirStock', (req, res)=>{
                res.render('3gerenteAgencia/recibirStock');
            })



        // =============================================================================================
        // VISTA DE SOLICITUD DE AUTOS 
            .get('/solicitudesAutos', (req, res)=>{
                res.render('3gerenteAgencia/solicitudesAutos');
            })



        // =============================================================================================
        // VISTA DE REPORTES 
            .get('/reportes', (req, res)=>{
                res.render('3gerenteAgencia/reportes');
            })

            

  module.exports = router;