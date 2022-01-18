const db = require('./db_connection');

const sequelize = db.sequelize;
const Sequelize = db.Sequelize;
const personRecords = require('./birthRecords');



module.exports = (sequelize, Sequelize) => {
    const marraigeRecords= sequelize.define("marraigeRecords", 
    {
        id:
        {
            autoIncrement: true,
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        husband:
        {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: 
            {
                model:'personRecords',
                referencesKey: 'id'
            }
        },
        wife:
        {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: 
            {
                model:'personRecords',
                referencesKey: 'id'
            }
            
        },
        dateOfMarraige:
        {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        dateOfDivorce:
        {
            type: Sequelize.DATEONLY,
            allowNull: true
        }

        
   });

  //arraigeRecords.belongsToMany(personRecords);

  marraigeRecords.associate= function(models)
  {
      marraigeRecords.hasMany(models.marraigeLink, {
          foreignKey: "marraigeID",
          as: "LINK"
      })
  }
   return marraigeRecords;
}

