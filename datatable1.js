const Sequelize = require('sequelize') 
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


const User = require('./api/models/user')(sequelize, Sequelize);

module.exports = {User: User}
module.exports.sequelize = sequelize
module.exports.Sequelize = Sequelize