var db = require("../models");



///
module.exports = function(app) {
  // ADD SMOTHII
  app.post('/api/add/smothii', (request, response) => {
    db.Smothii.create(request.body).then((dbSmothii) => {
      response.json(dbSmothii);
    });
  });

  // SELECT ALL SMOTHIIS
  app.get('/api/smothiis', (request, response) => {
    // update prices
    updatePrices();
    // update all smothiis to unavailable
    let sql = `UPDATE Smothiis set smothii_available = false;`;
    db.sequelize.query(sql, { type: db.sequelize.QueryTypes.UPDATE }).then( (dbResults) => {
      // set smothii availability to true if it is NOT in the list of smothiis that have one or more ingredients that are not available;
      let sql2 = `update Smothiis set smothii_available = true where Smothiis.id not in (select distinct SmothiiId from Recipes inner join Ingredients on Recipes.IngredientId = Ingredients.id where Ingredient_inventory < recipe_amount);`;
      db.sequelize.query(sql2, { type: db.sequelize.QueryTypes.UPDATE }).then( (dbResults2) => {
        // select the smoothies (with current availability)
        db.Smothii.findAll({}).then( (dbSmothii) => {
          response.json(dbSmothii);
        });
      });
    });
  });


  // SELECT SMOTHII BY CATEGORY
  app.get('/api/smothii/:category', (request, response) => {
    // select where smothii_category = :category
    // categories: 'user' 'fruit' 'vege'
    db.Smothii.findAll( {where: { smothii_category: request.params.category }
    } ).then( (dbSmothii) => {
      response.json(dbSmothii);
    });
  });

  // SELECT SMOTHII BY ID
  app.get('/api/smothii/detail/:smothii_id', (request, response) => {
     // update prices
     updatePrices();
     // update all smothiis to unavailable
    let sql = `UPDATE Smothiis set smothii_available = false;`;
    db.sequelize.query(sql, { type: db.sequelize.QueryTypes.UPDATE }).then( (dbResults) => {
      // set smothii availability to true if it is NOT in the list of smothiis that have one or more ingredients that are not available;
      let sql2 = `update Smothiis set smothii_available = true where Smothiis.id not in (select distinct SmothiiId from Recipes inner join Ingredients on Recipes.IngredientId = Ingredients.id where Ingredient_inventory < recipe_amount);`;
      db.sequelize.query(sql2, { type: db.sequelize.QueryTypes.UPDATE }).then( (dbResults2) => {
        // select the smoothies (with current availability)
        db.Smothii.findAll({ where: { id: request.params.smothii_id } }).then((dbSmothii) => {
          response.json(dbSmothii);
        });
      });
    });
  });

  // UPDATE SMOTHII BY ID
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

  // ADD RECIPE
  app.post('/api/add/recipe', (request, response) => {
    db.Recipe.create(request.body).then((dbRecipe) => {
      // update prices
      updatePrices();
      // update all smothiis to unavailable
      let sql = `UPDATE Smothiis set smothii_available = false;`;
      db.sequelize.query(sql, { type: db.sequelize.QueryTypes.UPDATE }).then( (dbResults) => {
        // set smothii availability to true if it is NOT in the list of smothiis that have one or more ingredients that are not available;
        let sql2 = `update Smothiis set smothii_available = true where Smothiis.id not in (select distinct SmothiiId from Recipes inner join Ingredients on Recipes.IngredientId = Ingredients.id where Ingredient_inventory < recipe_amount);`;
        db.sequelize.query(sql2, { type: db.sequelize.QueryTypes.UPDATE }).then( (dbResults2) => {
          response.json(dbRecipe);
        });
      });
    });
  });

  // SELECT INGREDIENTS FOR SMOOTHIE BY SMOTHII ID
  app.get('/api/recipe/:smothii_id', (request, response) => {
    // get the smothii information
    db.Recipe.findAll({ where: { SmothiiId: request.params.smothii_id }, include: [db.Ingredient] }).then((dbRecipie) => {
      response.json(dbRecipie);
    });
  });


  function updatePrices() {
    let sql = `select Recipes.smothiiid, sum(recipe_amount * (ingredient_restock_price/ingredient_restock_amount)) as total_cost from Recipes inner join Ingredients on Recipes.ingredientid = Ingredients.id  group by Recipes.SmothiiId;`;
    db.sequelize.query(sql, { type: db.sequelize.QueryTypes.SELECT }).then( (dbResults) => {
      let costsArray = dbResults;
      for (let i = 0; i < costsArray.length; i ++) {
        let smothiiPrice = costsArray[i].total_cost * 1.50;
        let smothii_id = costsArray[i].smothiiid;
        let sql2 = `UPDATE Smothiis SET smothii_price = ${smothiiPrice} WHERE Smothiis.id = ${smothii_id};`;
        db.sequelize.query(sql2, { type: db.sequelize.QueryTypes.UPDATE });
      }
    })
  }

  
  // "PURCHASE" a Smothii
  app.post('/api/purchase/:smothii_id', (request, response) => {
    // assumes pricing and availability are current
    // add transaction
    // get the smothii
    let smothii_id = request.params.smothii_id;
    db.Smothii.findAll({ where: { id: request.params.smothii_id } }).then((dbSmothii) => {
      console.log('selected smothii for purchase:', dbSmothii);
      let smothiiRecord = dbSmothii[0];
      console.log('selected data for smothii:', smothiiRecord);
      let purchaseRecord = {
        SmothiiId: smothiiRecord.id,
        smothii_price: smothiiRecord.smothii_price
      }
      // record the Purchase
      db.Purchase.create(purchaseRecord).then( (dbPurchase) => {
        console.log(dbPurchase);
        let newPurchaseRecord = dbPurchase;
        // update the Smothii purchases
        db.Smothii.update(
          {
            smothii_total_sold: smothiiRecord.smothii_total_sold + 1
          }, {
            where: {
              id: smothii_id
            }
          }).then( (dbSmothii) => {
            console.log(dbSmothii);
            // reduce the Ingredient inventory
            db.Recipe.findAll({ where: { SmothiiId: smothii_id }, include: [db.Ingredient] }).then((dbRecipe) => {
              console.log(dbRecipe);
              let ingredientList = dbRecipe;
              for (let i = 0; i < ingredientList.length; i++) {
                let currentId = ingredientList[i].Ingredient.id;
                let currentInventory = ingredientList[i].Ingredient.ingredient_inventory;
                db.Ingredient.update( 
                  {
                    ingredient_inventory: currentInventory - 1
                  }, {
                    where: {
                      id: currentId
                    }
                  }).then( (dbIngredient) => {
                    console.log('updated ingredient inventory:', dbIngredient);
                  });
              }
              response.json(newPurchaseRecord);
            });    
          });    
      });
    });
  });

  // "RESTOCK" an Ingredient
  app.put('/api/restock/:ingredient_id', (request, response) => {
    // get the ingredient information
    let ingredient_id = request.params.ingredient_id;
    console.log('restocking ingredient id', ingredient_id);
    db.Ingredient.findAll({ where: { id: request.params.ingredient_id } }).then((dbIngredient) => {
      let currIngredient = dbIngredient[0];
      let ingredient_capacity = currIngredient.ingredient_capacity;
      let ingredient_inventory = currIngredient.ingredient_inventory;
      let ingredient_restock_amount = currIngredient.ingredient_restock_amount;
      let ingredient_restock_price = currIngredient.ingredient_restock_price;
      // check if restock possible (capactiy > inventory + restock amount)
      if (ingredient_capacity > ingredient_inventory + ingredient_restock_amount) {
        console.log('restock possible');
        // ingredient can be restocked
        // add restock 
        let restockRecord = {
          restock_cost: ingredient_restock_price,
          IngredientId: ingredient_id
        }
        db.Restock.create(restockRecord).then( (dbRestock) => {
          // add amount to inventory
          let new_inventory = ingredient_inventory + ingredient_restock_amount;
          console.log('new inventory level', new_inventory);
          db.Ingredient.update(
            {
              ingredient_inventory: new_inventory
            }, {
              where: {
                id: ingredient_id
              }
            }).then( (dbIngredient) => {
              response.json(dbIngredient);
          });
        });
      } 
    });
  });
};