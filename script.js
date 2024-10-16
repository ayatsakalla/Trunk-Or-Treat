$(document).ready(function () {

    // click on the button under the ghost home page
    $('#beware').on('click', () => {
        $('#beware').hide();
        $('#boo-text').removeClass('magnificent');
        $('#boo-text').addClass('feast');
        $('#boo-text').addClass('display-1');
        $('#boo-text').text('BOO!');
        $('#cont-fluid').removeClass('d-none').fadeIn();
    })



});