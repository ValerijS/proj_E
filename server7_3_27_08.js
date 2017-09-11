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
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
// Middlewares, которые должны быть определены до passport:
app.use(cookieParser());
app.use(bodyParser());
//app.use(express.session({ secret: 'SECRET' }));
//app.engine('html', require('ejs').renderFile);

var passport       = require('passport');
var LocalStrategy  = require('passport-local').Strategy;
var find_all_schools_27_08 = require('./api/controllers/find_all_schools_27_08');

var show_schools = require('./api/controllers/show_schools');
var show_pupils = require('./api/controllers/show_pupils');
var update_school = require('./api/controllers/update_school');
var get_pupils_of_school = require('./api/controllers/get_pupils_of_school');
var update_pupil = require('./api/controllers/update_pupil');
var insert_new_school = require('./api/controllers/insert_new_school');
var delete_new_school = require('./api/controllers/delete_new_school');
var Login = require('./api/controllers/login_28_08');
var delete_school = require('./api/controllers/deleting_school');
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

app.use(session({
    secret:            'secret',
    saveUninitialized: true,
    resave:            true,
    // httpOnly:          false,
    // https://www.npmjs.com/package/express-mysql-session
//    store:             new sessionStorage(config.session),
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});


passport.deserializeUser(function(id, done) {
  User.findById(id).then(function(user){
     done(null,user);
  }).catch(done);
});

app.use(passport.initialize());
app.use(passport.session());
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

         
 app.post('/login',Login);
app.get('/login.html', function (req, res) {
   res.sendFile( __dirname + "/" + "login.html" );
})
app.get('/login', function (req, res) {
   res.sendFile( __dirname + "/" + "login.html" );
})


app.use(session({secret: 'ssshhhhh'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

app.all('/admin', mustAuthenticatedMw,function (req, res) {
    console.log('e1', req.sessionStore,'e1',  req.isAuthenticated(), 'e1' )
   res.redirect("/" + "admin_acsion" );
});


app.get('/show_school_with_orders_15_08', show_schools)
 app.get('/show_pupils_with_orders_15_08', show_pupils)

app.get('/admin_acsion', find_all_schools_27_08)

app.get('/updata_school', update_school)

app.post('/pupils_get', urlencodedParser, get_pupils_of_school)

app.post('/updata_school_number_of_pupl1_11_08', urlencodedParser, update_pupil)

app.get('/delete_school_with_pupils', delete_school)

app.post('/delete_new', urlencodedParser, delete_new_school)

app.post('/insert_new', urlencodedParser, insert_new_school)

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})



