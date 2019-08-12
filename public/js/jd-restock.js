$(document).ready( () => {
  // document event listeners
  //$(document).on('click', '#btn-submit-smothii', submitNewSmothii);
  $(document).on('click', '.ingredient-restock', restockIngredient);
  $(document).on('click', '#btn-link-index', goToIndex);

  // global variables
  let ingredientArray = []; // array of ingredients 
  
  // start up
  setUpIngredientArray();

function goToIndex() {
  // Simulate an HTTP redirect:
  window.location.replace("/jd-index");
}
  function restockIngredient() {
    let ingredient_id = $(this).attr('data-ingredient-id');
    console.log('restocking ingredient id:', ingredient_id);
    $.ajax({
      method: 'PUT',
      url: `/api/restock/${ingredient_id}`
    }).then ( (dbIngredient) => {
      setUpIngredientArray();
    });
  }


  function populateIngredientRestock() {
    console.log('start population');
    for (i = 0; i < ingredientArray.length; i++) {
      console.log('updating ingredient', i);
      let currIngredient = ingredientArray[i];
      let ingredientHtmlData = createIngredientItem(currIngredient);
      let ingredientHtml = $(ingredientHtmlData.join(''));
      $('#ingredient-inventory').append(ingredientHtml);
      console.log('finished ingredient', i); 
    }
  }

  function setUpIngredientArray() {
    ingredientArray = [];
    $('#ingredient-inventory').empty();
    // get the ingredients
    $.get('/api/ingredients', (dbIngredients) => {
        // each ingredient gets added to array
        let ingredients = dbIngredients;
        for (let i=0; i<ingredients.length; i++) {
            ingredientArray.push( {
                rawData: ingredients[i],
                id: ingredients[i].id,
                ingredient_name: ingredients[i].ingredient_name,
                ingredient_description: ingredients[i].ingredient_description,
                ingredient_unit: ingredients[i].ingredient_unit,
                ingredient_image_url: ingredients[i].ingredient_image_url,
                ingredient_inventory: ingredients[i].ingredient_inventory,
                ingredient_capacity: ingredients[i].ingredient_capacity,
                ingredient_restock_amount: ingredients[i].ingredient_restock_amount,
                ingredient_restock_price: ingredients[i].ingredient_restock_price
            });
        }
        console.log('created array', ingredientArray.length)
    }).then( () => {
      populateIngredientRestock();
    });
  }


  function createIngredientItem(ingredient) {
    let ingredientItem = [];
    let ingredient_inventory = ingredient.ingredient_inventory;
    let ingredient_capacity = ingredient.ingredient_capacity;
    let ingredient_restock_amount = ingredient.ingredient_restock_amount;
    console.log('inv', ingredient_inventory, 'cap', ingredient_capacity, 'restk', ingredient_restock_amount);
    if (ingredient_capacity > ingredient_inventory + ingredient_restock_amount) {
      ingredientItem.push(`<button type='button' class='ingredient-restock' data-ingredient-id='${ingredient.id}'>Restock ${ingredient.ingredient_name}</button>`);
      ingredientItem.push(`<br>`);
      }

    return ingredientItem;
}

});