var express = require('express');
var session = require('express-session');
var ejs = require('ejs');
var app = express();
var router = express.Router();  
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const pug = require('pug');
const User = require('./db').Administrator;
const mustAuthenticatedMw = require('./mustAuthenticatedMw');
// Middlewares, которые должны быть определены до passport:
app.use(cookieParser());
app.use(bodyParser());
var passport       = require('passport');
var LocalStrategy  = require('passport-local').Strategy;
var requireTree              = require('require-tree');
var controllers              = requireTree('./api/controllers');
var admin = require('./api/routes/admin_05_09');
app.use(session({secret: 'ssshhhhh'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.static('views'))

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
//app.get('/', function (req, res) {
//   res.sendFile( __dirname + "/" + "index2.html" );
//})
app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

app.use('/', admin);

app.get('/schools', controllers.show_schools1, controllers.render('views/boots_schools_table.pug'));

app.get('/pupils', controllers.show_pupils1, controllers.render('views/boots_pupils_table.pug'));


app.get('/delete_school_with_pupils', controllers.deleting_school);

app.post('/delete_new', urlencodedParser, controllers.delete_new_school);

app.post('/insert_new', urlencodedParser, controllers.insert_new_school);

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})





