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


const Employee = sequelize.define('employee', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    get() {
      const title = this.getDataValue('title');
      // 'this' allows you to access attributes of the instance
      return this.getDataValue('name') + ' (' + title + ')';
    },
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    set(val) {
      this.setDataValue('title', val.toUpperCase());
    }
  }
});

const employee_t = new Employee();
console.log('a_1_17_08',  employee_t); 
module.exports = {
    Empl: employee_t  

}
//module.
//sequelize.drop()
//.then(() => sequelize.sync({force:true}))
sequelize.sync({force:true})
.then( () => { 
return Employee.create({ name: 'John Doe_2_17-08', title: 'senior engineer' })
  .then((employee) => {
    console.log('a_2_17_08',employee.dataValues)
    console.log(employee.get('name')); // John Doe (SENIOR ENGINEER)
    console.log(employee.get('title')); // SENIOR ENGINEER
    
  })    
})
