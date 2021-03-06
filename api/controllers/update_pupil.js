module.exports =function (req, res) { 
   const pug = require('pug');
   const Pupil = require('C:/nodeJs/todoListApi/db').Pupil;
  console.log('h2',req.body.id,req.body.name,req.body.value);
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
}