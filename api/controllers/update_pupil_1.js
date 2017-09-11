module.exports =function (req, res, next) { 
   const pug = require('pug');
   const Pupil = require('C:/nodeJs/todoListApi/db').Pupil;  
   Pupil.update(
    {firstName: req.body.value, lastName: req.body.value,
     averageScore: req.body.value, school: req.body.value},
    {where: {id: req.body.id},
     fields: [req.body.name]}        
   ).then((result) => {          
       variables =     
          {columns: Object.keys(result[0].dataValues),
          schools: result.map(function(school) {
            return school.dataValues;
          })
        }
       res.variables = variables;
       next()
    })   
}