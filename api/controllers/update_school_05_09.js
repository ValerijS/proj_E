module.exports = function (req, res, next){
       const pug = require('pug');
       const School = require('C:/nodeJs/todoListApi/db').School;
       School.update({ nameOrNumber: req.query.value, numberOfPupils: req.query.value, averageScore: req.query.value},                   
       {
           where: {
            id: req.query.id
        },
           fields: [req.query.name]
       }        
       ).then(()=>{
        School.findAll({
//                  where: {
//                     id: req.query.id
//                  },
                  attributes: {
                      exclude: ['createdAt', 'updatedAt']
                  }
            })
            .then((result) => {
               variables = {
                  columns: Object.keys(result[0].dataValues),
                  schools: result.map(function(school) {
                      return school.dataValues;
                  })
                }
                res.variables = variables;
                
                next()
        })   
    })

}