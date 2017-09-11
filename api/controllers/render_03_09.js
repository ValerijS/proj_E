module.exports = function(template) {
// console.log('k51')   
 const pug = require('pug');
    variables = {
     name: 'boot' 
    }
    return function (req, res) {
      res.send( pug.renderFile(template, variables));
    };
  }