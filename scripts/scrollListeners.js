$(function() {

    $('#about-nav').addClass('active');

    $('#about-h').on('inview', function (event, isInView) {
        if (isInView) {
            $(".navigation a").removeClass("active");
            $("#about-nav").addClass("active");
        } else {

        }
    });

    $('#work-h').on('inview', function (event, isInView) {
        if (isInView) {
            $(".navigation a").removeClass("active");
            $("#work-nav").addClass("active");
        } else {

        }
    });

    $('#contact-h').on('inview', function (event, isInView) {
        if (isInView) {
            $(".navigation a").removeClass("active");
            $("#contact-nav").addClass("active");
        } else {

        }
    });

    // page scrolling feature
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            console.log("smooth scrolling...");
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });
    });
});