module.exports = function (req, res,next) {   
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
          res.send( pug.renderFile('views/tiles_18_08_17.pug', {
          columns:result[0].dataValues,
          schools: result1
        }))     
    })   
}
//'C:/nodeJs/todoListApi