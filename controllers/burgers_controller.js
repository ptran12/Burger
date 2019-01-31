var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

router.get("/", function(req, res) { //base route
    //  .selectAll(funcburgertion(burger_data) {
      burger.selectAll(function(burger_data){
        console.log(burger_data);
        res.render("index",{burger_data}); //"index" is from the views folder
      })
    });    
    
    //POST request to add a burger to the database
    router.post('/burgers/create', function(req, res) {
        burger.insertOne(req.body.burger_name, function(result) {
          res.redirect('/'); // to reflect update
        });
    });
      // PUT request to update a burger's status
    router.put('/burgers/update', function(req, res) {
      burger.updateOne(req.body.burger_id, function(result) {
        console.log(result)
        res.redirect("/");
      });
    });
    

module.exports = router;