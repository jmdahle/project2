$(document).ready(() => {

    $("#fruitButton").on("click", function (event) {
        console.log("animal")
        let smothii_id = $('#smothii-id').attr('data-smothii-event');
        console.log('smothii_id', smothii_id);
    });

    $("#veggieButton").on("click", function (event) {
        console.log("animal")
    });

    $("#userButton").on("click", function (event) {
        console.log("animal")
        console.log(event)
    })
});

// smoothii_category == fruit
// vege

// function loadSmothiis() {
//     console.log('adding smoothis');
//     // loop through seeds and add each one
//     for (let i = 0; i < smothiiSeeds.length; i++) {
//         console.log(smothiiSeeds[i]);
//         let newSmothii = {
//             smothii_name: smothiiSeeds[i].smothii_name,
//             smothii_description: smothiiSeeds[i].smothii_description,
//             smothii_creator: smothiiSeeds[i].smothii_creator,
//             smothii_image_url: smothiiSeeds[i].smothii_image_url,
//             smothii_category: smothiiSeeds[i].smothii_category
//         }
//         $.post('/api/add/smothii', newSmothii);
//         console.log('added', i, newSmothii.smothii_name);
//     }
// }


// function checkStock(){
// if (stock == 0){
//     <img src="public/images/outofstock" alt="outOfStock"></img>
// }
