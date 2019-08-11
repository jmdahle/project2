$(document).ready(() => {
    // document event listeners
    $(document).on('click', '#load-ingredients', loadIngredients);
    $(document).on('click', '#load-smothiis', loadSmothiis);
    $(document).on('click', '#load-recipes', loadRecipes);
    
    // seeds array of recipes
    let recipeSeeds = [
        {
            recipe_amount: 1,
            smothiiid: 1,
            ingredientid: 1
        },
        {
            recipe_amount: 1,
            smothiiid: 1,
            ingredientid: 2
        },
        {
            recipe_amount: 1,
            smothiiid: 1,
            ingredientid: 20
        },
        {
            recipe_amount: 1,
            smothiiid: 2,
            ingredientid: 5
        },
        {
            recipe_amount: 1,
            smothiiid: 2,
            ingredientid: 6
        },
        {
            recipe_amount: 1,
            smothiiid: 2,
            ingredientid: 22
        },
        {
            recipe_amount: 1,
            smothiiid: 3,
            ingredientid: 7
        },
        {
            recipe_amount: 1,
            smothiiid: 3,
            ingredientid: 11
        },
        {
            recipe_amount: 1,
            smothiiid: 3,
            ingredientid: 21
        },
        {
            recipe_amount: 1,
            smothiiid: 4,
            ingredientid: 10
        },
        {
            recipe_amount: 1,
            smothiiid: 4,
            ingredientid: 12
        },
        {
            recipe_amount: 1,
            smothiiid: 4,
            ingredientid: 17
        }
    ];

    // seeds array of smothiis
    let smothiiSeeds = [
        {
            smothii_name: 'Smothii A',
            smothii_description: 'Smothii is Always the best',
            smothii_creator: 'Smothii Central',
            smothii_image_url: '/images/smothiis/1.png',
            smothii_category: 'fruit'
        },
        {
            smothii_name: 'Smothii B',
            smothii_description: 'Smothii is Better than the best',
            smothii_creator: 'Smothii Central',
            smothii_image_url: '/images/smothiis/2.png',
            smothii_category: 'fruit'
        },
        {
            smothii_name: 'Smothii C',
            smothii_description: 'Smothii is Clearly the best',
            smothii_creator: 'Smothii Central',
            smothii_image_url: '/images/smothiis/3.png',
            smothii_category: 'vege'
        },
        {
            smothii_name: 'Smothii D',
            smothii_description: 'Smothii is a Damn sight better than the best',
            smothii_creator: 'Smothii Central',
            smothii_image_url: '/images/smothiis/4.png',
            smothii_category: 'vege'
        }
    ];
    // seeds array of ingredients
    let ingredientSeeds = [
        {
            fruitLetter: 'a',
            name: 'Strawberry',
            unit: '0.25 cup',
            inventory: 20,
            capacity: 30,
            restock_amount: 10,
            restock_price: 4.99,
            text: 'Delicious fruit',
            image: '/images/sample-ingredient.jpg'
        },
        {
            fruitLetter: 'b',
            name: 'Banana',
            unit: '0.25 cup',
            inventory: 20,
            capacity: 30,
            restock_amount: 10,
            restock_price: 4.99,
            text: 'Delicious fruit',
            image: '/images/sample-ingredient.jpg'
        },
        {
            fruitLetter: 'c',
            name: 'Coconut',
            unit: '0.25 cup',
            inventory: 20,
            capacity: 30,
            restock_amount: 10,
            restock_price: 4.99,
            text: 'Delicious fruit',
            image: '/images/sample-ingredient.jpg'
        },
        {
            fruitLetter: 'd',
            name: 'Blueberry',
            unit: '0.25 cup',
            inventory: 20,
            capacity: 30,
            restock_amount: 10,
            restock_price: 4.99,
            text: 'Delicious fruit',
            image: '/images/sample-ingredient.jpg'
        },
        {
            fruitLetter: 'e',
            name: 'Pineapple',
            unit: '0.25 cup',
            inventory: 20,
            capacity: 30,
            restock_amount: 10,
            restock_price: 4.99,
            text: 'Delicious fruit',
            image: '/images/sample-ingredient.jpg'
        },
        {
            fruitLetter: 'f',
            name: 'Peach',
            unit: '0.25 cup',
            inventory: 20,
            capacity: 30,
            restock_amount: 10,
            restock_price: 4.99,
            text: 'Delicious fruit',
            image: '/images/sample-ingredient.jpg'
        },
        {
            fruitLetter: 'g',
            name: 'Avocado',
            unit: '0.25 cup',
            inventory: 20,
            capacity: 30,
            restock_amount: 10,
            restock_price: 4.99,
            text: 'Delicious fruit',
            image: '/images/sample-ingredient.jpg'
        },
        {
            fruitLetter: 'h',
            name: 'Mango',
            unit: '0.25 cup',
            inventory: 20,
            capacity: 30,
            restock_amount: 10,
            restock_price: 4.99,
            text: 'Delicious fruit',
            image: '/images/sample-ingredient.jpg'
        },
        {
            fruitLetter: 'i',
            name: 'Apple',
            unit: '0.25 cup',
            inventory: 20,
            capacity: 30,
            restock_amount: 10,
            restock_price: 4.99,
            text: 'Delicious fruit',
            image: '/images/sample-ingredient.jpg'
        },
        {
            fruitLetter: 'j',
            name: 'Kale',
            unit: '0.25 cup',
            inventory: 10,
            capacity: 20,
            restock_amount: 10,
            restock_price: 5.99,
            text: 'Savory, fresh vegetables',
            image: '/images/sample-ingredient.jpg'
        },
        {
            fruitLetter: 'k',
            name: 'Spinach',
            unit: '0.25 cup',
            inventory: 10,
            capacity: 20,
            restock_amount: 10,
            restock_price: 5.99,
            text: 'Savory, fresh vegetables',
            image: '/images/sample-ingredient.jpg'
        },
        {
            fruitLetter: 'l',
            name: 'Carrot',
            unit: '0.25 cup',
            inventory: 10,
            capacity: 20,
            restock_amount: 10,
            restock_price: 5.99,
            text: 'Savory, fresh vegetables',
            image: '/images/sample-ingredient.jpg'
        },
        {
            fruitLetter: 'm',
            name: 'Romaine Lettuce',
            unit: '0.25 cup',
            inventory: 10,
            capacity: 20,
            restock_amount: 10,
            restock_price: 5.99,
            text: 'Savory, fresh vegetables',
            image: '/images/sample-ingredient.jpg'
        },
        {
            fruitLetter: 'n',
            name: 'Collards',
            unit: '0.25 cup',
            inventory: 10,
            capacity: 20,
            restock_amount: 10,
            restock_price: 5.99,
            text: 'Savory, fresh vegetables',
            image: '/images/sample-ingredient.jpg'
        },
        {
            fruitLetter: 'o',
            name: 'Swiss Chards',
            unit: '0.25 cup',
            inventory: 10,
            capacity: 20,
            restock_amount: 10,
            restock_price: 5.99,
            text: 'Savory, fresh vegetables',
            image: '/images/sample-ingredient.jpg'
        },        
        {
            fruitLetter: 'p',
            name: 'Milk',
            unit: '1 cup',
            inventory: 15,
            capacity: 30,
            restock_amount: 10,
            restock_price: 7.99,
            text: 'Yummy base for your smothii',
            image: '/images/sample-ingredient.jpg'
        },
        {
            fruitLetter: 'q',
            name: 'Water/Ice',
            unit: '1 cup',
            inventory: 15,
            capacity: 30,
            restock_amount: 10,
            restock_price: 7.99,
            text: 'Yummy base for your smothii',
            image: '/images/sample-ingredient.jpg'
        },
        {
            fruitLetter: 'r',
            name: 'Yogurt',
            unit: '1 cup',
            inventory: 15,
            capacity: 30,
            restock_amount: 10,
            restock_price: 7.99,
            text: 'Yummy base for your smothii',
            image: '/images/sample-ingredient.jpg'
        },
        {
            fruitLetter: 's',
            name: 'Ice Cream',
            unit: '1 cup',
            inventory: 15,
            capacity: 30,
            restock_amount: 10,
            restock_price: 7.99,
            text: 'Yummy base for your smothii',
            image: '/images/sample-ingredient.jpg'
        },
        {
            fruitLetter: 't',
            name: 'Coconut Milk',
            unit: '1 cup',
            inventory: 15,
            capacity: 30,
            restock_amount: 10,
            restock_price: 7.99,
            text: 'Yummy base for your smothii',
            image: '/images/sample-ingredient.jpg'
        },
        {
            fruitLetter: 'u',
            name: 'Almond Milk',
            unit: '1 cup',
            inventory: 15,
            capacity: 30,
            restock_amount: 10,
            restock_price: 7.99,
            text: 'Yummy base for your smothii',
            image: '/images/sample-ingredient.jpg'
        },
        {
            fruitLetter: 'v',
            name: 'Oat Milk',
            unit: '1 cup',
            inventory: 15,
            capacity: 30,
            restock_amount: 10,
            restock_price: 7.99,
            text: 'Yummy base for your smothii',
            image: '/images/sample-ingredient.jpg'
        }
    ];

    function loadIngredients() {
        console.log('adding ingredients');
        // loop through seeds and add each one
        for (let i = 0; i < ingredientSeeds.length; i++) {
            console.log(ingredientSeeds[i]);
            let newIngredient = {
                fruitLetter: ingredientSeeds[i].fruitLetter,
                ingredient_name: ingredientSeeds[i].name,
                ingredient_description: ingredientSeeds[i].text,
                ingredient_unit: ingredientSeeds[i].unit,
                ingredient_inventory: ingredientSeeds[i].inventory,
                ingredient_image_url: ingredientSeeds[i].image,
                ingredient_capacity: ingredientSeeds[i].capacity,
                ingredient_restock_amount: ingredientSeeds[i].restock_amount,
                ingredient_restock_price: ingredientSeeds[i].restock_price
            }
            $.post('/api/add/ingredient', newIngredient);
            console.log('added', i, newIngredient.ingredient_name);
        }
    }

    function loadSmothiis() {
        console.log('adding smoothis');
        // loop through seeds and add each one
        for (let i = 0; i < smothiiSeeds.length; i++) {
            console.log(smothiiSeeds[i]);
            let newSmothii = {
                smothii_name: smothiiSeeds[i].smothii_name,
                smothii_description: smothiiSeeds[i].smothii_description,
                smothii_creator: smothiiSeeds[i].smothii_creator,
                smothii_image_url: smothiiSeeds[i].smothii_image_url,
                smothii_category: smothiiSeeds[i].smothii_category
            }
            $.post('/api/add/smothii', newSmothii);
            console.log('added', i, newSmothii.smothii_name);
        }
    }

    function loadRecipes() {
        console.log('adding recipes');
        // loop through seed and add each one
        for (i = 0; i < recipeSeeds.length; i++) {
            console.log(recipeSeeds[i]);
            let newRecipe = {
                recipe_amount: recipeSeeds[i].recipe_amount,
                SmothiiId: recipeSeeds[i].smothiiid,
                IngredientId: recipeSeeds[i].ingredientid
            }
            $.post('/api/add/recipe', newRecipe);
            console.log('added', i);
        }
    }
});