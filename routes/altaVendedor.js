var express = require('express');
var router = express.Router();

// rutas para dar alta vendedor -----------------------------
router.get('/', (req, res)=>{
     res.render('3gerenteAgencia/altaVendedor');
})

    .post('/', (req, res)=>{
        console.log("entró al post")
        let vendedor = {
            id_vendedor: req.body.id_vendedor,
            nombre: req.body.nombre,
            telefono: req.body.telefono,
            email: req.body.email,
            domicilio: req.body.domicilio,
            salario: req.body.salario,
            id_gerente_agencia: req.body.id_gerente_agencia
        }

        const db = require('../database/config');
            db.query('INSERT INTO vendedor SET ?', vendedor, (err, rows, fields)=>{
                if (err) throw err;
            });
            res.render('3gerenteAgencia/altaVendedor', {info: 'Creado correctamente'})
});
module.exports = router;