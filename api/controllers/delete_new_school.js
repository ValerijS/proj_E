 module.exports =function (req, res) { 
       const pug = require('pug');  
       var table = 'School';       
       const School = require('C:/nodeJs/todoListApi/db').School;
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
}