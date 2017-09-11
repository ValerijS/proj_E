var passport = require('passport');
var LocalStrategy  = require('passport-local').Strategy;
const User = require('C:/nodeJs/todoListApi/db').Administrator;
const Pasport = require('C:/nodeJs/todoListApi/public/JavaScript/pasport');
const pug = require('pug');
module.exports = function(req, res, next) {
 User
.findOrCreate(
   {
   where: {email: req.body.email,  
          password:req.body.password}
   }
  ).then((result)=>{console.log('k3',result);
 res.redirect('/admin');})
 
}
 //console.log('g6',user[0].dataValues,req);
//     
//     //console.log('d7',req.logIn(user,function() {
//         //res.redirect('/private');
//     
//     req.login(user, function(err) {
//     console.log('d8',user[0].dataValues);   
//     return err
//          ? next(err)
//          : res.redirect('/private');
//     
//      });
//                 }
//  ).then(()=> res.end())
//      };
////     console.log('d7',user,req.logIn(user, function(err) {
////         res.redirect('/private');
//     
//        
//  
 
 
// .spread((user, created) => {
//    console.log('g1',user.get({
//      plain: true
//    }),'g1');
//    console.log(created);
//  console.log('g5',user.save(function(err) {
//    return err
//      ? next(err)
//      : req.logIn(user, function(err) {
//        return err
//          ? next(err)
//          : res.redirect('/private');
//     
//      });
//   
//  }).then(()=> res.end()))
//  }
//  );
//}
//  //res.redirect('/private');
//  //var user = { username: req.body.email, password: req.body.password};
//  //user.get(function(err) {
//    //return err
//     // ? next(err):
//  var user = { email: req.body.email, password: req.body.password};
//  //console.log('g2',user,req.logIn(user, function(err) {
//        //return err
//        //? next(err):
//          // res.redirect('/private');
//     // }),'g2')
//       req.logIn(user.email, function(err) {
//       // return err
//        //? next(err):
//        console.log('g2',user,req.logIn);
//           res.redirect('/private');
//      });
//// var user = { username: req.body.email, password: req.body.password};
//// req.logIn(user, function(err) {
////        return err
////        ? next(err):
////           res.redirect('/private');
////      });
// //res.redirect('/private');
// // });
// })};//)};