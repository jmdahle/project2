var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", (req, res) => {
      res.render("index");
  });

  // Load menu page
  app.get("/menu", function(req, res) {
      res.render("menu", {});
  });

  // Load choose-your-own page
  app.get("/choose-your-own", function(req, res) {
      res.render("choose-your-own");
  });

  // Load vending page
  app.get("/vend/:smothii_id", function(req, res) {
      res.render("vend", {
        smothii_id: req.params.smothii_id
      });
  });

  // Load restock page
  app.get('/restock', (request, response) => {
    response.render('jd-restock');
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

};
