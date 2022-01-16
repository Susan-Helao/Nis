const db = require('../model/db_connection')
//const Person = db.person;
const Marraige = db.marraige;
const Op = db.Sequelize;


/**
 * 
 * THIS IS FOR THE MARRAIGW TABLE
 * 
 */
//Create and Save a new marraige
exports.create = (req, res) => 
{
    //validate the request
    if (!req.body.title)
    {
        res.status(400).send({
             message: "Content can not be empty!"});
        return;
    }

    //create the person
    const marraige = 
    {
        id: req.body.id,
        husband: req.body.husband,
        wife: req.body.wife,
        dateOfMarraige: req.body.dateOfMarraige,
        dateOfDivorce: req.body.dateOfDivorce
    }

    //save the person in the database
    Marraige.create(marraige)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
};

//Retrieve all Marraiges from the database
exports.findAll = (req, res) => 
{
    const id = req.query.dateOfDeath;
    var condition = id ? {id: {[Op.like]: `%${id}%`}} : null;

    Person.findAll({where: condition})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

//Retrieve one Marraige record from the database
exports.findOne = (req, res) => 
{
    const id = req.params.id;
    Marraige.findByPk(id)
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
//Update a Marraige Record by the id in the request
exports.update = (req, res) => 
{
    const id = req.params.id;

    Marraige.update(req.body, {
        where: {id: id}
    })
    .then(num =>{
        if(num === 1)
        {
            res.send({
                message: "Marraige Record Was successfully Updated"
            });
        }
        else
        {
            res.send({
                message: `Cannot update Marraige Record with the id = ${id}, Maybe Person was not found or req.body is empty!`
            });
        }
    })
    .catch(err =>
        {
            res.status(500).send({
                message: "error updating Marraige record with id = " + id});
        });
};

//Delete a Marraige Record by the id in the request
exports.deleteOne = (req, res) => 
{
    const id = req.params.id;

    Marraige.destroy({
        where: {id : id}
    })
    .then(num =>{
        if(num === 1)
        {
            res.send({
                message: "Marraige Record was deleted successfully!"
            });
        }
        else
        {
            res.send({
                message: `Cannot Delete Marraige Record with id = ${id}. Maybe person was found!`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Couldn't Delete Marraige with id =" + id});
    });
};

//delete all Marraige Records from the database
exports.deleteAll = (req, res) =>
 {
    Marraige.destroy({
        where: {},
        truncate: false
    })
    .then(num => {
        res.send({ message: `${num} Marraige Records were deleted successfully!`});
    })
    .catch(err =>{
        res.status(500).send({ 
            message:err.message || "Some error occured while deleting all Person Records."});
    });
 };

//find all published Marraige
exports.findAllDivorced = (req, res) => 
{
    Marraige.findAll({where: {dateOfDivorce: !null}})
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Some error occured while retrieving all Divorce Records."
        });
    });
};
