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
                    minlength: 3
                },
                fullName: {
                    required: true,
                    minlength: 1
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
        // responsive: {
        //     1200: {
        //         margin: 15
        //     },
        //     1200: {
        //         items: 3
        //     },
        //     767: {
        //         items: 2
        //     },
        //     667: {
        //         items: 2
        //     },
        //     600: {
        //         items: 1
        //     },
        //     0: {
        //         items: 1
        //     },
        // }
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
        $(".tooltip-main").append(mbit)
        mbit.addClass("designer__current-speed_text")
    })();


    //попап
    $("a[href='#callBack']").magnificPopup({
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });});

$(document).ready(function () {

    // Инициализация маски в input
    // $(".mask").mask("+38(999) 999-99-99");

    //mob menu
    // $("#my-menu").mmenu({
    //     extensions: ["theme-black", "effect-menu-slide", "pagedim-black"],
    //     offCanvas: {
    //         position: "right"
    //     }
    // });

    //   Get the API
    // var api = $("#my-menu").data("mmenu");
    //
    // //   Hook into methods
    // api.bind("open:finish", function() {
    //     $(".hamburger").addClass("is-active")
    // }).bind("close:finish", function () {
    //     $(".hamburger").removeClass("is-active")
    // })

    //styling select
    // $("select").selectize({
    //     create: true,
    //     sortText: "text",
    // });

    //hide preloader
    $(".loader_inner").fadeOut("slow");
    $(".loader").fadeOut("slow");

    //com
});




