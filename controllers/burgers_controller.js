var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req,res){
    burger.show(function(data){
        var burgerobject = {
            burgers: data
        }
        console.log(burgerobject);
        res.render("index", burgerobject);
    });
});

router.post("/burgers", function(req,res){
    console.log(req.body.newBurger)
    burger.add(req.body.newBurger, function(data){
        res.json(data);
    })
})

router.put("/burgers/:id", function(req,res){
    burger.eat(req.params.id, function(data){
        res.json(data);
    })
})

module.exports = router;