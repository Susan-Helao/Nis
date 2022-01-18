const express = require('express');
const bodyParser  = require("body-parser");
const path = require('path');


const app = express();
//const routes = require('./routes/');

const person = require("./controllers/nis-personController")
const marraige = require("./controllers/nis-marraigeController")
app.use(bodyParser.json({limit: '3mb'}))

app.set("port", process.env.PORT || 8000);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(routes);
app.use("/", require('./routes/web'));
app.use("/api", require('./routes/api'));


//DB Stuff

const db = require('./model/db_connection');

db.sequelize.sync().then(result => {
    // console.log(result);
}).catch(err => {
    //console.log(err);
});

/*db.sequelize.sync({force: true}).then (() =>
 {
     console.log("DROP AND RESYNC");
 });/*


/**
 * Rout
 */

//Create a new Person Record
app.post('/createPerson', person.create)
//Create a new Marraige Record
 app.post('/createMarraige', marraige.create)

// //Retrieve all Person Records
//app.get('/getAllPeople', person.findAll)
app.get('/getAllMarraiges', marraige.findAll)

// //Retrieve all Dead Person Records
//app.get('/', person.findAllDeadpeople)
// //Retrieve all Divorce People Records
// //app.get('/', marraige.findAllDivorced)

// //Retrieve Single Person with IDs
app.get('/getOnePerson/:id', person.findOne)
// //Retrieve Single Marraige with IDs
app.get('/getOneMarraige/:id', marraige.findOne)

// //Update a Person Record with id
app.put("/updatePerson/:id", person.update)
// //Update a Marraige Record with id
app.put("/updateMarraige/:id",marraige.update)

// //Delete Person Record with id
app.delete("/deletOnePerson/:id", person.deleteOne)
// //Delete a Marraige Record with id
app.delete("/deleteOneMarraige/:id", marraige.deleteOne)

// //delete all Person Records
// app.delete("/", person.deleteAll)
// //delete all Marraige Records
// app.delete("/", marraige.deleteAll)


// /*

// //Used in Development Only



// db.sequelize.sync({force: true}).then (() =>
// {
//     console.log("DROP AND RESYNC);
// });

// 

app.listen(8000, function() 
{
    console.log('Server started on port ' + app.get('port'));
})

module.exports = app;