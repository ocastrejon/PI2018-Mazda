var express = require('express');
var router = express.Router();

// rutas para home ------------------------------------------
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// rutas para home ------------------------------------------

module.exports = router;