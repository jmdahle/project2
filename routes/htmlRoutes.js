var db = require("../models");
///fake database for testing
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

