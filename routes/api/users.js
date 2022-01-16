const express = require('express');

const router = express.Router();

router.get("/", function(req, res) 
{
    res.json("THis is a json status code for the user api ")
});

module.exports = router;