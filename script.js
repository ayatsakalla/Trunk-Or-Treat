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

    $('#info-btn').on('click', () => {
        $('#more-information').toggle().removeClass('d-none');
        if ($('#more-information').is(':visible')) {
            $('#info-btn').text('CLICK TO HIDE INFO');
        } else {
            $('#info-btn').text('CLICK TO SHOW INFO');
        }
    });



    $('.image-text').hide();

    $('.show-img').on('mouseover', function () {
        $(this).siblings('.image-text').stop(true, true).fadeIn();
    });

    $('.show-img').on('mouseleave', function () {
        $(this).siblings('.image-text').stop(true, true).fadeOut();
    });

    $('.part-info').hide();

    $('.eventy').on('click', function () {
        $(this).closest('.row').next('.part-info').stop(true, true).slideToggle();
    });

});