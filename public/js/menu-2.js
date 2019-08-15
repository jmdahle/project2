$(document).ready( () => {
    // document events we need to handle
    $(document).on('click', '#allButton', allClick);
    $(document).on('click', '#fruitButton', fbClick);
    $(document).on('click', '#veggieButton', vbClick);
    $(document).on('click', '#userButton', userClick);
    $(document).on('click', '.menuCard', openVend);


    function openVend(event) {
        console.log('working');
        var smothii_id = $(this).attr('data-id');
        window.location.replace(`/vend/${smothii_id}`);
    }


    function clearAll() {
        $('#smoothieRecipes').empty();
    }

    function allClick(event) {
        event.preventDefault();
        clearAll()
        console.log('clicked all button');
        $.get('/api/smothiis', (dbAll) => {
            var all = dbAll;
            for (var i = 0; i < all.length; i++) {
                var smoothieCard = $(`<div class='d-inline-block card menuCard' style = 'width: 18rem' data-id='${all[i].id}'>`);
                var smoothieImage = $(`<img class='card-img-top smoothieImg' src='${all[i].smothii_image_url}'>`);
                $(smoothieCard).append(smoothieImage);
                console.log(smoothieImage);
                var smoothieBody = $(`<div class='card-body menuCard-body'>`);
                var smoothieName = $(`<h5 class='card-title menuCard-title'>${all[i].smothii_name}</h5>`);
                var smoothiePrice = $(`<p class='card-text menuCard-text'>${all[i].smothii_price}</p>`);
                $(smoothieBody).append(smoothieName);
                $(smoothieBody).append(smoothiePrice);
                $(smoothieCard).append(smoothieBody);
                if (all[i].smothii_available) {
                    $("#smoothieRecipes").append(smoothieCard);
                }
            }
        });
    }

    function fbClick(event) {
        event.preventDefault();
        clearAll()
        console.log('clicked fruit button');
        $.get('/api/smothii/fruit', (dbFruits) => {
            var fruits = dbFruits;
            for (var i = 0; i < fruits.length; i++) {
                var smoothieCard = $(`<div class='d-inline-block card menuCard' style = 'width: 18rem' data-id='${fruits[i].id}'>`);
                var smoothieImage = $(`<img class='card-img-top smoothieImg' src='${fruits[i].smothii_image_url}'>`);
                $(smoothieCard).append(smoothieImage);
                console.log(smoothieImage);
                var smoothieBody = $(`<div class='card-body menuCard-body'>`);
                var smoothieName = $(`<h5 class='card-title menuCard-title'>${fruits[i].smothii_name}</h5>`);
                var smoothiePrice = $(`<p class='card-text menuCard-text'>${fruits[i].smothii_price}</p>`);
                $(smoothieBody).append(smoothieName);
                $(smoothieBody).append(smoothiePrice);
                $(smoothieCard).append(smoothieBody);
                if (fruits[i].smothii_available) {
                    $("#smoothieRecipes").append(smoothieCard);
                }
            }
        });
    }

    function vbClick(event) {
        event.preventDefault();
        clearAll()
        console.log('clicked veggie button');
        $.get('/api/smothii/vege', (dbVeggies) => {
            var veggies = dbVeggies;
            for (var i = 0; i < veggies.length; i++) {
                var smoothieCard = $(`<div class='d-inline-block card menuCard' style = 'width: 18rem' data-id='${veggies[i].id}'>`);
                var smoothieImage = $(`<img class='card-img-top smoothieImg' src='${veggies[i].smothii_image_url}'>`);
                $(smoothieCard).append(smoothieImage);
                console.log(smoothieImage);
                var smoothieBody = $(`<div class='card-body menuCard-body'>`);
                var smoothieName = $(`<h5 class='card-title menuCard-title'>${veggies[i].smothii_name}</h5>`);
                var smoothiePrice = $(`<p class='card-text menuCard-text'>${veggies[i].smothii_price}</p>`);
                $(smoothieBody).append(smoothieName);
                $(smoothieBody).append(smoothiePrice);
                $(smoothieCard).append(smoothieBody);
                if (veggies[i].smothii_available) {
                    $("#smoothieRecipes").append(smoothieCard);
                }
            }
        });
    }

    function userClick(event) {
        event.preventDefault();
        clearAll()
        console.log('clicked user button');
        $.get('/api/smothii/user', (dbUser) => {
            var user = dbUser;
            for (var i = 0; i < user.length; i++) {
                var smoothieCard = $(`<div class='d-inline-block card menuCard' style = 'width: 18rem' data-id='${user[i].id}'>`);
                var smoothieImage = $(`<img class='card-img-top smoothieImg' src='${user[i].smothii_image_url}'>`);
                $(smoothieCard).append(smoothieImage);
                console.log(smoothieImage);
                var smoothieBody = $(`<div class='card-body menuCard-body'>`);
                var smoothieName = $(`<h5 class='card-title menuCard-title'>${user[i].smothii_name}</h5>`);
                var smoothiePrice = $(`<p class='card-text menuCard-text'>${user[i].smothii_price}</p>`);
                $(smoothieBody).append(smoothieName);
                $(smoothieBody).append(smoothiePrice);
                $(smoothieCard).append(smoothieBody);
                if (user[i].smothii_available) {
                    $("#smoothieRecipes").append(smoothieCard);
                }
            }
        });
    }
});