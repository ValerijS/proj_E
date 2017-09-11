var express = require('express');
var session = require('express-session');
var ejs = require('ejs');
var app = express();
app.use(express.static('public'));
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const pug = require('pug');
app.use(cookieParser());
app.use(bodyParser());
var find_all_schools_25_08 = require('./api/controllers/find_all_schools_25_08');
var show_schools = require('./api/controllers/show_schools');
var show_pupils = require('./api/controllers/show_pupils');
var update_school = require('./api/controllers/update_school');
var get_pupils_of_school = require('./api/controllers/get_pupils_of_school');
var update_pupil = require('./api/controllers/update_pupil');
var insert_new_school = require('./api/controllers/insert_new_school');
var delete_new_school = require('./api/controllers/delete_new_school');
app.use(session({secret: 'ssshhhhh'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var sess;
var Check_sess  =   require('./public/JavaScript/middleware.js').check_sess;
//app.get('/admin', Check_sess);
app.get('/admin',function(req,res){
sess = req.session;
if(sess.email) {
    res.redirect('/admin_acsion');
}else {   
  res.send('<h1>Please login first.</h1><a href="http://localhost:8081/index_login.html">Login</a>'); 
  }
});

app.post('/login',function(req,res){
  sess = req.session;
//In this we are assigning email to sess.email variable.
//email comes from HTML page.
  sess.email=req.body.email;
  res.end('done');
});

app.get('/admin_acsion',find_all_schools_25_08)


app.get('/logout',function(req,res){
req.session.destroy(function(err) {
  if(err) {
    console.log(err);
  } else {
    res.redirect('/');
  }
});

});
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});



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



