module.exports = function(sequelize, Sequelize){
    const Pupil = sequelize.define('pupil', {
      firstName: {
        type: Sequelize.STRING,
        unique: 'compositeIndex',
        allowNull: false  
      },
      lastName: {
        type: Sequelize.STRING
        unique: 'compositeIndex',
        allowNull: false  
      }
      averageScore: {
        type: Sequelize.DECIMAL(2, 2),
        allowNull: true
      }
      school: {
        type: Sequelize.STRING,
        allowNull: false                           
      }                      
    });
    return Pupil;
}