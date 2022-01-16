const db = require('./db_connection');

const sequelize = db.sequelize;
const Sequelize = db.Sequelize;

module.exports = (sequelize, Sequelize) => {
    const personRecords= sequelize.define("personRecords", 
    {
        id:
        {
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
            type: Sequelize.DATE,
            allowNull: false
        },
        dateOfDeath:
        {
            type: Sequelize.DATE,
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

   // personRecords.belongsToMany(personRecords);
}