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
            ingredientid: 4
        },
        {
            recipe_amount: 1,
            smothiiid: 1,
            ingredientid: 19
        },
        {
            recipe_amount: 1,
            smothiiid: 2,
            ingredientid: 4
        },
        {
            recipe_amount: 1,
            smothiiid: 2,
            ingredientid: 6
        },
        {
            recipe_amount: 1,
            smothiiid: 2,
            ingredientid: 16
        },
        {
            recipe_amount: 1,
            smothiiid: 3,
            ingredientid: 10
        },
        {
            recipe_amount: 1,
            smothiiid: 3,
            ingredientid: 11
        },
        {
            recipe_amount: 1,
            smothiiid: 3,
            ingredientid: 20
        },
        {
            recipe_amount: 1,
            smothiiid: 4,
            ingredientid: 9
        },
        {
            recipe_amount: 1,
            smothiiid: 4,
            ingredientid: 12
        },
        {
            recipe_amount: 1,
            smothiiid: 4,
            ingredientid: 15
        }
    ];

    // seeds array of smothiis
    let smothiiSeeds = [
        {
            smothii_name: 'Berry Hipster',
            smothii_description: 'A modern twist on a classic',
            smothii_creator: 'Smothii Central',
            smothii_image_url: '/images/smothiis/8.png',
            smothii_category: 'fruit'
        },
        {
            smothii_name: 'South American',
            smothii_description: 'Peach mango and greek yogurt',
            smothii_creator: 'Smothii Central',
            smothii_image_url: '/images/smothiis/3.png',
            smothii_category: 'fruit'
        },
        {
            smothii_name: 'Green Machine',
            smothii_description: 'Kale, spinach and coconut milk',
            smothii_creator: 'Smothii Central',
            smothii_image_url: '/images/smothiis/1.png',
            smothii_category: 'vege'
        },
        {
            smothii_name: 'Salad Smothii',
            smothii_description: 'Apple lettuce and ice water',
            smothii_creator: 'Smothii Central',
            smothii_image_url: '/images/smothiis/7.png',
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
            image: '/images/individual_ingredients/fruits/strawberry.jpg'
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
            image: '/images/individual_ingredients/fruits/banana.jpg'
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
            image: '/images/individual_ingredients/fruits/coconut.jpg'
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
            image: '/images/individual_ingredients/fruits/blueberry.jpg'
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
            image: '/images/individual_ingredients/fruits/pineapple.jpeg'
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
            image: '/images/individual_ingredients/fruits/peach.jpg'
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
            image: '/images/individual_ingredients/fruits/avocado.jpg'
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
            image: '/images/individual_ingredients/fruits/mango.jpg'
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
            image: '/images/individual_ingredients/fruits/apple.jpg'
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
            image: '/images/individual_ingredients/greens/kale.png'
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
            image: '/images/individual_ingredients/greens/spinach.png'
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
            image: '/images/individual_ingredients/greens/romaineLettuce.png'
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
            image: '/images/individual_ingredients/greens/collardGreens.png'
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
            image: '/images/individual_ingredients/greens/swissChard.png'
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
            image: '/images/individual_ingredients/bases/ice.png'
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
            image: '/images/individual_ingredients/bases/yogurt.png'
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
            image: '/images/individual_ingredients/bases/iceCream.png'
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
            image: '/images/individual_ingredients/bases/coconutMilk.png'
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
            image: '/images/individual_ingredients/bases/almondMilk.png'
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
            image: '/images/individual_ingredients/bases/oatMilk.png'
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