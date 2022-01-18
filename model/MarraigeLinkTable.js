const { person } = require('./db_connection');
const db = require('./db_connection');

const sequelize = db.sequelize;
const Sequelize = db.Sequelize;

module.exports = (sequelize, Sequelize) => {
    const marraigeLink= sequelize.define("marraigeLink", 
    {
        id:
        {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        personID:
        {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        marraigeID:
        {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        
    }); 
   /* personRecords.associate = function(models)
    0
        person.belongsTo(models.marraige,{
            foreignKey: ''
        }
        
    }*/
    
    marraigeLink.associate= function(models)
  {
      marraigeLink.belongsTo(models.person, {
          foreignKey: "personID", 
          as: "person"
      })
      marraigeLink.belongsTo(models.marraige, {
        foreignKey: "marraigeID", 
        as: "marraige"
    })

  }

   return marraigeLink;
}