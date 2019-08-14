$(document).ready(() => {
    $(".smoothieCard").hide();
    $("#fruitButton").on("click", function (event) {
        $.get('/api/smothii/fruit', (dbFruits) => {
            // each fruit recipe gets added to array
            var fruits = dbFruits;

            



            $(".smoothieCard").show();
            for (var i = 0; i < fruits.length; i++) {

                // <div class='card smothii-small' data-smothii-id=`${smothii.id}`>
                //     <img src=`${smothii.smothii_image_url}` class='card-img-top smoothie-small-image' alt=`${smothii.smothii_name}`/>
                //     <div class='card-body'>
                //     <h5 class='card title'>`${smothii.smothii_name}`</h5>
                //     </div>
                // </div>

            
                var smoothieCard = $(`<div class='card smothii-small' id=${dbFruits[i].id}>`)
                // var smoothieName = $("<span>").text(dbFruits[i].smothii_name);
                var smoothieName = $(`<h5 class='card-title'>${dbFruits[i].smothii_name}</h5>`)
                var smoothieImage = $(`<img class='card-img-top smoothie-small-image' src=${dbFruits[i].smothii_image_url} >`);
                let smoothiePrice = $(`<h5 class='card-body'>${dbFruits[i].smothii_price}</h5>`)
                // smoothieImage.attr("src", dbFruits[i].smothii_image_url);
                // smoothieImage.attr("class='card-img-top smoothie-small-image");
                // smoothieImage.attr("style", "width:100px; height:100px")
                // smoothieName.attr(`<div class='card-title'>`);
                // smoothiePrice.attr(`<div class='card-body'>`);
                $(".smoothieCard").append(smoothieImage)
                $(".smoothieCard").append(smoothieName)
                $(".smoothieCard").append(smoothiePrice)
            }
        })
    });

    $("#card").on("click", function (event) {
        alert("Alerted");
    })
    

    // function createRecipeCard(recipe) {
    //     let recipeCard = [];
    //     smoothieCard.push(`<div class='card ingredient-select' style='width: 150px;' data-ingredient-id='${smothii.id}'>`)
    //     smoothieCard.push(`<img src='${smothii.smothii_image_url}' class='card-img-top' alt='${smothii.smothii_name}'>`);
    //     smoothieCard.push(`<div class='card-body'>`);
    //     smoothieCard.push(`<h5 class='card-title'>${smothii.smothii_name}</h5>`);
    //     smoothieCard.push(`</div>`);
    //     smoothieCard.push(`</div>`);

    //     return recipeCard;
    // }


    $("#veggieButton").on("click", function (event) {
        $.get('/api/smothii/vege', (dbVege) => {
            // each vege recipe gets added to array
            let veggies = dbVege;
            for (let i = 0; i < veggies.length; i++) {
                console.log(veggies)
            }
        })
    });

    $("#userButton").on("click", function (event) {
        $.get('/api/smothii/user', (dbUser) => {
            // each fruit gets added to array
            let userRecipes = dbUser;
            for (let i = 0; i < userRecipes.length; i++) {
                console.log(userRecipes)
            }
        })
    })
})

// function checkStock(){
// if (stock == 0){
//     <img src="public/images/outofstock" alt="outOfStock"></img>
// }
// $.post('/api/add/smothii', newSmothii);
// console.log('added', i, newSmothii.smothii_name);
// $.post('/api/add/recipe', newRecipe).then( (returnData) => {
//     console.log('added:', returnData);
// });