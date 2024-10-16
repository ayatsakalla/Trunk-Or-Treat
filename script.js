$(document).ready(function () {
    $('#beware').on('click', () => {
        $('#beware').hide();
        $('#boo-text').text('BOO!');
        $('#cont-fluid').removeClass('d-none').fadeIn();
    })
});