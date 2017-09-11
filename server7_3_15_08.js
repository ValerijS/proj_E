//passport and get tab school, using pug tamplate
var express = require('express');
var session = require('express-session');

var app = express();
app.use(express.static('public'));

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


var passport       = require('passport');
var LocalStrategy  = require('passport-local').Strategy;

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function(email, password,done){
  User.findOne({ email : email}).then((user) => {
      console.log('+++++++++++++++++++++++++++++')
        console.log('c4',user.password,'c4');
        if (!user) {
          return done(null, false, {message: 'Incorrect email', field: 'email'});
        }
      console.log('d2',password,'d2')
        if (password !== user.password) {
          return done(null, false, {message: 'Incorrect password', field: 'password'});
        }
      console.log('d5',user.password,'d5')
        return done(null, user);
      }/*, (err) => done(err, false, {message: 'Incorrect some.', field: 'username or password'})*/);;
}));

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

         
 app.post('/login',function(req, res, next) {
  passport.authenticate('local',
    function(err, user, info) {
      console.log('c1',user.id,'c1')
      return err 
        ? next(err)
        : user
          ? req.logIn(user, function(err) {
              return err
                ? next(err)
                : res.redirect('/private/*')
            })
          : res.redirect('/login.html');
    }
  )(req, res, next)
});
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
/*
__dirname +
req.login(user, function(err) {
  if (err) { return next(err); }
  return res.redirect('/users/' + req.user.username);
});
*/
app.all('/private/*', mustAuthenticatedMw,function (req, res) {
    console.log('e1', req.sessionStore, mustAuthenticatedMw, 'e1' )
   res.redirect("/" + "process_get1" );
});
/*
 app.all('/private', function (req, res, next){
  console.log('d3',req.isAuthenticated(),'d3S' )   
  req.isAuthenticated()
    ? next()
    : res.redirect('/login.html');
});
*/


//app.all('/private/*', function (req, res, next){
//  console.log('d3',req.isAuthenticated(),'d3S' )   
//  req.isAuthenticated()
//    ? next()
//    : res.redirect('/login.html');
//},(res)=>res.redirect('/index_post_school_update.html'));


app.get('/index_post_school_update.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index_post_school_update.html" );
})

 app.post('/insert', urlencodedParser, function (req, res) {
   var table = req.body.last_name;
   if (table === 'School') {    
       const School = require('./db').School;
       School.findOrCreate(
           {where: {nameOrNumber: req.body.first_name1,
                   numberOfPupils: req.body.first_name2,
                   averageScore: req.body.first_name3
                   }
           }
       )          
       .then(()=>{
            School.findAll({
                      attributes: {
                          exclude: ['createdAt', 'updatedAt']
                      }
                })
                .then((result) => {

                    res.send( pug.renderFile('views/School_input.pug', {
                  columns: Object.keys(result[0].dataValues),
                  schools: result.map(function(school) {
                      //var key = school.dataValues.id
                      return  school.dataValues;
                  })
                }))     
            })   
    })
 }else{
          const Pupil = require('./db').Pupil; 
       Pupil.findOrCreate(
               {where: {firstName: req.body.first2_name1,
                       lastName: req.body.first2_name2,
                       averageScore: req.body.first2_name3,
                       school: req.body.first2_name4},    
                }

           )  
            .then(()=>{
                Pupil.findAll({
                          attributes: {
                              exclude: ['createdAt', 'updatedAt']
                          }
                    })
                    .then((result) => {

                        res.send( pug.renderFile('views/Pupil.pug', {
                      columns: Object.keys(result[0].dataValues),
                      schools: result.map(function(school) {
                          return school.dataValues;
                      })
                    }))     
                })   
            })

 }
})


app.post('/delete', urlencodedParser, function (req, res) {
   var table = req.body.last_name;
   if (table === 'School') {    
       const School = require('./db').School;
        School.destroy({
  where: {
    nameOrNumber: req.body.first_name1
  }
})  
             
  .then(()=>{
            School.findAll({
                      attributes: {
                          exclude: ['createdAt', 'updatedAt']
                      }
                })
                .then((result) => {

                    res.send( pug.renderFile('views/School.pug', {
                  columns: Object.keys(result[0].dataValues),
                  schools: result.map(function(school) {
                      return school.dataValues;
                  })
                }))     
            })   
    })
             }else{
                      const Pupil = require('./db').Pupil; 
                 Pupil.destroy({
              where: {
                lastName: req.body.first2_name2
              }
            })  
     
            .then(()=>{
                Pupil.findAll({
                          attributes: {
                              exclude: ['createdAt', 'updatedAt']
                          }
                    })
                    .then((result) => {

                        res.send( pug.renderFile('views/Pupil.pug', {
                      columns: Object.keys(result[0].dataValues),
                      schools: result.map(function(school) {
                          return school.dataValues;
                      })
                    }))     
                })   
            })

 }
})




