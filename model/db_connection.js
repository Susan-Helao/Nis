const dbConfig = require('./config/db-config')
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER, dbConfig.PASSWORD, 
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAlias: false,

        pool: 
        {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    });

    var db ={};

    db.Sequelize= Sequelize;
    db.sequelize = sequelize;
    db.person = require("./birthRecords")(sequelize,Sequelize)
    db.marraige = require("./marraigeRecords")(sequelize,Sequelize)
    db.marraigeLink = require("./MarraigeLinkTable")(sequelize, Sequelize)

    db.marraige.associate(db)
    db.marraigeLink.associate(db)

    module.exports = db;
    

    /*
let sequelize = new Sequelize('nis', 'root', 'root');

const con = mysql.createConnction({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nis"
});

con.connect(function(err)
{
    if(err) 
    {
        console.error('Error connecting to the database')
    }else
    {
        console.log("Connected!");
    }

    
});

con.end(function(err)
{
    if(err) 
    {
        console.error('Database Connection cannot be ended')
    }else
    {
        console.log("Database connection ended successfully!");
    }

    
});*/