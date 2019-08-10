var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    console.log("route / findall")
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("ChooseYourOwn", {fruitArray: ingredients});
    });
  });

  // Load example page and pass in an example by id
  
  app.get("/ChooseYourOwn", function(req, res) {
   
 

      res.render("ChooseYourOwn",{fruitArray:ingredients})
       
      });
    
  

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

