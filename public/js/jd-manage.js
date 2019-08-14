$(document).ready( () => {
    // document event listeners
    $(document).on('click', '.ingredient-restock', restockIngredient);

    // global variable
    let ingredientArray = [];

    setUpIngredientArray();

    function setUpIngredientArray() {
        ingredientArray = [];
        $('#info-low-inventory').empty();
        // get the ingredients
        $.get('/test/api/low-inventory', (dbIngredients) => {
            // each ingredient gets added to array
            let ingredients = dbIngredients;
            console.log(ingredients);
            for (let i=0; i<ingredients.length; i++) {
                ingredientArray.push( {
                    rawData: ingredients[i],
                    id: ingredients[i].id,
                    ingredient_name: ingredients[i].ingredient_name,
                    ingredient_inventory: ingredients[i].ingredient_inventory ,
                    ingredient_capacity: ingredients[i].ingredient_capacity,
                    ingredient_restock_amount: ingredients[i].ingredient_restock_amount,
                    ingredient_restock_price: ingredients[i].ingredient_restock_price  
                });
            }
            console.log('created array', ingredientArray.length)
        }).then( () => {
          populateLowInventory();
        });
    }

    function populateLowInventory() {
        for (i = 0; i < ingredientArray.length; i++) {
          console.log('updating ingredient', i);
          let currIngredient = ingredientArray[i];
          let ingredientHtmlData = createIngredientItem(currIngredient);
          let ingredientHtml = $(ingredientHtmlData.join(''));
          $('#info-low-inventory').append(ingredientHtml);
          console.log('finished ingredient', i); 
        }
    }
    
    function createIngredientItem(ingredient) {
        let ingredientItem = [];
        let ingredient_name = ingredient.ingredient_name;
        let ingredient_inventory = ingredient.ingredient_inventory;
        let ingredient_capacity = ingredient.ingredient_capacity;
        let ingredient_restock_amount = ingredient.ingredient_restock_amount;
        let ingredient_restock_price = ingredient.ingredient_restock_price
        console.log('inv', ingredient_inventory, 'cap', ingredient_capacity, 'restk', ingredient_restock_amount);
        // restock button
        if (ingredient_capacity > ingredient_inventory + ingredient_restock_amount) {
          ingredientItem.push(`<a class='ingredient-restock' data-ingredient-id='${ingredient.id}'>Restock ${ingredient.ingredient_name}</a>`);
          } else {
            //disabled button
            ingredientItem.push(`<a class='ingredient-restock' data-ingredient-id='${ingredient.id}' disabled>Restock ${ingredient.ingredient_restock_amount}</a>`);
          }
          ingredientItem.push(`<span> ${ingredient_name} (inventory: ${ingredient_inventory})</span`);
          ingredientItem.push(`<br>`);
    
        return ingredientItem;
    }
    
    function restockIngredient() {
        let ingredient_id = $(this).attr('data-ingredient-id');
        console.log('restocking ingredient id:', ingredient_id);
        $.ajax({
            method: 'PUT',
            url: `/api/restock/${ingredient_id}`
        }).then ( (dbIngredient) => {
            console.log(dbIngredient);
            setUpIngredientArray();
        });
      }
    

});