
const  axios = require('axios');
const express = require('express');
const path = require('path');

const db = require('../../model/db_connection')

const Person = db.person;
const Marraige = db.marraige;
const Op = db.Sequelize;
//const path = require('')

const bodyParser  = require("body-parser");

/*const person = require("../../controllers/nis-personController")
const marraige = require("../../controllers/nis-marraigeController")*/

const router = express.Router();
//const urlencoderParser = bodyParser.urlencoded({extended: false});


router.get('/', function(req, res) 
{
    //console.log("Hello I'm on the start view here");
    res.render('home/index');
});

router.get('/index', function(req, res)
{
    res.render('home/index');
});


//Records
router.get('/birth', async function(req, res)
{
   /* const identity = req.query.id
    var condition = identity ? {identity: {[Op.like]: `%${identity}%`}} : null;

    Person.findAll({where: condition})
    .then(data => {
       // res.send(data);
       console.log("HEREEEEEE IS THEEEEE THE DAAAAAAATAAAAAAAAAA: ", data);
       res.render('home/birth',{allPeople: data});
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });*/


    data = await axios.get('http://localhost:5000/getAllPeople')

    //console.log("Here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! : " ,data.data);

    res.render('home/birth',{allPeople: data.data});

    //res.render('home/birth');
});

router.post('/addNewBirthRecordForm', async (req, res) => {
    
    const reqestbody = req.body 
    data = await axios.post('http://localhost:5000/createPerson',reqestbody).then( async(data) => {
        data = await axios.get('http://localhost:5000/getAllPeople')
        res.render('home/birth',{allPeople: data.data});
    });
    console.log("This is it", reqestbody)  

    //const responcebody = res.body   
   // console.log("This is it", responcebody
});

router.post('/deleteRecord', async (req, res) => {
    const reqestbody = req.body 

    const url = 'http://localhost:5000/deletOnePerson/' + reqestbody.id
    data = await axios.delete(url,reqestbody).then( async(data) => {
        data = await axios.get('http://localhost:5000/getAllPeople')
        res.render('home/birth',{allPeople: data.data});
    }); //comment

    //const responcebody = res.body   
    console.log("This is it", reqestbody)
});

router.get('/marraige', async function(req, res)
{
    data = await axios.get('http://localhost:5000/getAllMarraiges')
    personData = await axios.get('http://localhost:5000/getAllPeople')
    console.log(data.data);
    console.log("START: ", personData.data);
    
    res.render('home/marraige',{allMarraiges: data.data, allPeople: personData.data});
    /*const id = req.query.dateOfDeath;
    var condition = id ? {id: {[Op.like]: `%${id}%`}} : null;

    Marraige.findAll({where: condition})
    .then(data => {
       // console.log("HEREEEEEE IS THEEEE THE DAT: " ,data.getDataValue('dateOfMarraige'));
        //console.log(data instanceof data
       res.render('home/marraige',{allMarraiges: data});
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });*/
    
});
/*router.get('/death', function(req, res)
{
    res.render('home/death');
});*/

//Queries
router.get('/relationships', function(req, res)
{
    res.render('home/relationships');
});
router.get('/relatives', function(req, res)
{
    res.render('home/relatives');
});
router.get('/clan', function(req, res)
{
    res.render('home/clan');
});

/*router.get('/findAllPeople', function(req, res)  

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

    return res
});*/

/*
//Create a new Person Record
router.post('/', person.create)
//Create a new Marraige Record
router.post('/', marraige.create)

//Retrieve all Person Records
router.get('/', person.findAll)
//Retrieve all Marraige Records
router.get('/', marraige.findAll)

//Retrieve all Dead Person Records
router.get('/', person.findAllDeadpeople)
//Retrieve all Divorce People Records
router.get('/', marraige.findAllDivorcePeople)

//Retrieve Single Person with IDs
router.get('/:id', person.findOne)
//Retrieve Single Marraige with IDs
router.get('/:id', marraige.findOne)

//Update a Person Record with id
router.put("/:id", person.update)
//Update a Marraige Record with id
router.put("/:id",marraige.update)

//Delete Person Record with id
router.delete("/:id", person.deleteOne)
//Delete a Marraige Record with id
router.delete("/:id", marraige.deleteOne)

//delete all Person Records
router.delete("/", person.deleteAll)
//delete all Marraige Records
router.delete("/", marraige.deleteAll)
*/
module.exports = router;