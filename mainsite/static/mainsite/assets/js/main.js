$(function(){
//    buttons
    $('#getStarted').click(function(){
        window.location = '/pricing';
    });

    $('#getStartedTwo').click(function(){
        window.location = '/pricing';
    });

    $('#learnMore').click(function(){
        window.location = '/about';
    });

//    scrolling effect
    $('.navbar-blur').hide(); // initialize
$(window).scroll(function () {
      // alert('code working');
    let scrollValue = 142;
    if ( $(this).scrollTop() > scrollValue && !$('.navbar-blur').hasClass('fixed-top') ) {

        if ($('.navbar-blur').hasClass('d-none')){
            $('.navbar-blur').removeClass('d-none');
        }
        if (!$('.navbar-blur').hasClass('fixed-top')){
            $('.navbar-blur').addClass('fixed-top');
        }

        $('.navbar-blur').slideDown();
    } else if ( $(this).scrollTop() <= scrollValue ) {

        if (!$('.navbar-blur').hasClass('d-none')){
            $('.navbar-blur').addClass('d-none');
        }
        if ($('.navbar-blur').hasClass('fixed-top')){
            $('.navbar-blur').removeClass('fixed-top');
        }
        $('.navbar-blur').slideUp();
    }
});

$(window).scroll(233);

});