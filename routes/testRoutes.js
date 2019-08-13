var db = require('../models');

module.exports = function(app) {

  // Load menu page
  app.get('/jd-menu', (request, response) => {
    response.render('jd-menu');
  });

  // Load choose-your-own
  app.get('/jd-choose-your-own', (request, response) => {
    response.render('jd-choose-your-own');
  });

  // Load index page
  app.get('/jd-index', (request, response) => {
    response.render('jd-index');
  });

  // Load vending page
  app.get('/jd-vend/:smothii_id', (request, response) => {
    console.log('vend the smothii with id', request.params.smothii_id);
    response.render('jd-vend', {
      smothii_id: request.params.smothii_id
    });
  });

  // route for easy access to administrative functions
  app.get('/test/admin', (request, response) => {
    console.log('admin page');
    response.render('admin');
  });

  // route to html page for adding ingredient seeds
  app.get('/test/seed', (request, response) => {
    console.log('adding seed ingredients');
    response.render('admin-seeds');
  });
  
  // route to html form for adding smothii
  app.get('/test/add/smothii', function(req, res) {
    console.log('test add smothii');
    res.render('example-add-smothii');
  });

  // route to table showing all smothiis
  app.get('/test/view/smothiis', (request, response) => {
    console.log('test view all smothies');
    response.render('example-view-smothiis');
  });

  // route to create-my-own smothii
  app.get('/test/create-my-own', (request, response) => {
    console.log('test create-my-own');
    response.render('example-create-my-own');
  });

  // route to choose-your-own smothii
  app.get('/test/jd-choose-your-own', (request, response) => {
    console.log('test jd-choose-your-own');
    response.render('jd-choose-your-own');
  });

  app.get('/test/api/ingredient-list/:smothii_id',  (request, response) => {
    // update all smothiis to unavailable
    let smothii_id = request.params.smothii_id;
    let sql = `select smothii_name, ingredient_name, recipe_amount, ingredient_inventory, (ingredient_inventory - recipe_amount) > 0 as smothii_status, (ingredient_restock_price/ingredient_restock_amount) as ingredient_unit_price, recipe_amount * (ingredient_restock_price/ingredient_restock_amount) as ingredient_cost from Smothiis inner join Recipes on Smothiis.id = Recipes.SmothiiId inner join Ingredients on Recipes.IngredientId = Ingredients.id where Smothiis.id = ${smothii_id};`;
    db.sequelize.query(sql, { type: db.sequelize.QueryTypes.SELECT }).then( (dbResults) => {
      response.json(dbResults);
    });
  });

  app.get('/test/api/cost/:smothii_id', (request, response) => {
    let smothii_id = request.params.smothii_id;
    let sql = `select Smothiis.id as ID, smothii_name, smothii_description, smothii_creator, sum(recipe_amount * (ingredient_restock_price/ingredient_restock_amount)) as total_ingredient_cost, sum(recipe_amount * (ingredient_restock_price/ingredient_restock_amount)) * 1.5 as price from Smothiis inner join Recipes on Smothiis.id = Recipes.SmothiiId inner join Ingredients on Recipes.IngredientId = Ingredients.id where Smothiis.id = ${smothii_id} group by Smothiis.id;`;
    db.sequelize.query(sql, { type: db.sequelize.QueryTypes.SELECT }).then( (dbResults) => {
      response.json(dbResults);
    });
  });

  app.get('/test/jd-manage', (request,response) => {
    response.render('jd-manage');
  });

  app.get('/test/api/low-inventory', (request, response) => {
    let sql ='SELECT id, ingredient_name, ingredient_inventory, ingredient_capacity, ingredient_restock_amount, ingredient_restock_price FROM Ingredients WHERE ingredient_inventory < 10 ORDER BY ingredient_inventory DESC';
    db.sequelize.query(sql, { type: db.sequelize.QueryTypes.SELECT }).then(
      (dbIngredient) => {
        response.json(dbIngredient);
    });
  });

};
