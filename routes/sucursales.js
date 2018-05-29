let express = require('express');
let router = express.Router();


// RUTAS PARA LAS SUCURSALES
router 
        .get('/', (req, res)=>{
            const db = require('../database/config');
            db.query('SELECT * FROM sucursal', (err, rows, fields)=>{
                if(err) throw err;
                sucursales = rows;
                res.render('4gerenteGlobal/sucursales', {sucursales: sucursales});
            });
        })


        .get('/altaSucursal', (req, res)=>{
            res.render('4gerenteGlobal/altaSucursal');
        })


        .post('/altaSucursal', (req, res)=>{

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
        });

module.exports = router;