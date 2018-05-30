var express = require('express');
var router = express.Router();

router

// VENDEDOR ==========================================================================================================================
			// VISTA DE CARROS DE USUARIO VENDEDOR
			.get('/', (req, res) => {
				const db = require('../database/config')
				db.query('SELECT * FROM carro', (err, rows, fields) => {
					if (err) throw err;
					carros = rows;
					//   console.log(clientes);
					res.render('2vendedor/carros', { carros: carros });
				});
			});


module.exports = router;