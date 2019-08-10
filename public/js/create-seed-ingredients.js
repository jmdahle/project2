$(document).ready(() => {
    // document event listeners
    $(document).on('click', '#load-ingredients', loadIngredients);

    // seeds array of ingredients
    let seeds = [
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
        for (let i = 0; i < seeds.length; i++) {
            console.log(seeds[i]);
            let newIngredient = {
                fruitLetter: seeds[i].fruitLetter,
                ingredient_name: seeds[i].name,
                ingredient_description: seeds[i].text,
                ingredient_unit: seeds[i].unit,
                ingredient_inventory: seeds[i].inventory,
                ingredient_image_url: seeds[i].image,
                ingredient_capacity: seeds[i].capacity,
                ingredient_restock_amount: seeds[i].restock_amount,
                ingredient_restock_price: seeds[i].restock_price
            }
            $.post('/api/add/ingredient', newIngredient);
            console.log('added', i, newIngredient.ingredient_name);
        }
    }
});