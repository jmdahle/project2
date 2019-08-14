$(document).ready ( () => {
    // document event listeners
    //$(document).on('click', '#add-new', showNewRecordCard);
    $(document).on('click', '#btn-purchase-smothii', startPurchase);
    $(document).on('click', '#btn-confirm-ok', confirmPurchase);
    $(document).on('click', '#btn-receipt-ok', receiptPurchase);
    $(document).on('click', '#btn-make-ok', makePurchase);
    $(document).on('click', '#btn-finish-ok', finishPurchase);

    // global variables
    let smothii_id = $('#smothii-id').attr('data-smothii-id');

    // set up page
    closeModalConfirm();
    closeModalMake();
    closeModalFinish();
    closeModalReceipt();
    //load main panel with smothii
    getSmothii(smothii_id);
    console.log('smothii_id', smothii_id);

    function startPurchase(event) {
        event.preventDefault()
        // hide the purchase button
        hidePurchaseButton();
        // show the confim modal
        let message = 'Please swipe your card to confirm your purchase';
        openModalConfirm(message);
    }

    function confirmPurchase() {
        // hide the confirm modal
        closeModalConfirm();
        // make the purcase!
        updateDbPurchase(smothii_id);
        // show the make modal
        let message = 'Thank you for your purchase.';
        openModalReceipt(message)
    }

    function updateDbPurchase(purchased_smothii_id) {
        $.post(`/api/purchase/${purchased_smothii_id}`, (dbPurchase) => {
            console.log(dbPurchase);
        }).then( () => {
            console.log('check db to confirm purchase');
        });
    }

    function receiptPurchase() {
        // hide the receipt modal
        closeModalReceipt();
        // show the make modal
        let message = 'Making your delicious smothii';
        openModalMake(message);
        // here is where the animated gif goes
        //set a timer
        // when timer ends, call makePurchase();
    }

    function makePurchase() {
        // hide the make modal
        closeModalMake();
        // show the receipt modal
        let message = 'Please enjoy your smothii';
        openModalFinish(message);
    }

    function finishPurchase() {
        // hide the finish modal
        closeModalFinish();
        // go back to index
        // Simulate an HTTP redirect:
        window.location.replace("/jd-index");
    }



    function hidePurchaseButton() {
        $('#btn-purchase-smothii').hide();
    }

    function showPurchaseButton() {
        $('$btn-purchase-smothii').show();
    }
    function closeModalConfirm() {
        $('#modal-confirm').hide();
    }

    function closeModalMake() {
        $('#modal-make').hide();
    }
    
    function closeModalFinish() {
        $('#modal-finish').hide();
    }

    function closeModalReceipt() {
        $('#modal-receipt').hide();
    }


    function openModalConfirm(message) {
        $('#confirm-message').text(message);
        $('#modal-confirm').show();
    }

    function openModalReceipt(message) {
        $('#receipt-message').text(message);
        $('#modal-receipt').show();
    }

    function openModalMake(message) {
        $('#make-message').text(message);
        $('#modal-make').show();
    }
    
    function openModalFinish(message) {
        $('#finish-message').text(message);
        $('#modal-finish').show();
    }

    function getSmothii(id) {
        $.get(`/api/smothii/detail/${id}`, (dbSmothii) => {
            let selectedSmothii = dbSmothii;
            console.log('selected smothii:', selectedSmothii);
            //return selectedSmothii
        }).then( (selectedSmothii) => {
            let smothiiCardArray = [];
            smothiiCardArray = createSmothiiCard(selectedSmothii[0]);
            let smothiiCard = $(smothiiCardArray.join(''));
            $('#smothii-for-purchase').append(smothiiCard);
        });
    }

    function createSmothiiCard(smothii) {
        console.log(smothii);
        let smothiiCard = [];
        smothiiCard.push(`<div class='card smothii-card' style='width: 650px;' data-smothii-id='${smothii.id}'>`)
        smothiiCard.push(`<img src='${smothii.smothii_image_url}' class='card-img-top' alt='${smothii.smothii_name}'>`);
        smothiiCard.push(`<div class='card-body'>`);
        smothiiCard.push(`<h5 class='card-title'>${smothii.smothii_name} - created by ${smothii.smothii_creator}</h5>`);
        smothiiCard.push(`<p class='card-text'>${smothii.smothii_description}</p>`);
        smothiiCard.push(`<p class='card-text'>Price: ${smothii.smothii_price}`);
        smothiiCard.push(`</div>`);
        smothiiCard.push(`</div>`);

        return smothiiCard;
    }

});