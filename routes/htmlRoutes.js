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

  // Load ChooseYourOwn page
  app.get("/ChooseYourOwn", function(req, res) {
    var ingredients = [
      {
        id: 1,
        name: "avocado",
        unit: 1.4,
        inventory:40 ,
        capacity: 60,
        restock_ammount: 20,
        restock_price:30 ,  
        text: "avocado is good for whatever",
        image: "/image/placeholder.jpeg",
        fruitLetter: "a"
      },
      {
        id: 2,
        name: "strawberry",
        unit:1.4,
        inventory:40,
        capacity:60,
        restock_ammount:20,
        restock_price:10,
        text: "strawberry is good for whatever",
        image: "/image/placeholder.jpeg",
        fruitLetter: "b"
      },
      {
        id: 3,
        name: "spinache",
        unit:1.4,
        inventory:40,
        capacity:60,
        restock_ammount:20,
        restock_price:5,
        text: "spinache is good for whatever",
        image: "/image/placeholder.jpeg",
        fruitLetter: "c"
      },
      {
        id: 4,
        name: "pineapple",
        unit:1.4,
        inventory:40,
        capacity:60,
        restock_ammount:20,
        restock_price:10,
        text: "pineapple is good for whatever",
        image: "/image/placeholder.jpeg",
        fruitLetter: "d"
      },
      {
        id: 5,
        name: "coconut",
        unit:1.4,
        inventory:40,
        capacity:60,
        restock_ammount:20,
        restock_price:15,
        text: "coconut is good for whatever",
        image: "/image/placeholder.jpeg",
        fruitLetter: "e"
      }
    ]    
    res.render("ChooseYourOwn", {
        fruitArray: ingredients
      }
    );
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