app.get('/updata_school_number_of_pupl', urlencodedParser, function (req, res) {
   const School = require('./db').School; 
   School.update({ nameOrNumber: '62', numberOfPupils: 561, averageScore: 9.5},
   {
       where: {
        nameOrNumber: '47'
    },
       fields: ['numberOfPupils']
   }        
).then(()=>{
School.findAll({
          attributes: {
              exclude: ['createdAt', 'updatedAt']
          }
      })
        .then((result) => {
          
            res.send( pug.renderFile('views/schools.pug', {
          columns: Object.keys(result[0].dataValues),
          schools: result.map(function(school) {
              return school.dataValues;
          })
        }))     
    })   
})

 
})

 

app.post('/show_school_with_orders?fname=numberOfPupils', urlencodedParser, function (req, res) {
    var table = 'School';
    console.log('a1',table);
    const School = require('./db').School;
    console.log('a2',School)
      School.findAll({
          order : [req.body.value],
          attributes: {
              exclude: ['createdAt', 'updatedAt']
          }
      })
        .then((result) => {
          
            res.send( pug.renderFile('./views/schools2_Header_input_11_08.pug', {
          columns: Object.keys(result[0].dataValues),
          schools: result.map(function(school) {
              return school.dataValues;
          })
        }))     
    })   
})
app.post('/show_pupils_with_orders', urlencodedParser, function (req, res) {    
    const School = require('./db').Pupil;
    console.log('a2',School)
      School.findAll({
          order : [req.body.value],
          attributes: {
              exclude: ['createdAt', 'updatedAt']
          }
      })
        .then((result) => {         
            res.send( pug.renderFile('./views/pupil2_Header_input_11_08.pug', {
          columns: Object.keys(result[0].dataValues),
          schools: result.map(function(school) {
              return school.dataValues;
          })
        }))     
    })   
})
app.get('/show_pupils_with_orders', urlencodedParser, function (req, res) {    
    const School = require('./db').Pupil;
    console.log('r2',req)
      School.findAll({
          order : [req.body.value],
          attributes: {
              exclude: ['createdAt', 'updatedAt']
          }
      })
        .then((result) => {         
            res.send( pug.renderFile('./views/pupil2_Header_input_11_08.pug', {
          columns: Object.keys(result[0].dataValues),
          schools: result.map(function(school) {
              return school.dataValues;
          })
        }))     
    })   
})
app.get('/show_school_with_orders_15_08', function (req, res) {   
    const School = require('./db').School;
 
      ord = (req.query.value1) ? req.query.value1:'nameOrNumber';
 console.log('r1',req.query.value1, ord);
      School.findAll({
          order : [ord],
          attributes: {
              exclude: ['createdAt', 'updatedAt']
          }
      })
        .then((result) => {
          result1 = [];
          for (x in result) {
            result1[x] = result[x].dataValues;
        }
          res.send( pug.renderFile('./views/schools2_Header_input_15_08.pug', {
          columns: Object.keys(result[0].dataValues),
          schools: result.map(function(school) {
              return school.dataValues;
        })     
    }))   
})
})
 app.get('/show_pupils_with_orders_15_08', function (req, res) {   
    const School = require('./db').Pupil;
 
      ord = (req.query.value1) ? req.query.value1:'lastName';
 console.log('r1',req.query.value1, ord);
      School.findAll({
          order : [ord],
          attributes: {
              exclude: ['createdAt', 'updatedAt']
          }
      })
        .then((result) => {
          result1 = [];
          for (x in result) {
            result1[x] = result[x].dataValues;
        }
          res.send( pug.renderFile('./views/pupil2_Header_input_15_08.pug', {
          columns: Object.keys(result[0].dataValues),
          schools: result.map(function(school) {
              return school.dataValues;
        })     
    }))   
})
})
app.get('/show_pupils_with_orders', function (req, res) {   
    const School = require('./db').Pupil;
      School.findAll({
          attributes: {
              exclude: ['createdAt', 'updatedAt']
          }
      })
        .then((result) => {
          result1 = [];
          for (x in result) {
            result1[x] = result[x].dataValues;
        }
          res.send( pug.renderFile('./views/pupil2_Header_input_11_08.pug', {
          columns: Object.keys(result[0].dataValues),
          schools: result.map(function(school) {
              return school.dataValues;
        })     
    }))   
})
})

