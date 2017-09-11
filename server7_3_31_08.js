var express = require('express');
var session = require('express-session');
var ejs = require('ejs');
var app = express();

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const pug = require('pug');
const User = require('./db').Administrator;
const mustAuthenticatedMw = require('./mustAuthenticatedMw');
//var passport = require('passport')
 // , LocalStrategy = require('passport-local').Strategy;
// Middlewares, которые должны быть определены до passport:
app.use(cookieParser());
app.use(bodyParser());
//app.use(express.session({ secret: 'SECRET' }));
//app.engine('html', require('ejs').renderFile);

var passport       = require('passport');
var LocalStrategy  = require('passport-local').Strategy;
var requireTree              = require('require-tree');
var controllers              = requireTree('./api/controllers');

app.use(session({secret: 'ssshhhhh'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.static('views'))
//app.use(session({
//    secret:            'secret',
//    saveUninitialized: true,
//    resave:            true    
//}));

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
         
app.post('/login',controllers.login_28_08);

app.get('/login.html', function (req, res) {
   res.sendFile( __dirname + "/" + "login.html" );
})

app.get('/login', function (req, res) {
   res.sendFile( __dirname + "/" + "login.html" );
})

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

app.get('/init', function (req, res) {
   res.send( pug.renderFile('views/register.pug', {} ))
})
app.post('/register',controllers.register)

app.get('/show_school_with_orders_15_08', controllers.show_schools)

app.get('/show_pupils_with_orders_15_08', controllers.show_pupils)

app.get('/admin_acsion',  controllers.find_all_schools_27_08) //admin_schools, controllers.render('views/tiles_27_08_17.pug' ))

app.get('/updata_school', controllers.update_school)

app.post('/pupils_get', urlencodedParser, controllers.get_pupils_of_school)

app.post('/updata_school_number_of_pupl1_11_08', urlencodedParser, controllers.update_pupil)

app.get('/delete_school_with_pupils', controllers.deleting_school)

app.post('/delete_new', urlencodedParser, controllers.delete_new_school)

app.post('/insert_new', urlencodedParser, controllers.insert_new_school)

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})



