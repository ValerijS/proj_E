// Any files in this directory will be `require()`'ed when the application
// starts, and the exported function will be invoked with a `this` context of
// the application itself.  Initializers are used to connect to databases and
// message queues, and configure sub-systems such as authentication.

// Async initializers are declared by exporting `function(done) { /*...*/ }`.
// `done` is a callback which must be invoked when the initializer is
// finished.  Initializers are invoked sequentially, ensuring that the
// previous one has completed before the next one executes.


(function (req,res,next) {
  'use strict';

  /**
   * Module dependencies.
   */
  //var log4js         = require('log4js');
  //var log            = log4js.getLogger('02_passport.js');
  //var config         = require('nconf');

  var passport       = require('passport');
  var LocalStrategy  = require('passport-local').Strategy;
 const User = require('C:/nodeJs/todoListApi/db').Administrator;
  //var mongoose       = require('mongoose');
  //var User           = mongoose.model('user');

  // end of dependencies.

  // TODO: add done()?
  module.exports = function() {
      passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    }, function(username, password,done){
      User.findOne({
          where:{ username : username}
      })
     .then((user,err)=>{
        return err 
          ? done(err)
          : user
            ? password === user.password
              ? done(null, user)
              : done(null, false, { message: 'Incorrect password.' })
            : done(null, false, { message: 'Incorrect username.' });
      })
    } ));

      
//    passport.use(new LocalStrategy({
//      usernameField: 'email',
//      passwordField: 'password'
//    }, function(username, password,done){
//      User.findOne({ username : username},function(err,user){
//        return err
//          ? done(err)
//          : user
//          ? password === user.password
//          ? done(null, user)
//          : done(null, false, { message: 'Incorrect password.' })
//          : done(null, false, { message: 'Incorrect username.' });
//      });
//    }));


    passport.serializeUser(function(user, done) {
      done(null, user.id);
    });


    passport.deserializeUser(function(id, done) {
      User.findById(id, function(err,user){
        err
          ? done(err)
          : done(null,user);
      });
    });

  };

})();
