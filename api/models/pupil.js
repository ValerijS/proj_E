module.exports = function(sequelize, Sequelize){
    //TODO discription
    const Pupil = sequelize.define('Pupil', {
      firstName: {
        type: Sequelize.STRING,
        allowNull: false ,
        unique: 'compositeIndex' 
      },
      lastName: {
        type: Sequelize.STRING,
        unique: 'compositeIndex',
        allowNull: false,  
      },
      averageScore: {
       type: Sequelize.DECIMAL(2, 2),
        allowNull: true
      },
     school: {
        type: Sequelize.STRING,
        allowNull: false                           
      }                      
    });     
    Pupil.belongsTo(sequelize.models.School, {foreignKey: 'school', targetKey: 'id'}); 
    return Pupil;
}