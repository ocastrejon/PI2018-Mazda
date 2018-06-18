var express = require('express');
var router = express.Router();

router
// GERENTE GLOBAL ==========================================================================================================================
		// INICIO DE UN GERENTE GLOBAL 
			.get('/',  (req, res) => {
				// console.log('Auth: ', req.isAuthenticated());
				if(req.user == undefined || req.user.tipo != 'Gerente Global'){
					res.render('index');
				} else {
					const db = require('../database/config');
					let email = req.user.email;
					db.query(`select u.id_usuario, g.nombre, g.telefono, u.email, g.domicilio, g.salario from usuario as u 
								INNER join gerente_global as g on g.id_usuario = u.id_usuario
								where u.email = ? `, email, (err, rows, fields)=>{
						if(err) throw err;
						gerenteGlobal = rows;
						console.log(rows);
						res.render('4gerenteGlobal/inicioGG', {gerenteGlobal: gerenteGlobal});
					});
				}
			})



		// =============================================================================================
        // VISTA DE RESCIBIR STOCK 
			.get('/generarStock', (req, res)=>{
				if(req.user == undefined || req.user.tipo != 'Gerente Global'){
					res.render('index');
				} else {
					res.render('4gerenteGlobal/generarStock');
				}
			})



		// =============================================================================================
		// VISTA DE REPORTES 
			.get('/reportes', (req, res)=>{
				if(req.user == undefined || req.user.tipo != 'Gerente Global'){
					res.render('index');
				} else {
					res.render('4gerenteGlobal/reportes');
				}
			})


module.exports = router;