
const Sequelize = require('sequelize') 
const sequelize = new Sequelize('database1', 'username1', 'password1', {
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
const Pupil1 = require('./api/models/pupil1')(sequelize, Sequelize);
const Administrator = require('./api/models/administrator')(sequelize, Sequelize);
module.exports = {
    School: School,
    Pupil: Pupil,
    Pupil1: Pupil1,
    Administrator: Administrator
}
module.exports.sequelize = sequelize
module.exports.Sequelize = Sequelize    

