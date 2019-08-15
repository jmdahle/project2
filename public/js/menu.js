$(document).ready(() => {
    $("#fruitButton").on("click", function (event) {
        $.get('/api/smothii/fruit', (dbFruits) => {
            var fruits = dbFruits;
            for (var i = 0; i < fruits.length; i++) {

                var smoothieCard = $(`<div class='d-inline-block card menuCard' style = 'width: 20rem' data-id='${dbFruits[i].id}'>`);
                var smoothieImage = $(`<img class='card-img-top smoothieImg' src='${dbFruits[i].smothii_image_url}'>`);
                $(".menuCard").append(smoothieImage)
                console.log(smoothieImage)
                var smoothieBody = $(`<div class='card-body menuCard-body'>`);
                var smoothieName = $(`<h5 class='card-title menuCard-title'>${dbFruits[i].smothii_name}</h5>`);
                var smoothiePrice = $(`<p class='card-text menuCard-text'>${dbFruits[i].smothii_price}</p>`)
                $(".menuCard-body").append(smoothieName)
                $(".menuCard-body").append(smoothiePrice)
                $(".menuCard").append(smoothieBody)
                $("#smoothieRecipes").append(smoothieCard)


                // var smoothieCard = $(`<div class='card smothii-small' id=${dbFruits[i].id}>`)
                // // var smoothieName = $("<span>").text(dbFruits[i].smothii_name);
                // var smoothieName = $(`<h5 class='card-title'>${dbFruits[i].smothii_name}</h5>`)
                // var smoothieImage = $(`<img class='card-img-top smoothie-small-image' src=${dbFruits[i].smothii_image_url} >`);
                // let smoothiePrice = $(`<h5 class='card-body'>${dbFruits[i].smothii_price}</h5>`)
                // $(".smoothieCard").append(smoothieImage)
                // $(".smoothieCard").append(smoothieName)
                // $(".smoothieCard").append(smoothiePrice)
            }
        })
    });

    $(document).on('click', '.smothii-card', openVend);

    function openVend(event) {
        console.log('working');
        var smothii_id = $(this).attr('data-id');
        window.location.replace(`/vend/${smothii_id}`);
    }

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

