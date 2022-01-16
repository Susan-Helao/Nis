const express = require('express');

const person = require("../../controllers/nis-personController")
const marraige = require("../../controllers/nis-marraigeController")

const router = express.Router();



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
router.get('/birth', function(req, res)
{
    res.render('home/birth');
});
router.get('/marraige', function(req, res)
{
    res.render('home/marraige');
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