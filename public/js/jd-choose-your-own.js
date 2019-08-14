$(document).ready ( () => {
    // document event listeners
    $(document).on('click', '#btn-submit-smothii', submitNewSmothii);
    $(document).on('click', '#btn-cancel-smothii', closeRecipeCard);
    $(document).on('click', '#btn-error-ok', closeErrorModal);
    $(document).on('click', '#go-left', goLeft);
    $(document).on('click', '#go-right', goRight);
    $(document).on('dblclick', '.ingredient-select', addIngredient)
    $(document).on('click', '#btn-submit-recipe', submitRecipe);
    $(document).on('click', '#btn-right-smothii-image', changeSmothiiImage);
    $(document).on('click', '#btn-reset-recipe', resetRecipe);


    // global variables
    let ingredientArray = []; // array of ingredients that have not been selected
    let startIngredient = 0; // start index for ingredient list
    let numSelected = 0;
    let newSmothiiId = 0;
    
    // start up
    setUpIngredientArray();
    showSmothiiCard('Custom Smothii');
    closeRecipeCard();

    function changeSmothiiImage() {
        let currImageIndex = parseInt($('#new-smothii').attr('data-smothii-image-index'));
        currImageIndex ++;
        if (currImageIndex > 9) {
            currImageIndex = 1;
        }
        $('#new-smothii').attr('data-smothii-image-index', currImageIndex);
        $('#new-smothii').attr('style', `background: url(/images/smothiis/${currImageIndex}.png`);
    }

    function submitNewSmothii() {
        // collect newRecord data
        let currImageIndex = parseInt($('#new-smothii').attr('data-smothii-image-index'));
        let image = `/images/smothiis/${currImageIndex}.png`
        let newRecord = {
            smothii_name: $('#smothii-name').val().trim(),
            smothii_description: $('#smothii-description').val().trim(),
            smothii_creator: $('#smothii-creator').val().trim(),
            smothii_image_url: image
        }
        // validate input
        let inputValid = false
        // check that required fields have length
        if (
                (newRecord.smothii_name.length > 0) &&
                (newRecord.smothii_description.length > 0) &&
                (newRecord.smothii_creator.length > 0)
            ) {
            inputValid = true;
        }

        if (inputValid) {
            // submit new record through api
            $.post('/api/add/smothii', newRecord).then( (returnData) => {
                console.log('Added:', returnData);
                newSmothiiId = returnData.id;
                // console.log('new smothii id is', newSmothiiId);
            }).then( () => {
                // close Smothii and open Recipe
                closeSmothiiCard();
                showRecipeCard('Custom Recipe');
            });
        } else {
            // warn of error
            showErrorModal('All fields are required');
        }
    }

    function resetRecipe() {
        console.log('reset recipe');
        for (i = 0; i < ingredientArray.length; i++) {
            ingredientArray[i].ingredient_selected = false;
        }
        numSelected = 0;
        populateIngredientChoices(0);
        closeRecipeButton();
    }

    function submitRecipe() {
        // loop through ingredients and send selected ones
        for (let i = 0; i< ingredientArray.length; i++) {
            if (ingredientArray[i].ingredient_selected) {
                console.log('ingredient selected', ingredientArray[i].ingredient_name);
                // collect newRecipe data
                let newRecipe = {
                    recipe_amount: 1,
                    SmothiiId: newSmothiiId, // from just made smothii
                    IngredientId: ingredientArray[i].id
                }
                // submit newRecipe through api
                console.log('adding', newRecipe);
                $.post('/api/add/recipe', newRecipe).then( (returnData) => {
                    console.log('added:', returnData);
                });
            }
        }
        console.log('done adding smothii; ready to vend');
        // Simulate an HTTP redirect:
        window.location.replace(`/jd-vend/${newSmothiiId}`);
    }

    function showErrorModal(message) {
        $('#error-message').text(message);
        $('#modalError').show('true'); 
    }

    function closeErrorModal() {
        $('#modalError').hide();
    }

    function showSmothiiCard(title) {
        $('#new-smothii-title').text(title);
        $('#new-smothii-card').show();
    }

    function closeSmothiiCard() {
        $('#new-smothii-card').hide();
    }

    function showRecipeCard(title) {
        $('#new-recipe-title').text(title);
        if (numSelected < 3) {
            closeRecipeButton()
        } else {
            showRecipeButton();
        }
        populateIngredientChoices(startIngredient);
        $('#new-recipe-card').show();
    }

    function closeRecipeCard() {
        $('#new-recipe-card').hide();
        closeRecipeButton();
    }

    function closeRecipeButton() {
        $('#btn-submit-recipe').hide();
    }

    function showRecipeButton() {
        $('#btn-submit-recipe').show();
    }

    function addIngredient() {
        let ingredientID = $(this).attr('data-ingredient-id');
        console.log(`Selected ingredient ID #${ingredientID}`);  
        selectIngredient(ingredientID);      
    }

    function selectIngredient(ingredientID) {
        let numIndex = 0;
        for (i = 0; i < ingredientArray.length; i++) {
            if (parseInt(ingredientArray[i].id) == parseInt(ingredientID)) {
                if (ingredientArray[i].ingredient_selected === true) {
                    ingredientArray[i].ingredient_selected = false;                        
                    numIndex = i;
                    numSelected--;
                    closeRecipeButton();
                } else {
                    if (numSelected < 3) {
                        ingredientArray[i].ingredient_selected = true;           
                        closeRecipeButton();
                        numIndex = i;
                        numSelected++;
                    } else {
                        // error - cannot choose another ingredient
                        showErrorModal('You may only select 3 ingredients')
                    }
                }   
            }
        }
        console.log(numIndex);
        if (numIndex === 0) {
            numIndex = 0
        } else {
            numIndex = numIndex -1
        }
        populateIngredientChoices(numIndex);
        // if there are 3 ingredients, you can create the recipe and purchase your smothii
        if (numSelected === 3) {
            showRecipeButton();
        }
        console.log(`${numSelected} ingredients selected`);
    }

    function populateIngredientChoices(start) {
        let max = 3;
        let count = 0;
        $('#carousel-ingredients').empty();
        $('#selected-ingredients').empty();
        let ingredientHtml = [];
        let selectedHtml = [];
        let indexNum = start;
        ingredientHtml.push(`<div class='card-deck'>`);
        //selectedHtml.push(`<div class='card-deck'>`);
        // console.log(ingredientArray.length);
        for (let i = 0; i < ingredientArray.length; i++) {
            if (i + start < ingredientArray.length) {
                indexNum = i + start;
            } else {
                indexNum = i + start - ingredientArray.length;
            }
            // console.log(i, 'indexNum',indexNum);
            let selected = ingredientArray[indexNum].ingredient_selected;
            // console.log(i, indexNum, selected, ingredientArray.length);
            if (selected) {
                selectedHtml.push(createIngredientCard(ingredientArray[indexNum]).join(''));
                selectedHtml.push('<br>');
            } else {
                if (count < max) {
                    ingredientHtml.push(createIngredientCard(ingredientArray[indexNum]).join(''));
                    count++;
                }
            }
        }
        // fill in blanks where selected < 3
        let numberOfBlanks = 3 - numSelected;
        for (let b = 0; b < numberOfBlanks; b++) {
            selectedHtml.push(createBlankIngredientCard().join(''));
        }

        ingredientHtml.push(`</div>`);
        //selectedHtml.push(`</div>`);

        //ingredientHtml.push(`<a id='go-left' class="carousel-control-prev" role="button" ><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a>`);
        //ingredientHtml.push(`<a id='go-right' class="carousel-control-next" role="button"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a>`);
        
        let ingredientItem = $(ingredientHtml.join(''));
        let selectedItem = $(selectedHtml.join(''));
    
        $('#carousel-ingredients').append(ingredientItem);
        $('#selected-ingredients').append(selectedItem);

        // for DRAG and DROP
        $('.ingredient-select').draggable({
            "containment": "#content",
            "cursor": "move",
            "stack": ".ingredient-select"
        });

        $(".dropzone").droppable({
            "accept": ".ingredient-select",
            "hoverClass": "highlight",
            "drop": function (event, ui) {
                console.log($(this));
                console.log()
                $(ui.draggable).data("q", $(this).data('q'));
                let ingredientId = $(ui.draggable).attr('data-ingredient-id');
                console.log('dropped ingredient id', ingredientId);
                selectIngredient(ingredientId);
            }
        });
    }

    function createIngredientCard(ingredient) {
        let ingredientCard = [];
        ingredientCard.push(`<div class='card ingredient-select' style='width: 175px' data-ingredient-id='${ingredient.id}'>`)
        // ingredientCard.push(`<p style='height: 145px'><img src='${ingredient.ingredient_image_url}' class='card-img-top' alt='${ingredient.ingredient_name}'></p>`);
        ingredientCard.push(`<div class='card-body'>`);
        ingredientCard.push(`<p class='card-title sm-text'>${ingredient.ingredient_name}</p>`);
        ingredientCard.push(`<img src='${ingredient.ingredient_image_url}' class='card-img-top' alt='${ingredient.ingredient_name}'>`);
        //ingredientCard.push(`<p class='card-text'>${ingredient.ingredient_description}</p>`);
        ingredientCard.push(`</div>`);
        ingredientCard.push(`</div>`);

        return ingredientCard;
    }

    function createBlankIngredientCard () {
        let blankIngredient = {
            ingredient_fruitLetter: 'z',
            id: 999,
            ingredient_image_url: '/images/individual_ingredients/blank.jpeg',
            ingredient_name: ''
        }
        let blankIngredientCard = createIngredientCard(blankIngredient);
        return blankIngredientCard;
    }

    function goRight() {
        startIngredient++;
        if (startIngredient > ingredientArray.length) {startIngredient -= ingredientArray.length}
        populateIngredientChoices(startIngredient);
    }

    function goLeft() {
        startIngredient--;
        if (startIngredient < 0) {startIngredient += ingredientArray.length}
        populateIngredientChoices(startIngredient);
    }

    function setUpIngredientArray() {
        ingredientArray = [];
        // get the ingredients
        $.get('/api/ingredients', (dbIngredients) => {
            // each ingredient gets added to array
            let ingredients = dbIngredients;
            for (let i=0; i<ingredients.length; i++) {
                ingredientArray.push( {
                    rawData: ingredients[i],
                    id: ingredients[i].id,
                    ingredient_fruitLetter: ingredients[i].fruitLetter,
                    ingredient_name: ingredients[i].ingredient_name,
                    ingredient_description: ingredients[i].ingredient_description,
                    ingredient_unit: ingredients[i].ingredient_unit,
                    ingredient_image_url: ingredients[i].ingredient_image_url,
                    ingredient_inventory: ingredients[i].ingredient_inventory,
                    ingredient_capacity: ingredients[i].ingredient_capacity,
                    ingredient_restock_amount: ingredients[i].restock_amount,
                    ingredient_restock_price: ingredients[i].ingredient_restock_price,
                    ingredient_selected: false
                });
            }
            console.log('created array', ingredientArray.length)
        });
    }

});