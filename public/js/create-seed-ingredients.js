$(document).ready(() => {
    // document event listeners
    $(document).on('click', '#load-ingredients', loadIngredients);

    // seeds array of ingredients
    let seeds = [
        {
            name: "avocado",
            unit: '0.25 cups',
            inventory: 40,
            capacity: 60,
            restock_amount: 20,
            restock_price: 30,
            text: "avocado is good for whatever",
            image: "/image/placeholder.jpeg"
        },
        {
            name: "strawberry",
            unit: '0.25 cups',
            inventory: 40,
            capacity: 60,
            restock_amount: 20,
            restock_price: 10,
            text: "strawberry is good for whatever",
            image: "/image/placeholder.jpeg"
        },
        {
            name: "spinach",
            unit: '0.25 cups',
            inventory: 40,
            capacity: 60,
            restock_amount: 20,
            restock_price: 5,
            text: "spinach is good for whatever",
            image: "/image/placeholder.jpeg"
        },
        {
            name: "pineapple",
            unit: '0.25 cups',
            inventory: 40,
            capacity: 60,
            restock_amount: 20,
            restock_price: 10,
            text: "pineapple is good for whatever",
            image: "/image/placeholder.jpeg"
        },
        {
            name: "coconut",
            unit: '0.25 cups',
            inventory: 40,
            capacity: 60,
            restock_amount: 20,
            restock_price: 15,
            text: "coconut is good for whatever",
            image: "/image/placeholder.jpeg"
        }
    ];

    function loadIngredients() {

        // loop through seeds and add each one
        for (let i = 0; i < seeds.length; i++) {
            let newIngredient = {
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