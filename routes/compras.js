var express = require('express');
var router = express.Router();

router

        .get('/', (req, res) => {
            // console.log(req.user.tipo);
            if(req.user == undefined ){
                // console.log(req.user.tipo);
                res.render('index');
            } else if(req.user.tipo == 'Gerente de Agencia') {
                    const db = require('../database/config')
                    db.query('SELECT * FROM compra', (err, rows, fields) => {
                        if (err) throw err;
                        compras = rows;
                        res.render('3gerenteAgencia/reportes', { compras: compras });
                    })
            } else if (req.user.tipo == 'Gerente Global') {
                const db = require('../database/config')
                    db.query('SELECT * FROM compra', (err, rows, fields) => {
                        if (err) throw err;
                        compras = rows;
                        res.render('4gerenteGlobal/reportes1', { compras: compras });
                    })
            }
        })


module.exports = router;
