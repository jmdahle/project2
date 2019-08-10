var db = require("../models");
​
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.render("index")
  });
​
  // Load menu page
  app.get("/menu", function(req, res) {
      res.render("menu")
  });
​
  // Load choose-your-own psge
  app.get("/choose-your-own", function(req, res) {
      res.render("choose-your-own")
  });
​
  // Load vending page
  app.get("/vend/:smothii_id", function(req, res) {
      res.render("vend", {
        smothii_id: req.params.smothii_id,
      });
  });
​
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};






