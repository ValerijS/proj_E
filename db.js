
const Sequelize = require('sequelize'); 
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  // SQLite only
  storage: './database.sqlite'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


const School = require('./api/models/school')(sequelize, Sequelize);
const Pupil = require('./api/models/pupil')(sequelize, Sequelize);
const Administrator = require('./api/models/administrator')(sequelize, Sequelize);

//console.log('db')
module.exports = {
    School: School,
    Pupil: Pupil,
    Administrator: Administrator

}
module.exports.sequelize = sequelize
module.exports.Sequelize = Sequelize    

