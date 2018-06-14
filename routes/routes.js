let express = require('express');
let router = express.Router();
let passport = require('passport');
let db = require('../database/config');

router 

			// .get('/login', function (req, res) {
			// 	res.render('../views/1login/login.hbs', { message: req.flash('loginMessage') }); // load the index.ejs file
			// })

			.post('/login', passport.authenticate('local-login', {
				// successRedirect: '/profile', // redirect to the secure profile section
				failureRedirect: '/', // redirect back to the signup page if there is an error
				failureFlash: true // allow flash messages
			}),
				function (req, res) {
					let dato = req.user.tipo;
					let destino = '/';

					if (dato === 'Gerente de Agencia') {
						destino = '/inicioGA';
					} else if (dato === 'Gerente Global') {
						destino = '/inicioGG';
					} else if (dato === 'Vendedor') { 
						destino = '/inicioV';
					}
					// console.log(destino);
					res.redirect(destino);
				})


			.get('/signup', function (req, res) {
				// render the page and pass in any flash data if it exists
				res.render('../views/1login/signup.hbs', { message: req.flash('signupMessage') });
			})


			// process the signup form
			.post('/signup', passport.authenticate('local-signup', {
				// successRedirect: '/', // redirect to the secure profile section
				failureRedirect: '/signup', // redirect back to the signup page if there is an error
				failureFlash: true // allow flash messages
			}))


			.get('/profile', isLoggedIn, function (req, res) {
					res.render('../views/1login/profile.hbs', {
						user: req.user // get the user out of session and pass to template
					});
			})


			.get('/logout', function (req, res) {
				req.logout();
				res.redirect('/');
			});


module.exports = router;


		// route middleware to make sure
		function isLoggedIn(req, res, next) {
			// if user is authenticated in the session, carry on
			if (req.isAuthenticated())
				return next();

			// if they aren't redirect them to the home page
			res.redirect('/');
		}
