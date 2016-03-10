$(function() {

    $('#about-nav').addClass('active');

    $('#about-h').on('inview', function (event, isInView) {
        if (isInView) {
            console.log('about in view');
            $(".navigation a").removeClass("active");
            $("#about-nav").addClass("active");
        } else {

        }
    });

    $('#work-h').on('inview', function (event, isInView) {
        if (isInView) {
            console.log('work in view');
            $(".navigation a").removeClass("active");
            $("#work-nav").addClass("active");
        } else {

        }
    });

    $('#contact-h').on('inview', function (event, isInView) {
        if (isInView) {
            console.log('contact in view');
            $(".navigation a").removeClass("active");
            $("#contact-nav").addClass("active");
        } else {

        }
    });

    
});