var express = require('express');
var router = express.Router();

router

// VENDEDOR ==========================================================================================================================
			// VISTA DE CARROS DE USUARIO VENDEDOR
			.get('/', (req, res) => {
				if(req.user == undefined || req.user.tipo != 'Vendedor'){
					res.render('index');
				} else {
					const db = require('../database/config')
					db.query('SELECT id_carro, nombre, version, modelo, transmision, color, precio, statuss from carro;', (err, rows, fields) => {
						if (err) throw err;
						carros = rows;
						res.render('2vendedor/carros', { carros: carros });
					});
				}
			})


			.post('/detalles', (req, res) => {
				if(req.user == undefined || req.user.tipo != 'Vendedor'){
					res.render('index');
				} else {
					const db = require('../database/config')
					let respuesta = { res: false };
					let id = req.body.id
					console.log('Servidor id_carro: ', id);
					db.query('SELECT * from carro where id_carro = ?', id, (err, rows, fields) => {
						if (err) {
							throw err;
						} else {
							respuesta.res = true;
							res.json(rows);
						}
					});
				}
			})


			.post('/apartar', (req, res) => {
				if(req.user == undefined || req.user.tipo != 'Vendedor'){
					res.render('index');
				} else {
					const db = require('../database/config')
					let respuesta = { res: false };
					let id = req.body.id
					console.log('Servidor id_carro: Apartar', id);
					db.query('SELECT nombre from cliente;', (err, rows, fields) => {
						if (err) {
							throw err;
						} else {
							respuesta.res = true;
							res.json(rows);
						}
					});
				}
			})


			.post('/comprar', (req, res) => {
				if(req.user == undefined || req.user.tipo != 'Vendedor'){
					res.render('index');
				} else {
					const db = require('../database/config')
					let respuesta = { res: false };
					let id = req.body.id
					console.log('Servidor id_carro: Apartar', id);
					db.query('SELECT nombre from cliente;', (err, rows, fields) => {
						if (err) {
							throw err;
						} else {
							respuesta.res = true;
							res.json(rows);
						}
					});
				}
			})



			.post('/apartarCarro', (req, res) => {
				if(req.user == undefined || req.user.tipo != 'Vendedor'){
					res.render('index');
				} else {
					const db = require('../database/config')
					let respuesta = { res: false };
					let id = req.body.id
					let user = req.body.user
					let text1 = 'Apartado/' + user;
					let text2 = 'Apartó/' + id;


					db.query('UPDATE carro SET statuss = ? where id_carro = ?', [text1, id], (err, rows, fields) => {
						if (err) {
							throw err;
						} else {
							db.query('UPDATE cliente SET movimientos = ? where nombre = ?', [text2, user], (err, rows, fields)=>{
								if(err){
									throw err;
								} else {
									respuesta.res = true;
									res.json(rows);
								}
							})
							
						}
					});
				}
			})



			.post('/comprarCarro', (req, res) => {
				if(req.user == undefined || req.user.tipo != 'Vendedor'){
					res.render('index');
				} else {
					const db = require('../database/config')
					let f = new Date();
					f = (f.getFullYear() + "-" + (f.getMonth() +1) + "-" + f.getDate());

					let nombre = req.body.user;
					db.query('select id_cliente from cliente where nombre = ?', nombre, (err, rows, fields) => {
						if(err){
							throw err;
						} else {

							let respuesta = { res: false };
							compra = {
								id_compra : req.body.id_compra,
								cantidad : req.body.precio,
								fecha : f,
								id_carro : req.body.id,
								id_vendedor : req.user.id_usuario, 
								id_cliente : rows[0].id_cliente,
							}
							
							db.query('INSERT INTO compra SET ?', compra, (err, rows, fields) => {
								if(err) {
									throw err;
								} else {
									let id = req.body.id
									let desc = 'Vendido/'+ nombre;
									console.log('mensaje:', desc);
									console.log('id:', id);
									db.query('UPDATE carro SET statuss = ? where id_carro = ?', [desc, id], (err, rows, fields) =>{
										if(err) {
											throw err;
										} else {
											let tx = 'Compró/' + req.body.id
											console.log(tx);
											db.query('UPDATE cliente SET movimientos = ? where nombre = ?', [tx, nombre], (err, rows, fields)=>{
												if(err) {
													throw err;
												} else {
													res.json('Bien');

												}
											})
										}
									})
								}
							});


						}
					})

				}

			})



module.exports = router;