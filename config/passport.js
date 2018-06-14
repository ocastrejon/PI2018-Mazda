// config/passport.js

// load all the things we need
var LocalStrategy = require('passport-local').Strategy;

// load up the user model
var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
// var dbconfig = require('../database/config');
var connection = require('../database/config');
//connection.query('USE Login');
// expose this function to our app using module.exports

module.exports = function (passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    // used to deserialize the user
    passport.deserializeUser(function (user, done) {
        // console.log('Entro al deserialize ');
        // connection.query("SELECT * FROM usuario WHERE id_usuario = ? ", [id_usuario], function (err, rows) {
            done(null, user);
        // });
    });

    // ``
    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use(
        'local-signup',
        
        new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
            function (req, email, password, done) {
                // console.log()
                

                // find a user whose email is the same as the forms email
                // we are checking to see if the user trying to login already exists
                connection.query("SELECT * FROM usuario WHERE email = ?", [email], function (err, rows) {
                    
                    
                    if (err) return done(err);
                    if (rows.length) {
                        
                        
                        return done(null, false, req.flash('signupMessage', 'That username is already taken.'));
                    } else {
                        
                        
                        // if there is no user with that username
                        // create the user
                        var newUserMysql = {
                            email: email,
                            password: bcrypt.hashSync(password, null, null),  // use the generateHash function in our user model
                            tipo: req.body.tipo
                        };

                        var insertQuery = "INSERT INTO usuario ( email, password, tipo) values (?,?,?)";

                        connection.query(insertQuery, [newUserMysql.email, newUserMysql.password, req.body.tipo], function (err, rows) {
                            
                            
                            if(err) throw err;
                            newUserMysql.id = rows.insertId;

                            return done(null, newUserMysql);
                        });
                    }
                });
            })
    );

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use(
        'local-login',

        new LocalStrategy({
            // by default, local strategy uses username and passwordd, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
            function (req, email, password, done) { // callback with email and passwordd from our form
                console.log('Body:',req.body);

                connection.query("SELECT * FROM usuario WHERE email = ?", [email], 
                function (err, rows) {
                    console.log('rows:',rows);
                    if (err)
                    {
                        console.log('hay un error passport');

                        return done(err);
                    }
                   
                    if (!rows.length) {
                        console.log('length:',rows);
                        return done(null, false, req.flash('loginMessage', 'Usuario o Contraseña inválido.')); // req.flash is the way to set flashdata using connect-flash
                    } else if (!bcrypt.compareSync(password, rows[0].password)){
                        return done(null, false, req.flash('loginMessage', 'Usuario o Contraseña inválido.')); // create the loginMessage and save it to session as flashdata
                    }
                    return done(null, rows[0]);
                });
            })
    );
};
