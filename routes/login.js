var express = require('express');
var router = express.Router();

// rutas para login ---------------------------------------------------
router.get('/', (req, res)=>{
    res.render('1login/login');
});
// rutas para login ---------------------------------------------------

module.exports = router;