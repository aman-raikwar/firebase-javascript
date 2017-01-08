/* global $ */
/* global swal */

$(function() {
    $('#showIP').on('click', function() {
        swal.queue([{
            title: 'Your public IP',
            confirmButtonText: 'Show my public IP',
            text: 'Your public IP will be received via AJAX request',
            showLoaderOnConfirm: true,
            preConfirm: function() {
                return new Promise(function(resolve) {
                    $.get('https://api.ipify.org?format=json').done(function(data) {
                        swal.insertQueueStep(data.ip);
                        resolve();
                    });
                });
            }
        }]);
    });

});
