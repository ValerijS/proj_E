module.exports = function (req, res) {   
    const School = require('C:/nodeJs/todoListApi/db').Pupil;
    const pug = require('pug');
      ord = (req.query.value1) ? req.query.value1:'lastName';
      School.findAll({
          order : [ord],
          attributes: {
              exclude: ['createdAt', 'updatedAt']
          }
      })
        .then((result) => {
          result1 = [];
          for (x in result) {
            result1[x] = result[x].dataValues;
        }
          res.send( pug.renderFile('./views/pupil2_Header_input_15_08.pug', {
          columns: Object.keys(result[0].dataValues),
          schools: result.map(function(school) {
              return school.dataValues;
        })     
    }))   
})
}