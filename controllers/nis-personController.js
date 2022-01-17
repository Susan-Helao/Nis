const db = require('../model/db_connection')
const Person = db.person;
//const Marraige = db.marraige;
const Op = db.Sequelize;

/**
 * 
 * THIS IS FOR THE PERSON TABLE
 * 
 */
//Create and Save a new person
console.log("IT REACHED HERE")
/*exports.create = (req, res) => 
{
    console.log('create')
    //validate the request
    if (!req.body.id)
    {
        res.status(400).send({
             message: "Content can not be empty!"});
        return;
    }

    //create the person
    const person = 
    {
        id: req.body.id,
        firstName: req.body.firstName,
        surname: req.body.surname,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
        dateOfDeath: req.body.dateOfDeath,
        citizenship: req.body.citizenship,
        mother: req.body.mother,
        father: req.body.father
    }

    //save the person in the database
    Person.create(person)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        })
    })

    return person
};*/

//Retrieve all People from the database
exports.findAll = (req, res) => 
{
    const identity = req.query.id;
    var condition = identity ? {identity: {[Op.like]: `%${identity}%`}} : null;

    Person.findAll({where: condition})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });

    console.log(res);
};

/*//Retrieve one Person from the database
exports.findOne = (req, res) => 
{
    const id = req.params.id;
    Person.findByPk(id)
    .then(data => {
        if (data)
        {
            res.send(data);
        }
        else
        {
            res.status(404).send({
                message: `Cannot Find Person with id  = ${id}.`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error retrieving Person with ID = " + id
        });
    });
};

//Update a Person by the id in the request
exports.update = (req, res) => 
{
    const id = req.params.id;

    Person.update(req.body, {
        where: {id: id}
    })
    .then(num =>{
        if(num === 1)
        {
            res.send({
                message: "Person Was successfully Updated"
            });
        }
        else
        {
            res.send({
                message: `Cannot update Person with the id = ${id}, Maybe Person was not found or req.body is empty!`
            });
        }
    })
    .catch(err =>
        {
            res.status(500).send({
                message: "error updating person with id = " + id});
        });
};

//Delete a Person by the id in the request
exports.deleteOne = (req, res) => 
{
    const id = req.params.id;

    Person.destroy({
        where: {id : id}
    })
    .then(num =>{
        if(num === 1)
        {
            res.send({
                message: "Person was deleted successfully!"
            });
        }
        else
        {
            res.send({
                message: `Cannot Delete Person with id = ${id}. Maybe person was found!`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Couldn't Delete Person with id =" + id});
    });
};

//delete all people from the database
exports.deleteAll = (req, res) => 
{
    Person.destroy({
        where: {},
        truncate: false
    })
    .then(num => {
        res.send({ message: `${num} Person Records were deleted successfully!`});
    })
    .catch(err =>{
        res.status(500).send({ 
            message:err.message || "Some error occured while deleting all Person Records."});
    });
};

//find all Dead People
exports.findAllDeadpeople = (req, res) => 
{
    Person.findAll({where: {dateOfDeath: !null}})
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Some error occured while retrieving all Dead People Records."
        });
    });
};
*/