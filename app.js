var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session  = require('express-session');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var passport = require('passport');
var flash    = require('connect-flash');
// var port     = process.env.PORT || 8080;

var app = express();
require('./config/passport')(passport); // pass passport for configuration
// require('./routes/routes.js')(app, passport);


// VARIABLES RUTAS -----------------------------------------
// Buenas
var indexRouter = require('./routes/inicio');
var indexRouterClientes = require('./routes/clientes');
var indexRouterSucursales = require('./routes/sucursales');
var indexRouterVendedor = require('./routes/vendedor');
var indexRouterGAgencia = require('./routes/gAgencia');
var indexRouterGGlobal = require('./routes/gGlobal');
var indexRouterCarros = require('./routes/carros');
var indexRouterLogin = require('./routes/routes');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(morgan('dev')); // log every request to the console
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/assets', express.static(`${__dirname}/public`));



app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// required for passport
app.use(session({
	secret: 'vidyapathaisalwaysrunning',
	resave: true,
	saveUninitialized: true
 } )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session



// RUTAS ------------------------------------------------------
app.use('/', indexRouter);
// app.use('/login', indexRouterLogin);
app.use('/clientes', indexRouterClientes);
app.use('/inicioV', indexRouterVendedor);
app.use('/inicioGA', indexRouterGAgencia);
app.use('/inicioGG', indexRouterGGlobal);
app.use('/carros', indexRouterCarros);
app.use('/sucursales', indexRouterSucursales);
app.use('/', indexRouterLogin);


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