var passport = require('passport');
var LocalStrategy  = require('passport-local').Strategy;
const User = require('C:/nodeJs/todoListApi/db').Administrator;
const Pasport = require('C:/nodeJs/todoListApi/public/JavaScript/pasport');
const pug = require('pug');
module.exports = function(req, res, next) {
  passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
  }, function(email, password,done){
  User.findOne({
      where: {
            email: req.body.email
           },
  }).then((user) => {
      console.log('+++++++++++++++++++++++++++++')
        console.log('c4',user.password,'c4');
        if (!user) {
          return done(null, false, {message: 'Incorrect email', field: 'email'});
        }
      console.log('d2',password,'d2')
        if (req.body.password !== user.password) {
          return done(null, false, {message: 'Incorrect password', field: 'password'});
        }
      console.log('d5',user.password,'d5')
        return done(null, user);
      }, (err) => done(err, false, {message: 'Incorrect some.', field: 'username or password'}));
})),
  passport.authenticate('local',
    function(err, user, info) {
      console.log('c1',user.email,'c1');
      console.log('c11',req.body.email,'c11')
      return err 
        ? next(err)
        : user
          ? req.logIn(user, function(err) {
              return err
                ? next(err)
                : res.redirect('admin')
            })
          : res.redirect('/login.html');
    },
   console.log('d11',req.body.email)                     
  )(req, res, next)
}