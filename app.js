const express = require('express');
const path = require('path');

const app = express();
//const routes = require('./routes');

const person = require("./controllers/nis-personController")
// const marraige = require("./controllers/nis-personController")
app.use(express.json)
app.set("port", process.env.PORT || 5000);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(routes);
// app.use("/", require('./routes/web'));
// app.use("/api", require('./routes/api'));

//DB Stuff

const db = require('./model/db_connection');

db.sequelize.sync().then(result => {
    // console.log(result);
}).catch(err => {
    // console.log(err);
});

/**
 * Route
 */

//Create a new Person Record
app.post('/create', person.create)
//Create a new Marraige Record
// app.post('/', marraige.create)

// //Retrieve all Person Records
// app.get('/', person.findAll)
// //Retrieve all Marraige Records
// app.get('/', marraige.findAll)

// //Retrieve all Dead Person Records
// //app.get('/', person.findAllDeadpeople)
// //Retrieve all Divorce People Records
// //app.get('/', marraige.findAllDivorced)

// //Retrieve Single Person with IDs
// app.get('/:id', person.findOne)
// //Retrieve Single Marraige with IDs
// app.get('/:id', marraige.findOne)

// //Update a Person Record with id
// app.put("/:id", person.update)
// //Update a Marraige Record with id
// app.put("/:id",marraige.update)

// //Delete Person Record with id
// app.delete("/:id", person.deleteOne)
// //Delete a Marraige Record with id
// app.delete("/:id", marraige.deleteOne)

// //delete all Person Records
// app.delete("/", person.deleteAll)
// //delete all Marraige Records
// app.delete("/", marraige.deleteAll)


// /*

// //Used in Development Only



// db.sequelize.sync({force: true}).then (() =>
// {
//     console.log("DROP AND RESYNC");
// });

// */

app.listen(5000, function() 
{
    console.log('Server started on port ' + app.get('port'));
})