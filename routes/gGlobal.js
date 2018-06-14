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
					db.query('SELECT * FROM gerente_global WHERE id_usuario = 1', (err, rows, fields)=>{
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