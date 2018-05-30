var express = require('express');
var router = express.Router();

router
// GERENTE GLOBAL ==========================================================================================================================
		// INICIO DE UN GERENTE GLOBAL 
			.get('/', (req, res)=>{
				const db = require('../database/config');
				db.query('SELECT * FROM gerente_global WHERE id_gerente_global = 3', (err, rows, fields)=>{
					if(err) throw err;
					gerenteGlobal = rows;
					console.log(rows);
					res.render('4gerenteGlobal/inicioGG', {gerenteGlobal: gerenteGlobal});
				})
			})



		// =============================================================================================
        // VISTA DE RESCIBIR STOCK 
			.get('/generarStock', (req, res)=>{
				res.render('4gerenteGlobal/generarStock');
			})



		// =============================================================================================
		// VISTA DE REPORTES 
			.get('/reportes', (req, res)=>{
				res.render('4gerenteGlobal/reportes');
			})


module.exports = router;