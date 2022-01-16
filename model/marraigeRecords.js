const db = require('./db_connection');

const sequelize = db.sequelize;
const Sequelize = db.Sequelize;
const personRecords = require('./birthRecords');



module.exports = (sequelize, Sequelize) => {
    const marraigeRecords= sequelize.define("marraigeRecords", 
    {
        id:
        {
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
            type: Sequelize.DATE,
            allowNull: false
        },
        dateOfDivorce:
        {
            type: Sequelize.DATE,
            allowNull: true
        }

        
   });

  // marraigeRecords.belongsToMany(personRecords);

   return marraigeRecords;
}

