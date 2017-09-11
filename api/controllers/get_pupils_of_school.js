module.exports = function (req, res) {
    const pug = require('pug');
    var table = 'Pupil';
    console.log('a1',table);
    const Pupil = require('C:/nodeJs/todoListApi/db').Pupil;
    console.log('a2',Pupil)
      Pupil.findAll({
           where: {
            school: req.body.name
           },
          attributes: {
              exclude: ['createdAt', 'updatedAt']
          }
      })
//          .then((result) => {
//          result1 = [];
//          for (x in result) {
//            result1[x] = result[x].dataValues;
//        }
//          console.log('h1',result[0])
//          res.send( pug.renderFile('views/Pupil_tabl_input.pug', {
//          columns:result[0].dataValues,
//          schools: result1
//        }))     
//    })   
        .then((result) => {
          
            res.send( pug.renderFile('views/Pupil_tabl_input.pug', {
          columns: Object.keys(result[0].dataValues),
          schools: result.map(function(school) {
              return school.dataValues;
          })
        }))     
    })
}