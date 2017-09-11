var express = require('express');
var session = require('express-session');
var ejs = require('ejs');
var app = express();
app.use(express.static('public'));
app.use(express.static('views'))
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const pug = require('pug');
const User = require('./db').Administrator;
const mustAuthenticatedMw = require('./mustAuthenticatedMw');

// Middlewares, которые должны быть определены до passport:
app.use(cookieParser());
app.use(bodyParser());
//app.use(express.session({ secret: 'SECRET' }));
//app.engine('html', require('ejs').renderFile);
const Passport = require('C:/nodeJs/todoListApi/public/JavaScript/pasport')

var passport       = require('passport');
var LocalStrategy  = require('passport-local').Strategy;
var find_all_schools_25_08 = require('./api/controllers/find_all_schools_25_08');

var show_schools = require('./api/controllers/show_schools');
var show_pupils = require('./api/controllers/show_pupils');
var update_school = require('./api/controllers/update_school');
var get_pupils_of_school = require('./api/controllers/get_pupils_of_school');
var update_pupil = require('./api/controllers/update_pupil');
var insert_new_school = require('./api/controllers/insert_new_school');
var delete_new_school = require('./api/controllers/delete_new_school');
var registration = require('./api/controllers/register');
//var MustAuthenticatedMw  =   require('./public/JavaScript/middleware.js').mustAuthenticatedMw;
//passport.use(new LocalStrategy({
//  usernameField: 'email',
//  passwordField: 'password'
//}, function(username, password,done){
//  User.findOne({
//      where:{ username : username}
//  })
// .then((user,err)=>{
//    return err 
//      ? done(err)
//      : user
//        ? password === user.password
//          ? done(null, user)
//          : done(null, false, { message: 'Incorrect password.' })
//        : done(null, false, { message: 'Incorrect username.' });
//  })
//} ));


//passport.serializeUser(function(user, done) {
//  done(null, user.id);
//});
//
//
//passport.deserializeUser(function(id, done) {
//  User.findById(id, function(err,user){
//    err 
//      ? done(err)
//      : done(null,user);
//  });
//});


//passport.use(new LocalStrategy({
//  usernameField: 'email',
//  passwordField: 'password'
//}, function(email, password,done){
//  User.findOne({ username : 'ab@cd.com'}).then((user) => {
//      console.log('+++++++++++++++++++++++++++++')
//        console.log('c4',user.password,'c4');
//        if (!user) {
//          return done(null, false, {message: 'Incorrect email', field: 'email'});
//        }
//      console.log('d2',password,'d2')
//        if (password !== user.password) {
//          return done(null, false, {message: 'Incorrect password', field: 'password'});
//        }
//      console.log('d5',user.password,'d5')
//        return done(null, user);
//      }/*, (err) => done(err, false, {message: 'Incorrect some.', field: 'username or password'})*/);;
//}));

//app.use(session({
//    secret:            'secret',
//    saveUninitialized: true,
//    resave:            true,
//    // httpOnly:          false,
//    // https://www.npmjs.com/package/express-mysql-session
////    store:             new sessionStorage(config.session),
//}));

//passport.serializeUser(function(user, done) {
//  done(null, user.id);
//});
//
//
//passport.deserializeUser(function(id, done) {
//  User.findById(id).then(function(user){
//     done(null,user);
//  }).catch(done);
//});
app.use(session({
    secret:            'secret',
    saveUninitialized: true,
    resave:            true,
    // httpOnly:          false,
    // https://www.npmjs.com/package/express-mysql-session
//    store:             new sessionStorage(config.session),
}));

//app.use(session({secret: 'ssshhhhh'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
app.get('/init', function (req, res) {
   res.send( pug.renderFile('C:/nodeJs/todoListApi/public/register.pug', {
   }))
 });
// app.post('/login',function(req, res, next) {
//  passport.use(new LocalStrategy({
//  usernameField: 'email',
//  passwordField: 'password'
//}, function(email, password,done){
//  User.findOne({
//      where: {
//            email: req.body.email
//           },
//  }).then((user) => {
//      console.log('+++++++++++++++++++++++++++++')
//        console.log('c4',user.password,'c4');
//        if (!user) {
//          return done(null, false, {message: 'Incorrect email', field: 'email'});
//        }
//      console.log('d2',password,'d2')
//        if (req.body.password !== user.password) {
//          return done(null, false, {message: 'Incorrect password', field: 'password'});
//        }
//      console.log('d5',user.password,'d5')
//        return done(null, user);
//      }, (err) => done(err, false, {message: 'Incorrect some.', field: 'username or password'}));
//})),
//  passport.authenticate('local',
//    function(err, user, info) {
//      console.log('c1',user.email,'c1');
//      console.log('c11',req.body.email,'c11')
//      return err 
//        ? next(err)
//        : user
//          ? req.logIn(user, function(err) {
//              return err
//                ? next(err)
//                : res.redirect('admin')
//            })
//          : res.redirect('/login.html');
//    }
//  )(req, res, next)
//});
app.get('/login.html', function (req, res) {
   res.sendFile( __dirname + "/" + "login.html" );
})
app.get('/login', function (req, res) {
   res.sendFile( __dirname + "/" + "login.html" );
})

//app.post('/login',                  controllers.users.login);
app.post('/register',registration);
//app.get('/logout',                  controllers.users.logout);
 app.get('/private', function (req, res, next){
  console.log('g3',req.isAuthenticated());
  
  req.isAuthenticated()
    ? next()
    : res.redirect('/');
},find_all_schools_25_08);
 // app.all('private/*', MustAuthenticatedMw);
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

//app.all('/admin', mustAuthenticatedMw,function (req, res) {
//    console.log('e1', req.sessionStore,'e1', mustAuthenticatedMw, 'e1' )
//   res.redirect("/" + "admin_acsion" );
//});


app.get('/show_school_with_orders_15_08', show_schools)
 app.get('/show_pupils_with_orders_15_08', show_pupils)

app.get('/admin_acsion', find_all_schools_25_08)

app.get('/updata_school', update_school)

app.post('/pupils_get', urlencodedParser, get_pupils_of_school)

app.post('/updata_school_number_of_pupl1_11_08', urlencodedParser, update_pupil)
app.post('/delete_new', urlencodedParser, delete_new_school)
app.post('/insert_new', urlencodedParser, insert_new_school)

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})



