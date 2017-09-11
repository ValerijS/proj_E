alert('nu');
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
console.log('db');
module.exports = {
    School: School,
    Pupil: Pupil,
}
module.exports.sequelize = sequelize
module.exports.Sequelize = Sequelize    


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

const {sequelize, School, Pupil} = require('./db');

sequelize.sync({force:true})
.then(() => {
    const promises = [];
    for (let i = 0; i<10; i++) {
        promises.push(
            School.create({
                nameOrNumber: 45 + i,
                numberOfPupils: 12341 + i,
                averageScore: 9.5
            })
            .then((school) => {
                return Pupil.create({ 
                    firstName: 'John ' + i,
                    lastName: 'Doe' + i,
                    school: school.nameOrNumber,
                    averageScore: 9.57   
                }) 
            })
        )
    }
    return Promise.all(promises)
})

const School = require('./api/models/school')(sequelize, Sequelize);
const Pupil = require('./api/models/pupil')(sequelize, Sequelize);
console.log('db');
module.exports = {
    School: School,
    Pupil: Pupil,
}
module.exports.sequelize = sequelize
module.exports.Sequelize = Sequelize    

const School = require('./db').School;
School.find({
    where: {
        nameOrNumber: 45
    }
})
.then((school) => {
    //document.getElementById("demo").innerHTML = "Hello World!";
    console.log(school.get());
})
document.getElementById("demo").innerHTML = "Hello World!1";
/*where: {
        nameOrNumber: >45
    }*/
/*
School
.findAndCountAll({
   where: {
      nameOrNumber: {
          gt: 45
      }
   }
})
.then(result => {
  console.log(result.count);
  console.log(result.rows);
});*/
/* offset: 10,
   limit: 2*/