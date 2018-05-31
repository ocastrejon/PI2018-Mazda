var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// VARIABLES RUTAS -----------------------------------------
// Buenas
var indexRouter = require('./routes/inicio');
// var indexRouterLogin = require('./routes/login');
var indexRouterClientes = require('./routes/clientes');
var indexRouterSucursales = require('./routes/sucursales');


// Corregir
var indexRouterVendedor = require('./routes/vendedor');
var indexRouterGAgencia = require('./routes/gAgencia');
var indexRouterGGlobal = require('./routes/gGlobal');
var indexRouterCarros = require('./routes/carros');


// Eliminar
// var indexRouterAltaVendedor = require('./routes/altaVendedor');
// var indexRouterVendedores = require('./routes/vendedores');
// var indexRouterAltaGerente = require('./routes/altaGerente');
// var indexRouterAltaCliente = require('./routes/altaCliente');
// VARIABLES RUTAS -----------------------------------------


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/assets', express.static(`${__dirname}/public`));



// RUTAS ------------------------------------------------------
app.use('/', indexRouter);
// app.use('/login', indexRouterLogin);
app.use('/clientes', indexRouterClientes);
app.use('/inicioV', indexRouterVendedor);
app.use('/inicioGA', indexRouterGAgencia);
app.use('/inicioGG', indexRouterGGlobal);
app.use('/carros', indexRouterCarros);
app.use('/sucursales', indexRouterSucursales);


// app.use('/vendedores', indexRouterVendedores);
// app.use('/altaVendedor', indexRouterAltaVendedor);
// app.use('/altaGerente', indexRouterAltaGerente);
// app.use('/altaCliente', indexRouterAltaCliente);
// RUTAS ------------------------------------------------------


// catch 404 and forward to error handler ------------
app.use(function(req, res, next) {
  next(createError(404));
});
// catch 404 and forward to error handler ------------


//  CODIGO HBS ----------------------------------------------------------------
const hbs = require('hbs');
const fs = require('fs');
const partialsDir = __dirname + '/views/partials';
const filenames = fs.readdirSync(partialsDir);
  filenames.forEach(function (filename) {
    const matches = /^([^.]+).hbs$/.exec(filename);
    if (!matches) {
      return;
    }
    const name = matches[1];
    const template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
    hbs.registerPartial(name, template);
  });
  hbs.registerHelper('json', function(context) {
      return JSON.stringify(context, null, 2);
  });
//  CODIGO HBS ----------------------------------------------------------------


module.exports = app;