$(document).ready ( () => {
    // initialize the recordset
    updateRecordSet();

    function updateRecordSet() {
        $.get('/api/smothiis', (data) => {
            let recordSet = data;
            console.log(recordSet);
            // makeRecordsTable('Smothiis', recordSet);
            $('#data-table').DataTable( {
                data: recordSet,
                columns: [
                    {data: 'smothii_name'},
                    {data: 'smothii_description'},
                    {data: 'smothii_creator'},
                    {data: 'smothii_image_url'},
                    {data: 'smothii_price'},
                    {data: 'smothii_available'},
                    {data: 'smothii_total_sold'}
                ],
                paging: false,
                searching: false
            });
        });
    }
});
