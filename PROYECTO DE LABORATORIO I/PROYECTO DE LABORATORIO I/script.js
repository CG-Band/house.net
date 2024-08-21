document.addEventListener("DOMContentLoaded", function () {
    $('.multiple-card-slider .carousel').each(function () {
        var currentCarouselId = '#' + $(this).attr('id');
        const multipleItemCarousel = document.querySelector(currentCarouselId);

        const options = {
            interval: false,
            wrap: true
        };

        if ($(window).width() >= 576) {
            options.wrap = false;

            var scrollPosition = 0;

            $(currentCarouselId + ' .carousel-control-next').on('click', function () {
                scrollPosition += $(currentCarouselId + ' .carousel-item').width();
                $(currentCarouselId + ' .carousel-inner').animate({
                    scrollLeft: scrollPosition
                }, 600);
            });

            $(currentCarouselId + ' .carousel-control-prev').on('click', function () {
                scrollPosition -= $(currentCarouselId + ' .carousel-item').width();
                $(currentCarouselId + ' .carousel-inner').animate({
                    scrollLeft: scrollPosition
                }, 600);
            });
        } else {
            $(currentCarouselId + ' .carousel-inner').addClass('mobile-carousel');
        }

        new bootstrap.Carousel(multipleItemCarousel, options);
    });
});



