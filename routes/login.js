var express = require('express');
var router = express.Router();

router
// LOGIN ==========================================================================================================================
		// LOGIN
            .get('/', (req, res)=>{
                res.render('1login/login');
            });


module.exports = router;