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
			});


module.exports = router;