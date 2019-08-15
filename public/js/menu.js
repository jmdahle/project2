$(document).ready(() => {

    function clearAll() {
        $('#smoothieRecipes').empty();
    }

    $("#fruitButton").on("click", function (event) {
        event.preventDefault();
        clearAll()
        $.get('/api/smothii/fruit', (dbFruits) => {
            var fruits = dbFruits;
            for (var i = 0; i < fruits.length; i++) {
                var smoothieCard = $(`<div class='d-inline-block card menuCard' style = 'width: 20rem;' data-id='${dbFruits[i].id}'>`);
                var smoothieImage = $(`<img class='card-img-top' src='${dbFruits[i].smothii_image_url}'>`);
                var smoothieBody = $(`<div class='card-body menuCard-body'>`);
                var smoothieName = $(`<h5 class='card-title menuCard-title'>${dbFruits[i].smothii_name}</h5>`);
                var smoothiePrice = $(`<p class='card-text menuCard-text'>${dbFruits[i].smothii_price}</p>`)
                $(smoothieCard).append(smoothieImage)
                $(smoothieBody).append(smoothieName)
                console.log(smoothieCard)
                $(smoothieBody).append(smoothiePrice)
                $(smoothieCard).append(smoothieBody)
                $("#smoothieRecipes").append(smoothieCard)
            }
        })
    });

    $(document).on('click', '.menuCard', openVend);

    function openVend(event) {
        console.log('working');
        var smothii_id = $(this).attr('data-id');
        window.location.replace(`/vend/${smothii_id}`);
    }

    $("#veggieButton").on("click", function (event) {
        event.preventDefault();
        clearAll()
        $.get('/api/smothii/vege', (dbVege) => {
            // each vege recipe gets added to array
            let veggies = dbVege;
            for (let i = 0; i < veggies.length; i++) {
                console.log(veggies)
                var smoothieCard = $(`<div class='d-inline-block card menuCard' style = 'width: 20rem' data-id='${veggies[i].id}'>`);
                var smoothieImage = $(`<img class='card-img-top smoothieImg' src='${veggies[i].smothii_image_url}'>`);
                $(smoothieCard).append(smoothieImage);
                console.log(smoothieImage);
                var smoothieBody = $(`<div class='card-body menuCard-body'>`);
                var smoothieName = $(`<h5 class='card-title menuCard-title'>${veggies[i].smothii_name}</h5>`);
                var smoothiePrice = $(`<p class='card-text menuCard-text'>${veggies[i].smothii_price}</p>`);
                $(smoothieBody).append(smoothieName);
                $(smoothieBody).append(smoothiePrice);
                $(smoothieCard).append(smoothieBody);
                $("#smoothieRecipes").append(smoothieCard);
            }
        })
    });

    $("#userButton").on("click", function (event) {
        event.preventDefault();
        clearAll()
        $.get('/api/smothii/user', (dbUser) => {
            // each fruit gets added to array
            let user = dbUser;
            for (let i = 0; i < user.length; i++) {
                console.log(user)
                var smoothieCard = $(`<div class='d-inline-block card menuCard' style = 'width: 20rem' data-id='${user[i].id}'>`);
                var smoothieImage = $(`<img class='card-img-top smoothieImg' src='${user[i].smothii_image_url}'>`);
                $(smoothieCard).append(smoothieImage);
                console.log(smoothieImage);
                var smoothieBody = $(`<div class='card-body menuCard-body'>`);
                var smoothieName = $(`<h5 class='card-title menuCard-title'>${user[i].smothii_name}</h5>`);
                var smoothiePrice = $(`<p class='card-text menuCard-text'>${user[i].smothii_price}</p>`);
                $(smoothieBody).append(smoothieName);
                $(smoothieBody).append(smoothiePrice);
                $(smoothieCard).append(smoothieBody);
                $("#smoothieRecipes").append(smoothieCard);
            }
        })
    });
})
