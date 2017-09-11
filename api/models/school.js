module.exports = function(sequelize, Sequelize){
    //TODO discription
    const School = sequelize.define('School', {
      nameOrNumber: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false  
      },
      numberOfPupils: {
        type: Sequelize.INTEGER,
        allowNull: true  
      },
      averageScore: {
        type: Sequelize.DECIMAL(2, 2),
        allowNull: true
      }                         
    });
    return School;
}