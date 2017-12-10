// validation
$(document).ready(function () {
    $.each($("form"), function () {
        $(this).validate({
            errorPlacement: function (error, element) {
            },
            rules: {
                router: {
                    required: true
                },
                tv:{
                    required: true
                },
                additional:{
                    required: true
                },
                street: {
                    required: true,
                    minlength: 1
                },
                fullName: {
                    required: true,
                    minlength: 2
                },
                house: {
                    required: true,
                    minlength: 1
                },
                flat: {
                    required: true,
                    minlength: 1
                },
                phone: {
                    required: true,
                    minlength: 5
                },
                canals: {
                    required: true,
                },

                receiver: {
                    required: true,
                },
                equipment: {
                    required: true,
                },
            },
            messages:{
                router: {
                    required: false
                },
                tv:{
                    required: false
                },
                additional:{
                    required: false
                }
            }
        });
    });
});

//modal
$(document).ready(function () {
    $("#service__slider").owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        dots: false,
        margin: 30,
        autoplay: false,
        response: true,
        navText: ["<i class=\"fa fa-angle-left slider__btn\"></i>","<i class=\"fa fa-angle-right slider__btn\"></i>"],
        autoplayTimeout: 4000,
    });

    $("#standart-tarifs__slider").owlCarousel({
        loop: true,
        items: 4,
        nav: false,
        dots: true,
        margin: 0,
        // autoplay: true,
        response: true,
        navText: ["<i class=\"fa fa-angle-left slider__btn\"></i>","<i class=\"fa fa-angle-right slider__btn\"></i>"],
        autoplayTimeout: 4000,
        responsive: {
            1615: {
                items: 4
            },
            1200: {
                items: 3
            },
            992: {
                items: 2
            },
            0: {
                items: 1
            },
        }
    });


    let CustomNextBtn =  $('.standart-tarifs .customNextBtn');
    let CustomPrevBtn =  $('.standart-tarifs .customPrevBtn');

    CustomNextBtn.click(function() {
        $("#standart-tarifs__slider").trigger('next.owl.carousel', [700]);
    });
    CustomPrevBtn.click(function() {
        $("#standart-tarifs__slider").trigger('prev.owl.carousel', [700]);
    });


    var summ = $(".designer__price-finish");
    var priceSpeed = 10;

    $("#designer__set_speed").slider({
        tooltip: 'always',
        formatter: function(value) {
            summ.text(value * priceSpeed);
            return  value;
        },
        ticks_labels: ['0 Mbit/s', '25 Mbit/s', '50 Mbit/s', '75 Mbit/s', '100 Mbit/s'],
        min: 0,
        max: 100,
        step: 10,
        }

    );



    (function changeFinalPrice() {
        var mbit = $("<span></span>").text("Mbit/s");

        $(".tooltip-main").append(mbit);
        mbit.addClass("designer__current-speed_text")
    })();



    //попап
    $("a[href='#callBack']").magnificPopup({
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });



    //video
    let playButton = $("#play-pause"),
        video = $("#video video"),
        videoBg = $(".video__bg");

    playButton.click(function() {
        video[0].volume = 0;

        if(video[0].paused){
            video[0].play();
            playButton.fadeOut();
            videoBg.css({"opacity":"0"});
        }else{
            video[0].pause();

        }
    });
    video.click(function() {
        if(this.play()){
            this.pause();
            playButton.fadeIn();
            videoBg.css({"opacity":"1"});
        }
    });



    $('.slider-shares__wrap').slick({
        // infinite: false,
        centerMode: true,

        centerPadding: '290px',
        slidesToShow: 1,
        prevArrow: $('.slider-shares .customPrevBtn'),
        nextArrow: $('.slider-shares .customNextBtn'),
        responsive:[{

            breakpoint: 1600,
            settings:{
                centerPadding: '200px',
            },

            breakpoint: 1200,
            settings:{
                centerPadding: '30px',
                centerMode: false,
            },

        }]
    });


    // (function($) {
    //
    //     $.fn.equalHeights = function() {
    //         var maxHeight = 0,
    //             $this = $(this);
    //
    //         $this.each( function() {
    //             var height = $(this).innerHeight();
    //
    //             if ( height > maxHeight ) { maxHeight = height; }
    //         });
    //
    //         return $this.css('height', maxHeight);
    //     };
    //
    //     // auto-initialize plugin
    //     $('[data-equal]').each(function(){
    //         var $this = $(this),
    //             target = $this.data('equal');
    //         $this.find(target).equalHeights();
    //     });
    //
    // })(jQuery);


    // $(".news__name").equalHeights();

    $(".hamburger").on("click", function () {
        $( ".header__mob-menu" ).toggleClass( "active" );
        $( ".hamburger.hamburger--collapse" ).toggleClass( "is-active" );
    })

});






$(document).ready(function () {
    //hide preloader
    $(".loader_inner").fadeOut("slow");
    $(".loader").fadeOut("slow");

});
