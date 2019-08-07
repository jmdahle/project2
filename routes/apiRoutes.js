var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // ADD SMOOTHIE
  app.post('/api/add/smothii', (request, response) => {
    db.Smothii.create(request.body).then((dbSmothii) => {
      response.json(dbSmothii);
    });
  });

  // SELECT ALL SMOOTHIES
  app.get('/api/smothiis', (request, response) => {
    db.Smothii.findAll({}).then((dbSmothii) => {
      response.json(dbSmothii);
    });
  })

  // SELECT SMOOTHIE BY ID
  app.get('/api/smothii/:smothii_id', (request, response) => {
    db.Smothii.findAll({ where: { id: request.params.smothii_id } }).then((dbSmothii) => {
      response.json(dbSmothii);
    });
  });

  // UPDATE SMOOTHIE BY ID
  app.put('/api/update/smothii', (request, response) => {
    db.Smothii.update(
      {
        smothii_name: request.body.smothii_name,
        smothii_description: request.body.smothii_description,
        smothii_creator: request.body.smothii_creator,
        smothii_image_url: request.body.smothii_image_url
      }, {
        where: {
          id: request.body.id
        }
      }).then((dbSmothii) => {
        response.json(dbSmothii);
      });
  });

  // SELECT ALL INGREDIENTS
  app.get('/api/ingredients', (request, response) => {
    db.Ingredient.findAll({}).then((dbIngredient) => {
      response.json(dbIngredient);
    })
  })

  // SELECT INGREDIENT BY ID
  app.get('/api/ingredient/:ingredient_id', (request, response) => {
    db.Ingredient.findAll({ where: { id: request.params.ingredient_id } }).then((dbIngredient) => {
      response.json(dbIngredient);
    });
  });

  // ADD INGREDIENT
  app.post('/api/add/ingredient', (request, response) => {
    db.Ingredient.create(request.body).then((dbIngredient) => {
      response.json(dbIngredient);
    });
  });

  // UPDATE INGREDIENT BY ID
  app.put('/api/update/ingredient', (request, response) => {
    db.Ingredient.update(
      {
        ingredient_name: request.body.ingredient_name,
        ingredient_unit: request.body.ingredient_unit,
        ingredient_inventory: request.body.ingredient_inventory,
        ingredient_capacity: request.body.ingredient_capacity,
        ingredient_restock_amount: request.body.ingredient_amount,
        ingredient_restock_price: request.body.ingredient_price
      }, {
        where: {
          id: request.body.id
        }
      }).then((dbIngredient) => {
        response.json(dbIngredient);
      });
  });

  // SELECT INGREDIENTS FOR SMOOTHIE BY SMOOTHIE ID
  app.get('/api/recipe/:smothii_id', (request, response) => {
    // get the smothii information
    db.Recipe.findAll({ where: { SmothiiId: request.params.smothii_id }, include: [db.Ingredient] }).then((dbRecipie) => {
      response.json(dbRecipie);
    });
  });

  // "PURCHASE" a Smothii
  app.post('/api/purchase/:smothii_id', (request, response) => {
    // add transaction
    // update inventory
    // udpate availability
  });

  // "RESTOCK" an Ingredient
  app.put('/api/restock/:ingredient_id', (request, response) => {

  });

  function updateAvailability() {
    sql = `UPDATE Smothii set smothii.availability = false`;
    // set smothii availability to true if it is NOT in the list of smothiis that have one or more ingredients that are not available;
    
  }

};