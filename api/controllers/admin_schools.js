module.exports = function (req, res,next) {   
     console.log('k1', req.session);
      var email = req.body.email;
      const pug = require('pug');
      const School = require('C:/nodeJs/todoListApi/db').School;
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
         var variables = {
          columns:result[0].dataValues,
          schools: result1,
          sess_em1: req.session.passport.user
         };
       //return  variables
       res.variables = variables;
          next() 
    })   
}