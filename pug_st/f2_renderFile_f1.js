const pug = require('pug');

// Compile template.pug, and render a set of data, https://pugjs.org/api/getting-started.html
console.log(pug.renderFile('f1_template.pug', {
  name: 'Timothy'
}));
// "<p>Timothy's Pug source code!</p>"