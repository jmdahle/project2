var db = require('../models');

module.exports = function(app) {
  // route to html page for adding ingredient seeds
  app.get('/test/seed/ingredients', (request, response) => {
    console.log('adding seed ingredients');
    response.render('example-seed-ingredients');
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

  app.get('/test/api/ingredient-list/:smothii_id',  (request, response) => {
    // update all smothiis to unavailable
    let smothii_id = request.params.smothii_id;
    let sql = `select smothii_name, ingredient_name, recipe_amount, ingredient_inventory, (ingredient_inventory - recipe_amount) > 0 as smothii_status, (ingredient_restock_price/ingredient_restock_amount) as ingredient_unit_price, recipe_amount * (ingredient_restock_price/ingredient_restock_amount) as ingredient_cost from smothiis inner join recipes on smothiis.id = recipes.smothiiid inner join ingredients on recipes.ingredientid = ingredients.id where Smothiis.id = ${smothii_id};`;
    db.sequelize.query(sql, { type: db.sequelize.QueryTypes.SELECT }).then( (dbResults) => {
      response.json(dbResults);
    });
  });

  app.get('/test/api/cost/:smothii_id', (request, response) => {
    let smothii_id = request.params.smothii_id;
    let sql = `select Smothiis.id as ID, smothii_name, smothii_description, smothii_creator, sum(recipe_amount * (ingredient_restock_price/ingredient_restock_amount)) as total_ingredient_cost, sum(recipe_amount * (ingredient_restock_price/ingredient_restock_amount)) * 1.5 as price from smothiis inner join recipes on smothiis.id = recipes.smothiiid inner join ingredients on recipes.ingredientid = ingredients.id where Smothiis.id = ${smothii_id} group by Smothiis.id;`;
    db.sequelize.query(sql, { type: db.sequelize.QueryTypes.SELECT }).then( (dbResults) => {
      response.json(dbResults);
    });
  });


  // Load example page and pass in an example by id
//   app.get("/example/:id", function(req, res) {
//     db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.render("example", {
//         example: dbExample
//       });
//     });
//   });


};
