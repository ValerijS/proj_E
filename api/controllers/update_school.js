module.exports = function (req, res){
       const pug = require('pug');
       const School = require('C:/nodeJs/todoListApi/db').School;
       console.log('a3',req.query.name, req.query.value, req.query.id);  
       School.update({ nameOrNumber: req.query.value, numberOfPupils: req.query.value, averageScore: req.query.value},
                   
       {
           where: {
            id: req.query.id
        },
           fields: [req.query.name]
       }        
       ).then(()=>{
        School.findAll({
                  where: {
                     id: req.query.id
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

}