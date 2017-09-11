module.exports =function (req, res) { 
   const pug = require('pug');
   var table = 'School';    
       const School = require('C:/nodeJs/todoListApi/db').School;
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

                    res.send( pug.renderFile('views/tiles_18_08_17.pug', {
                  columns: Object.keys(result[0].dataValues),
                  schools: result.map(function(school) {
                      //var key = school.dataValues.id
                      return  school.dataValues;
                  })
                }))     
            })   
    })
 
}