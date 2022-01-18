const { person } = require('./db_connection');
const db = require('./db_connection');

const sequelize = db.sequelize;
const Sequelize = db.Sequelize;

module.exports = (sequelize, Sequelize) => {
    const personRecords= sequelize.define("personRecords", 
    {
        id:
        {
            autoIncrement: true,
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        firstName:
        {
            type: Sequelize.STRING,
            allowNull: false
        },
        surname:
        {
            type: Sequelize.STRING,
            allowNull: false
        },
        gender:
        {
            type: Sequelize.STRING,
            allowNull: false
        },
        dateOfBirth:
        {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        dateOfDeath:
        {
            type: Sequelize.DATEONLY,
            allowNull: true
        },
        citizenship:
        {
            type: Sequelize.STRING,
            allowNull: false
        },
        mother:
        {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: 
            {
                model:'personRecords',
                referencesKey: 'id'
            }
        },
        father:
        {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: 
            {
                model:'personRecords',
                referencesKey: 'id'
            }
        }
    }); 
   /* personRecords.associate = function(models)
    {
        person.belongsTo(models.marraige,{
            foreignKey: ''
        })
        
    }*/
    
   return personRecords;
}