app.get('/admin', function (req, res) {   
    const School = require('./db').School;
      School.findAll({
          attributes: {
              exclude: ['createdAt', 'updatedAt']
          }
      })
        .then((result) => {
          result1 = [];
          for (x in result) {
            result1[x] = result[x].dataValues;
        }
          res.send( pug.renderFile('./views/tiles_11_08.pug', {
          columns:result[0].dataValues,
          schools: result1
        }))     
    })   
})
/*
app.get('/process_get2', function (req, res) {
   // Prepare output in JSON format
   var fs = require('fs');

//create a file named mynewfile3.txt:
const School = require('./db').School;
  School.findAll()
.then((result) => {
 
    res.send(result);  
});
   // res.render('schools', {name: 'school'});
})
*/

app.post('/updata_school_number_of_pupl', urlencodedParser, function (req, res) {
   var table = 'School';
   if (table === 'School') {    
       const School = require('./db').School;
       console.log('a3',req.body.name, req.body.value, req.body.id);  
       School.update({ nameOrNumber: req.body.value, numberOfPupils: req.body.value, averageScore: req.body.value},
                   
       {
           where: {
            id: req.body.id
        },
           fields: [req.body.name]
       }        
       ).then(()=>{
        School.findAll({
                  where: {
                     id: req.body.id
                  },
                  attributes: {
                      exclude: ['createdAt', 'updatedAt']
                  }
            })
            .then((result) => {

                res.send( pug.renderFile('views/School.pug', {
              columns: Object.keys(result[0].dataValues),
              schools: result.map(function(school) {
                  return school.dataValues;
              })
            }))     
        })   
    })
 }else{
      const Pupil = require('./db').Pupil; 
   Pupil.update({ firstName: req.body.first_name1, lastName: req.body.first_name1, averageScore: req.body.first_name1, school: req.body.first_name1},
   // console.log('a3',req.body.last_name1);             
   {
       where: {
        lastName: req.body.last_name1
    },
       fields: [req.body.first_name]
   }        
).then(()=>{
    Pupil.findAll({
              attributes: {
                  exclude: ['createdAt', 'updatedAt']
              }
        })
        .then((result) => {
          
            res.send( pug.renderFile('views/Pupil.pug', {
          columns: Object.keys(result[0].dataValues),
          schools: result.map(function(school) {
              return school.dataValues;
          })
        }))     
    })   
})
     
 }
})


app.post('/pupils_get', urlencodedParser, function (req, res) {
 //var name = req.params.name;

    var table = 'Pupil';
    console.log('a1',table);
    const Pupil = require('./db').Pupil;
    console.log('a2',Pupil)
      Pupil.findAll({
           where: {
            school: req.body.name
           },
          attributes: {
              exclude: ['createdAt', 'updatedAt']
          }
      })
        .then((result) => {
          
            res.send( pug.renderFile('views/Pupil_tabl_input.pug', {
          columns: Object.keys(result[0].dataValues),
          schools: result.map(function(school) {
              return school.dataValues;
          })
        }))     
    })
})


/*  ////////////////////////////////
app.get('/pupil_get/:name', urlencodedParser, function (req, res) {
 var name = req.params.name;

    var table = 'Pupil';
    console.log('a1',table);
    const Pupil = require('./db').Pupil;
    console.log('a2',Pupil)
      Pupil.findAll({
           where: {
            school: name
           },
          attributes: {
              exclude: ['createdAt', 'updatedAt']
          }
      })
        .then((result) => {
          
            res.send( pug.renderFile('views/Pupil_tabl_input.pug', {
          columns: Object.keys(result[0].dataValues),
          schools: result.map(function(school) {
              return school.dataValues;
          })
        }))     
    })
})
*/
app.post('/insert_new', urlencodedParser, function (req, res) {
   var table = 'School';
   if (table === 'School') {    
       const School = require('./db').School;
       School.findOrCreate(
           {where: {nameOrNumber: 'new',
                   numberOfPupils: 0,
                   averageScore: 0
                   }
           }
       )          
       .then(()=>{
            School.findAll({
                      attributes: {
                          exclude: ['createdAt', 'updatedAt']
                      }
                })
                .then((result) => {

                    res.send( pug.renderFile('views/School_input.pug', {
                  columns: Object.keys(result[0].dataValues),
                  schools: result.map(function(school) {
                      //var key = school.dataValues.id
                      return  school.dataValues;
                  })
                }))     
            })   
    })
 }else{
          const Pupil = require('./db').Pupil; 
       Pupil.findOrCreate(
               {where: {firstName: req.body.first2_name1,
                       lastName: req.body.first2_name2,
                       averageScore: req.body.first2_name3,
                       school: req.body.first2_name4},    
                }

           )  
            .then(()=>{
                Pupil.findAll({
                          attributes: {
                              exclude: ['createdAt', 'updatedAt']
                          }
                    })
                    .then((result) => {

                        res.send( pug.renderFile('views/Pupil.pug', {
                      columns: Object.keys(result[0].dataValues),
                      schools: result.map(function(school) {
                          return school.dataValues;
                      })
                    }))     
                })   
            })

 }
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})

