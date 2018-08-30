// run after loading complete 
$(document).ready(function () {


    $('.header').waypoint(function (direction) {
        // class: heading-primary-main animate
        $('.js--animate-header-main').addClass('animated fadeInLeft delay-2s');

        // class: heading-primary-sub animate
        $('.js--animate-header-sub').addClass('animated fadeInRight  delay-2s');
        console.log('heading-primary main and sub animated');
    });

});
