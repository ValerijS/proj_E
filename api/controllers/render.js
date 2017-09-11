module.exports = function(template) {
// console.log('k51')   
 const pug = require('pug');
    return function (req, res) {
      res.send( pug.renderFile(template, res.variables));
    };
  }