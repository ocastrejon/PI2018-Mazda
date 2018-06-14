var express = require('express');
var router = express.Router();
let passport = require('passport');

router
// USUARIO VENDEDOR  ==========================================================================================================================
        // VISTA DE CLIENTES  
			.get('/', (req, res) => {
				if(req.user == undefined || req.user.tipo != 'Vendedor'){
					res.render('index');
				} else {
					const db = require('../database/config')
					db.query('SELECT * FROM cliente', (err, rows, fields) => {
						if (err) throw err;
						clientes = rows;
						res.render('2vendedor/clientes', { clientes: clientes });
					})
				}
			})


		// =============================================================================================
        // ALTA DE UN CLIENTE 
			.get('/altaCliente', (req, res) => {
				if(req.user == undefined || req.user.tipo != 'Vendedor'){
					res.render('index');
				} else {
					res.render('2vendedor/altaCliente')
				}
			})


		// =============================================================================================
        // INSERCION DE DATOS PARA DAR ALTA UN CLIENTE 
			.post('/altaCliente', (req, res) => {
				if(req.user == undefined){
					res.render('index');
				} else {
					const db = require('../database/config');
					let emailCliente = req.user.email;
					db.query('SELECT id_usuario from usuario where email = ?', emailCliente, (err, rows, fields)=>{
						if(err) throw err;
						let idV = rows[0].id_usuario;
						console.log(idV);
						
						cliente = {
							id_cliente: req.body.id_cliente,
							nombre: req.body.nombre,
							telefono: req.body.telefono,
							email: req.body.email,
							domicilio: req.body.domicilio,
							id_vendedor: idV
						}
						
						db.query('INSERT INTO cliente SET ?', cliente, (err, rows, fields) => {
							if (err) throw err;
							res.redirect('/clientes');
						})
					})
				}
			})

		
		// =============================================================================================
        // DAR BAJA DE UN CLIENTE
			.delete('/eliminarCliente', (req, res) => {
				if(req.user == undefined || req.user.tipo != 'Vendedor'){
					res.render('index');
				} else {
					const db = require('.././database/config');
					let respuesta = { res: false };
					let id = req.body.id;
					db.query('DELETE FROM cliente WHERE id_cliente = ?', id, function (err, rows, fields) {
						if (err) throw err;
						respuesta.res = true;
						res.json(respuesta);
					});
				}
			})

		
		// ==============================================================================================
		// EDITAR UN CLIENTE 
			.get('/modificarCliente/:id', (req, res)=>{
				if(req.user == undefined || req.user.tipo != 'Vendedor'){
					res.render('index');
				} else {
					let id = req.params.id;
					const db = require('.././database/config');  
					let cliente = null;
					db.query('SELECT * FROM cliente WHERE id_cliente = ?' , id, (err, rows, fields)=>{
						if(err) throw err;
						cliente = rows;
						res.render('2vendedor/modificarCliente', {cliente: cliente});
					});
				}
			})
		
			.post('/editarCliente', (req, res)=>{
				if(req.user == undefined){
					res.render('index');
				} else {
					const db = require('.././database/config');  
					let cliente = {
						id_cliente: req.body.id_cliente,
						nombre: req.body.nombre,
						telefono: req.body.telefono,
						domicilio: req.body.domicilio,
						email: req.body.email,
						id_vendedor: req.body.id_vendedor
					};
					console.log(req.body);
			
					db.query('UPDATE cliente SET ? WHERE ?', [cliente, {id_cliente: req.body.id_cliente}], (err, rows, fields)=> {
						if(err) throw err;
						res.redirect('/clientes/');
					});
				}
			})

		
		// ==============================================================================================
		// BUSCAR UN CLIENTE 
			.get('/buscar/', (req, res)=>{
				if(req.user == undefined || req.user.tipo != 'Vendedor'){
					res.render('index');
				} else {
					let buscar = req.query.q;
					const db = require('../database/config');
					db.query("SELECT * FROM cliente WHERE nombre LIKE '%"+buscar+"%';", (err, rows, fields)=>{
						if(err) throw err;
						clienteBuscar = rows;
						clientes = rows;
						res.json({clienteBuscar: clienteBuscar});
						// res.render('2vendedor/clientes', {clientes: clientes});
					});
				}
			})

module.exports = router;