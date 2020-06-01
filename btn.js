$(document).ready(function () {
    var $display = $('.contact-form').hasClass('openned');
    
    $('.spoiler-body').hide();
    $('.spoiler-title').click(function () {
        $(this).toggleClass('opened').toggleClass('closed').next().slideToggle();
        if ($(this).hasClass('opened')) {
            $(this).html('Hide');
        } else {
            $(this).html('View details');
        }
    });
    
    $('.contact-form .btn').click(function () {
        $('.contact-form').removeClass('openned')
    });
    
    $('.home .btn').click(function () {
        $('.contact-form').addClass('openned')
    });
});