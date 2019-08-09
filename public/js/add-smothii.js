$(document).ready ( () => {
    // document event listeners
    $(document).on('click', '#add-new', showNewRecordCard);
    $(document).on('click', '#btn-submit-record', submitNewRecord);
    $(document).on('click', '#btn-cancel', closeNewRecordCard);

    function showNewRecordCard() {
        // show the modal
        console.log('log - dialog opened')
        $('#new-record-card').show('true');
    }

    function submitNewRecord() {
        let id = $('#record-id').attr('data-value');
        console.log('id is ', id);
        console.log('log - submitNewRecord started');
        //do something
        if (id === 'new') {
            // collect newRecord data
            let newRecord = {
                smothii_name: $('#smothii-name').val().trim(),
                smothii_description: $('#smothii-description').val().trim(),
                smothii_creator: $('#smothii-creator').val().trim(),
                smothii_image_url: $('#smothii-image-url').val().trim()
            }
            // submit new record through api
            $.post('/api/add/smothii', newRecord).then( (returnData) => {
                console.log('Added:', newRecord);
            }).then( () => {
                console.log('log - CREATE submitNewRecord ended');
                closeNewRecordCard();
            });
        } else {
            // collect newRecord data
            let updatedRecord = {
                id: id,
                smothii_name: $('#smothii-name').val().trim(),
                smothii_description: $('#smothii-description').val().trim(),
                smothii_creator: $('#smothii-creator').val().trim(),
                smothii_image_url: $('#smothii-image-url').val().trim()
            }
            // update record through api
            console.log ('log - update record');
            $.ajax({    // PUT for a database UPDATE
                method: 'PUT',
                url: '/api/update/smothii',
                data: updatedRecord
            }).then( (returnData) => {
                console.log('Added:', updatedRecord);
                console.log('log - UPDATE submitNewRecord ended');
                closeNewRecordCard();
            });
        }
    }

    function closeNewRecordCard() {
        console.log('log - close dialog');
        $('#new-record-card').hide();
        //clear inputs
        $('#record-id').attr('data-value','new');
        $('#record-id').text('new');
        $('#smothii-name').val('');
        $('#smothii-description').val('');
        $('#smothii-creator').val('');
        $('#smothii-image-url').val('');
    }

});