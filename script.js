$(document).ready(function () {

    // click on the button under the ghost home page
    $('#beware').on('click', () => {
        $('#beware').hide();
        $('#boo-text').text('BOO!');
        $('#cont-fluid').removeClass('d-none').fadeIn();
    })


    
});