app.post('/delete_new', urlencodedParser, function (req, res) {
   var table = 'School';
   if (table === 'School') {    
       const School = require('./db').School;
        School.destroy({
  where: {
    nameOrNumber: 'new'
  }
})  
             
  .then(()=>{
            School.findAll({
                      attributes: {
                          exclude: ['createdAt', 'updatedAt']
                      }
                })
                .then((result) => {

                    res.send( pug.renderFile('views/School.pug', {
                  columns: Object.keys(result[0].dataValues),
                  schools: result.map(function(school) {
                      return school.dataValues;
                  })
                }))     
            })   
    })
             }else{
                      const Pupil = require('./db').Pupil; 
                 Pupil.destroy({
              where: {
                lastName: req.body.first2_name2
              }
            })  
     
            .then(()=>{
                Pupil.findAll({
                          attributes: {
                              exclude: ['createdAt', 'updatedAt']
                          }
                    })
                    .then((result) => {

                        res.send( pug.renderFile('views/Pupil.pug', {
                      columns: Object.keys(result[0].dataValues),
                      schools: result.map(function(school) {
                          return school.dataValues;
                      })
                    }))     
                })   
            })

 }
})


app.post('/updata_school_number_of_pupl1', urlencodedParser, function (req, res) {
   var table = 'Pupil';
   if (table === 'School') {    
       const School = require('./db').School;
       console.log('a3',req.body.name, req.body.value, req.body.id);  
       School.update({ nameOrNumber: req.body.value, numberOfPupils: req.body.value, averageScore: req.body.value},
                   
       {
           where: {
            id: req.body.id,
            
        },
           fields: [req.body.name]
       }        
       ).then(()=>{
        School.findAll({
                  
                  attributes: {
                      exclude: ['createdAt', 'updatedAt']
                  }
            })
            .then((result) => {

                res.send( pug.renderFile('views/School.pug', {
              columns: Object.keys(result[0].dataValues),
              schools: result.map(function(school) {
                  return school.dataValues;
              })
            }))     
        })   
    })
 }else{
  console.log('a4',req.body.id,req.body.name );
  const Pupil = require('./db').Pupil;
  
   Pupil.update({ firstName: req.body.value, lastName: req.body.value, averageScore: req.body.value, school: req.body.value},
                
   {
       where: {
        id: req.body.id
    },
       fields: [req.body.name]
   }        
).then(()=>{
    Pupil.findAll({
               where: {
                      id: req.body.id,
            
                  },
              attributes: {
                  exclude: ['createdAt', 'updatedAt']
              }
        })
        .then((result) => {
          
            res.send( pug.renderFile('views/Pupil_tabl_input.pug', {
          columns: Object.keys(result[0].dataValues),
          schools: result.map(function(school) {
              return school.dataValues;
          })
        }))     
    })   
})
     
 }
})


app.post('/updata_school_number_of_pupl1_11_08', urlencodedParser, function (req, res) {   
  console.log('a4',req.body.id,req.body.name );
  const Pupil = require('./db').Pupil;
  
   Pupil.update({ firstName: req.body.value, lastName: req.body.value, averageScore: req.body.value, school: req.body.value},
                
   {
       where: {
        id: req.body.id
    },
       fields: [req.body.name]
   }        
).then((result) => {          
            res.send( pug.renderFile('views/Pupil_tabl_input.pug', {
            columns: Object.keys(result[0].dataValues),
            schools: result.map(function(school) {
              return school.dataValues;
            })
        }))     
    })   
})
     
 
//})
