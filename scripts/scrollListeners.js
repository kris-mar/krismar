$(function() {
    var aChildren = $(".navigation li").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values


    $(window).scroll(function() {
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();

        for (var i = 0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top; // get the offset of the div from the top of page
            var divHeight = $(theID).height(); // get the height of the div in question
            if (windowPos >= divPos - 10 && windowPos < (divPos - 10 + divHeight)) {
                $(".navigation a").removeClass("active");
                $("a[href='" + theID + "']").addClass("active");
            } else {
                $("a[href='" + theID + "']").removeClass("active");
            }
        }

        if (windowPos + windowHeight == docHeight) {
            if (!$(".navigation li:last-child a").hasClass("active")) {
                var navActiveCurrent = $(".active").attr("href");
                $(".navigation a").removeClass("active");
                $("a[href='" + navActiveCurrent + "']").removeClass("active");
                $(".navigation li:last-child a").addClass("active");
            }
        }

        if(windowPos < 75) {
            $(".navigation a").removeClass("active");
            $(".navigation li:first-child a").addClass("active");
        }
    });

    // page scrolling feature
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });
    });
});