
module.exports = function (req, res, next) {
    const pug = require('pug');
    var table = 'Pupil';    
    const Pupil = require('C:/nodeJs/todoListApi/db').Pupil;
    Pupil.findAll({
           where: {
            school: req.body.name
           },
          attributes: {
              exclude: ['createdAt', 'updatedAt']
          }
     })
       .then((result) => {
         var variables = {   
          columns: Object.keys(result[0].dataValues),
          schools: result.map(function(school) {
              return school.dataValues;
          })
         }
         res.variables = variables;
         next()
       })
}