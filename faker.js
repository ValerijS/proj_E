var faker = require('faker');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many 
console.log(randomEmail);
console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
console.log(faker.fake(" {{name.firstName}}"));
console.log(faker.fake(" {{random.number}}") % 13);//parseInt